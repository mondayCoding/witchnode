
//****************************************************************************
// Libraries
//****************************************************************************

import * as React from 'react';
import FormValidator from '../../utils/validationModule';
import API from '../../api/UserForm';

import Input from '../../components/input';
import Button from '../../components/button';
import anno from '../../utils/annoModule';


//****************************************************************************
// Interface
//****************************************************************************

interface IState {
   form:IForm;
}

interface IForm {
   "username":string;
   "email":string;
   "location":string;
   "accountNum":string;
   "color":string;
   "age": string;
   "date": number;
}


//****************************************************************************
// Form
//****************************************************************************

export default class UserForm extends React.Component<any,any> {

   public state:IState = {
      form : {
         username:"",
         email:"",
         location:"",
         accountNum:"",
			color:"",
			age: "", 
			date: Date.now()
      }
   };

	public validation: FormValidator;
	public validating: boolean;

   public componentWillMount(){ 
		
      const res = this.props.res;
      const test = FormValidator.test;

      this.validation = new FormValidator([
         {field: "email", 		message: res.emailIsInvalid, 		  validIf: (x) => test.isEmail(x) },
         {field: "accountNum",message: res.accNumIsInvalid,		  validIf: (x) => test.isInt(x)},
         {field: "username", 	message: "Name is required field", validIf: (x) => !test.isEmpty(x) },
         {field: "username", 	message: res.usernameIsTaken,		  validIf: (x) => (x !== "asd") && (x !=="Mario" )},
         {field: "username", 	message: res.usernameIsInvalid,	  validIf: (x) => test.isLength(x, {min:3, max:20})},
         {field: "color", 		message: "must be red",				  validIf: (x) => x === "red" }
      ]);
	}
	
	public validateForm(){
		this.validation.validate(this.state.form);
	}

   public onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
      let newState:any = {...this.state.form};
      newState[e.target.name] = e.target.value;

      this.setState({form:newState});
   }

   public async onsubmitHandler(event:any){
      event.preventDefault();
      this.validation.activate();
      this.forceUpdate();

      let data:any = await API.postUserForm(this.state.form);
      anno.announce("server message", data);
   }

   public render(){
      const {username, email, location, accountNum, color, age } = this.state.form;
      let res = this.props.res;
      let validify = this.validation;
      const onChangeHandler = this.onChangeHandler;
      let onSubmit = (event:any)=>this.onsubmitHandler(event);

      this.validateForm();  

      return (
         <form className="userform spacing" onSubmit={onSubmit}>
            <div className="spacing"></div>

            <Input 
               name="username" 
               label={res.username} 
               value={username} 
               onChange={onChangeHandler} 
               id="nameID"
               validation={validify.getValidatedMessage("username")} 
            />
            <Input 
               name="email"
               tooltipInfo="You wont actually recieve any emails form us... :)"
               label={res.email} 
               value={email} 
               onChange={onChangeHandler} 
               id="emailID"
               validation={validify.getValidatedMessage("email")} 
            />
            <Input 
               name="location" 
               tooltipInfo="Original home country" 
               label={res.location}  
               value={location} 
               onChange={onChangeHandler} 
               id="locationID"
            />
            <Input 
               name="accountNum" 
               tooltipInfo="Use only numbers"
               label={res.accountNum} 
               value={accountNum} 
               onChange={onChangeHandler} 
               id="accountNumID"
               validation={validify.isValid("accountNum") ? null : validify.getMessage("accountNum")} 
            />
            <Input 
               name="color" 
               label={res.color} 
               value={color} 
               onChange={onChangeHandler} 
               id="colorID"
               validation={validify.getValidatedMessage("color")}					
            />
            <Input 
               name="age" 
               label={res.age} 
               value={age} 
               onChange={onChangeHandler} 
               id="ageID"
               validation={validify.getValidatedMessage("age")}
            />

            <div className="spacing"></div>

            <Button buttonText={res.submit} type="submit" />

            <div className="line-thin"></div>

         </form>
      );
   }
}
