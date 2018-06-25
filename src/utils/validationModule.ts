
import validator = require('validator');

interface IRuleConfig {
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
//  Result Object class
//****************************************************************************

class ValidationObject {
   public isValid: boolean;
   public message: string;

   constructor(){
      this.isValid = true;
      this.message = null;
   }
}


//****************************************************************************
// Rule class
//****************************************************************************

class Rule {
	public field: string;
   public message: string;
   public active: boolean;
   public rule:any;
   
   public constructor(rule:IRuleConfig){
      this.field = rule.field;
      this.message = rule.message;
      this.rule = rule.rule;
      this.active = false;
   }
   
}



//****************************************************************************
// Validation Class
//****************************************************************************

export default class FormValidation {

	// properties
	private rules:Rule[];
	private result:IValidationResult;
	private active: boolean;

	// constructor
	constructor(rules:IRuleConfig[]) {
      this.rules = [];
      rules.forEach((rule)=> { 
         this.rules.push(new Rule(rule));
      });
      this.result = this.getDefaultResultObject();
      this.active = false;
   }
   
   public activate() {
      this.active = true;
      this.rules.forEach( (rule) => {
         rule.active = true;
      });
   }
      
   public disable() {
      this.active = false;      
   }

	// create all valid validation response
	public getDefaultResultObject() {
		let validation: any = [];

		this.rules.map((rule) => {
				validation[rule.field] = new ValidationObject();
			}
		);

		return { formIsValid: true, validations: {...validation} };
	}


	// validate rules against received form
	public validate(form:any) {

		// dont validate if stopped 
		if (!this.active) {
			return false;
		}
		
		// assume all state fields valid
		let validatResult = this.getDefaultResultObject();

		// compare rules to state fields
		this.rules.forEach( (rule) => 
      {
         const field = rule.field;

         // check that rule has matching state field
         if (field in form) {						
         
            // if rule is active and field is still valid		
            if (rule.active && validatResult.validations[field].isValid){               
                              
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
      
      validatResult.formIsValid = this.isFormValid(validatResult);
      this.result = validatResult;
      return this.result;
   }

   public isFormValid(result: IValidationResult){
      let formIsValid = true;

      for (const x in result.validations) {
			if ( !result.validations[x].isValid ){
				formIsValid = false;				
			}
		}

      return formIsValid;
   }
   
   public validateAll() {
      // validate all fields if validation is on
   }

   public validateField() {
      // validate single field and return validation object
   }

	public isValid(field:string){
		if (field in this.result.validations){
			let validity = this.result.validations[field].isValid;
			return validity;
		}		
		return null;
	}

	public getMessage(field:string){
		if (field in this.result.validations){
			let message = this.result.validations[field].message;
			return message;
		}		
		return null;
	}

	public getValidatedMessage(field:string){
		if (field in this.result.validations){
			if (!this.result.validations[field].isValid) {
				let message = this.result.validations[field].message;
				return message;
			}
		}		
		return null;
	}
}

