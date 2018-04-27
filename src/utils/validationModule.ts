
import validator from 'validator';


export default class FormValidation {

	public validation:{};
	public isValid:boolean;

	constructor(validations:any) {
		// validations is an array of form-specific validation rules
		this.validation = validations;
		this.isValid = false;
	}

	public validate(state:{}) {
		// iterate through the validation rules and construct
		// a validation object, and return it
		let valid: {
			isValid:boolean,
		};
		valid.isValid = true;
		return valid;
	}

}

interface Iruleset {	
	field: string;
	method: string;
	args: [any];
	validWhen: boolean;
	message: string;	  
}

const TestValidation = { email: 'loony tunes', age: 19};

// const TestRules =   {
//     field: 'age',
//     method: validator.isInt,
//     args: [{min: 21, max: 65}],  // an array of additional arguments
//     validWhen: true,
//     message: 'Your age must be an integer between 21 and 65'
// };


// export class FormValidator {

// 	public validations:Iruleset[];
// 	public isValid:boolean;

// 	constructor(validations:any) {
// 		//validation rules package
// 		this.validations = validations;
// 	}

// 	public validate(state:any) {
// 		// start out assuming valid
// 		let validation = this.valid();
// 		// for each validation rule
// 		this.validations.forEach((rule) => {

// 			// if the field isn't already marked invalid by an earlier rule
// 			if (!validation[rule.field].isInvalid) {
// 				// determine the field value, the method to invoke and
// 				// optional args from the rule definition
// 				const field_value = state[rule.field].toString();
// 				const args = rule.args || [];
// 				const validation_method = typeof rule.method === 'string' ?
// 				validator[rule.method] :
// 				rule.method;

// 				// call the validation_method with the current field value
// 				// as the first argument, any additional arguments, and the
// 				// whole state as a final argument.  If the result doesn't
// 				// match the rule.validWhen property, then modify the
// 				// validation object for the field and set the isValid
// 				// field to false
// 				if(validation_method(field_value, ...args, state) != rule.validWhen) {
// 					validation[rule.field] = { 
// 					isInvalid: true, 
// 					message: rule.message 
// 				};
// 				validation.isValid = false;
// 				}
// 			}
// 		});
// 		return validation;
// 	}

// 	// create a validation object for a valid form
//   	public valid() {
//     	const validation = {};    
//     	this.validations.map((rule) => (
//         	validation[rule.field] = { isInvalid: false, message: '' }
//     	));
//     	return { isValid: true, ...validation };
// 	}	
// }
