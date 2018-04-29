
import * as React from 'react';
import axios from 'axios';
import validator = require('validator');

import Input from '../../components/input';
import Button from '../../components/button';
import anno from '../../utils/annoModule';


interface IStates {
   form: {
      username:string,
      email:string,
      location:string,
      accountNum:string,
      color:string
   };
   formIsValid: boolean;
}

export default class UserForm extends React.Component<any,any> {

   public state:IStates = {
      form : {
         username:"",
         email:"",
         location:"",
         accountNum:"",
         color:""
      },
      formIsValid:false
   };

   public onChangeHandler(event:any){
      let newState:any = {...this.state.form};
      newState[event.target.name] = event.target.value;
      this.setState({
         form:newState
      });

      if (event.target.name === "username"){
         if (validator.isLength(event.target.value, {min:4, max:16}) || (event.target.value).length === 0){
            document.querySelector(`input[name=${event.target.name}]`).classList.remove("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.removeAttribute("data-tooltip-error");
         }
         else if ((event.target.value === "asdasd") || (event.target.value === "mario") || (event.target.value === "asd")) {
            document.querySelector(`input[name=${event.target.name}]`).classList.add("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.setAttribute("data-tooltip-error", this.props.res.usernameIsTaken);
         }
         else {
            document.querySelector(`input[name=${event.target.name}]`).classList.add("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.setAttribute("data-tooltip-error", this.props.res.usernameIsInvalid);
         }
      }

      if (event.target.name === "email"){
         if (validator.isEmail(event.target.value) || (event.target.value).length === 0){
            document.querySelector(`input[name=${event.target.name}]`).classList.remove("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.removeAttribute("data-tooltip-error");
         }
         else {
            document.querySelector(`input[name=${event.target.name}]`).classList.add("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.setAttribute("data-tooltip-error", this.props.res.emailIsInvalid);
         }
      }

      if (event.target.name === "accountNum"){
         if (validator.isNumeric(event.target.value) || (event.target.value).length === 0){
            document.querySelector(`input[name=${event.target.name}]`).classList.remove("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.removeAttribute("data-tooltip-error");
         }
         else {
            document.querySelector(`input[name=${event.target.name}]`).classList.add("invalid");
            document.querySelector(`input[name=${event.target.name}]`).parentElement.setAttribute("data-tooltip-error", this.props.res.accNumIsInvalid);
         }

      }
   }

   public onsubmitHandler(event:any){
      event.preventDefault();
      axios.post("/api/userform", {form:this.state.form})
      .then((response) => {
         anno.announce( response.data, "message from server");
      })
      .catch((error) => {
         console.log(error.response);
         anno.announce(error.response.data, "Error", "error");
      });
   }

   public render(){
      let username = this.state.form.username;
      let email = this.state.form.email;
      let location = this.state.form.location;
      let accountNum = this.state.form.accountNum;
      let color = this.state.form.color;
      let onChange = (event:any)=>this.onChangeHandler(event);
      let onSubmit = (event:any)=>this.onsubmitHandler(event);
      let res = this.props.res;


      return (
         <form className="userform spacing" onSubmit={onSubmit}>
            <div className="spacing"></div>

            <Input 
               name="username" 
               label={res.username} 
               value={username} 
               onChange={onChange} 
               id="nameID" 
            />
            <Input 
               name="email"
               tooltipInfo="You wont actually recieve any emails form us... :)"               
               label={res.email} 
               value={email} 
               onChange={onChange} 
               id="emailID" 
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
            />
            <Input 
               name="color" 
               label={res.color} 
               value={color} 
               onChange={onChange} 
               id="colorID" 
            />

            <div className="spacing"></div>

            <Button buttonText={res.submit} type="submit" />

            <div className="spacing"></div>
            <div className="line-thin"></div>
         </form>
      );
   }
}
