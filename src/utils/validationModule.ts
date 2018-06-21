
import validator = require('validator');

interface IValidationRule {
	field: string;
	message: string;
	rule(param:string):boolean;
}

interface IValidationFieldResult {
	isValid: boolean;
	message: string;
}

interface IValidationResult {
	validations: {[x:string]: IValidationFieldResult};
	formIsValid: boolean;
}




//****************************************************************************
// Validation Class
//****************************************************************************

export default class FormValidation {

	// properties
	public validationRules:[IValidationRule];
	public validationResult:IValidationResult;
	public stopValidation: boolean;

	// constructor (take validation ruleset as argument)
	constructor(validationRules:[IValidationRule]) {
		this.validationRules = validationRules;
		this.validationResult = this.getDefaultValidatResult();
		this.stopValidation = false;
	}

	// create all valid validation response
	public getDefaultValidatResult() {
		let validation: any = [];

		this.validationRules.map((rule) => {
				validation[rule.field] = { isValid:true, message: null };
			}
		);

		return { formIsValid: true, validations: {...validation} };
	}


	// validate rules against received form
	public validate(form:any) {

		// dont validate if stopped 
		if (this.stopValidation) {
			return;
		}
		
		// assume all state fields valid
		let validatResult = this.getDefaultValidatResult();

		// compare rules to state fields
		this.validationRules.forEach( (rule) => 
		{
			const field = rule.field;

			// check that rule has matching state field
			if (field in form) {						
			
				// if not already set invalid			
				if (validatResult.validations[field].isValid){
										
					const formField = (form[field]).toString();
					const result = rule.rule(formField);
					const validationMessage = (result) ? null : rule.message ;				

					// create validation response object
					validatResult.validations[field] = {
						isValid: result,
						message: validationMessage
					};				

				}
			} else {
				console.log("there was ValidationRule with no matching state-field");				
			}
		});
		
		for (const x in validatResult.validations) {
			if ( !validatResult.validations[x].isValid ){
				validatResult.formIsValid = false;				
			}
		}

		this.validationResult = validatResult;
		console.log(validatResult);
		
		return validatResult;
	}

	public isValid(field:string){
		if (field in this.validationResult.validations){
			let validity = this.validationResult.validations[field].isValid;
			return validity;
		}		
		return null;
	}

	public getMessage(field:string){
		if (field in this.validationResult.validations){
			let message = this.validationResult.validations[field].message;
			return message;
		}		
		return null;
	}

	public getValidatedMessage(field:string){
		if (field in this.validationResult.validations){
			if (!this.validationResult.validations[field].isValid) {
				let message = this.validationResult.validations[field].message;
				return message;
			}
		}		
		return null;
	}

	public stopValidating(field:string){
		this.validationResult = this.getDefaultValidatResult();
		this.stopValidation = true;
	}

	public continueValidating(field:string){
		this.stopValidation = false;
	}
}

