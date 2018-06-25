
//****************************************************************************
// Libraries
//****************************************************************************

import * as React from 'react';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
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
         {field: "email", 		message: res.emailIsInvalid, 		  rule: (x) => test.isEmail(x) },
         {field: "accountNum",message: res.accNumIsInvalid,		  rule: (x) => test.isInt(x)},
         {field: "username", 	message: "Name is required field", rule: (x) => !test.isEmpty(x) },
         {field: "username", 	message: res.usernameIsTaken,		  rule: (x) => (x !== "asd") && (x !=="Mario" )},
         {field: "username", 	message: res.usernameIsInvalid,	  rule: (x) => test.isLength(x, {min:3, max:20})},
         {field: "color", 		message: "must be red",				  rule: (x) => x === "red" }
      ]);
	}
	
	public validateForm(){
		this.validation.validate(this.state.form);
	}

   public onChangeHandler(event:any){
      let newState:any = {...this.state.form};
      newState[event.target.name] = event.target.value;

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
      let onChange = (event:any)=>this.onChangeHandler(event);
      let onSubmit = (event:any)=>this.onsubmitHandler(event);

      this.validateForm();  

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
