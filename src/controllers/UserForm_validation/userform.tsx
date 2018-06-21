
//****************************************************************************
// Libraries
//****************************************************************************

import * as React from 'react';
import axios from 'axios';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import FormValidation from '../../utils/validationModule';
import validator = require("validator");

import Input from '../../components/input';
import Button from '../../components/button';
import anno from '../../utils/annoModule';


//****************************************************************************
// Interface
//****************************************************************************

interface IStates {
   form: {
      username:string;
      email:string;
      location:string;
      accountNum:string;
		color:string;
		age: string;
		date: Date;
   };
}


//****************************************************************************
// Form
//****************************************************************************

export default class UserForm extends React.Component<any,any> {

   public state:IStates = {
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

	public validation: FormValidation;
	public validating: boolean;

   public componentWillMount(){ 
		
		const res = this.props.res;

    	this.validation = new FormValidation([
			{ field: "email", 		message: res.emailIsInvalid, 			 rule: (x) => validator.isEmail(x) },
			{	field: "accountNum",message: res.accNumIsInvalid,			 rule: (x) => validator.isInt(x, {min:0, max:9999})},
			{	field: "username", 	message: "Name is required field", 		rule: (x) => !validator.isEmpty(x) },
			{	field: "username", 	message: res.usernameIsTaken,			 rule: (x) => (x !== "asd") && (x !=="Mario" ) && (x !== "nom") },
			{ field: "username", 	message: res.usernameIsInvalid,		 rule: (x) => validator.isLength(x, {min:3, max:16})},
			{ field: "color", 		message: "must be red",					   rule: (x) => x === "red" }
		]);
	}
	
	public validateForm(state = this.state.form){
		this.validation.validate(state);
	}

   public onChangeHandler(event:any){
      let newState:any = {...this.state.form};
      newState[event.target.name] = event.target.value;
		
		if (this.validating){
			this.validateForm(newState);
		};
		
    	this.setState({form:newState});
   }

   public onsubmitHandler(event:any){
		event.preventDefault();
		this.validating = true;
		this.validateForm();
		this.forceUpdate();
		
      axios.post("/api/forms/userform", {form:this.state.form})
      .then((response) => {
         anno.announce( response.data, "message from server");
      })
      .catch((error) => {
         console.log(error.response);
         anno.announce(error.response.data, "Error", "error");
      });
   }

   public render(){
		const {username, email, location, accountNum, color, age } = this.state.form;
      let res = this.props.res;
      let validify = this.validation;
      let onChange = (event:any)=>this.onChangeHandler(event);
      let onSubmit = (event:any)=>this.onsubmitHandler(event);


      return (
         <form className="userform spacing" onSubmit={onSubmit}>
            <div className="spacing"></div>

            <Input 
               name="username" 
               label={res.username} 
               value={username} 
               onChange={onChange} 
					id="nameID"
					validation={validify.getValidatedMessage("username")} 
            />
            <Input 
               name="email"
               tooltipInfo="You wont actually recieve any emails form us... :)"
               label={res.email} 
               value={email} 
               onChange={onChange} 
					id="emailID"
					validation={validify.getValidatedMessage("email")} 
            />
            <Input 
               name="location" 
               tooltipInfo="Original home country" 
               label={res.location}  
               value={location} 
               onChange={onChange} 
					id="locationID"
            />
            <Input 
               name="accountNum" 
               tooltipInfo="Use only numbers"
               label={res.accountNum} 
               value={accountNum} 
               onChange={onChange} 
					id="accountNumID"
					validation={validify.isValid("accountNum") ? null : validify.getMessage("accountNum")} 
            />
            <Input 
               name="color" 
               label={res.color} 
               value={color} 
               onChange={onChange} 
					id="colorID"
					validation={validify.getValidatedMessage("color")}					
            />
            <Input 
               name="age" 
               label={res.age} 
               value={age} 
               onChange={onChange} 
               id="ageID"
               validation={validify.getValidatedMessage("age")}
            />

            <div className="spacing"></div>

            <Button buttonText={res.submit} type="submit" />

            <div className="line-thin"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="line-thin"></div>


            <DayPickerInput />
            <DayPicker />
            <DayPicker />
         </form>
      );
   }
}
