
 //******************SHARED COMPONENT PROPERTIES*********************************************/

//generic input field
export interface IInputFieldProperties {
   id:string;
   name?:string;
   label:string;
   value?:string;
   placeholder?:string;
   readonly?:boolean;
   required?:boolean;
   disabled?:boolean;
   tooltipError?:string;
   tooltipInfo?:string;
   onChange?(params?:any):any;
   onKeyUp?(params?:any):any;
}

//generic button properties
export interface IButtonProperties {
    className?: string;
    id?: string;
    buttonText?: string;
    type?: string;
    onClick?(params:any):any;
}

 //generic Checkbox input properties
export interface IInputCheckboxProperties {
    name?:string;
    id:string;
    label:string;
    disabled?:boolean;
    defaultChecked?:boolean;
    checked?:boolean;
    value?:string;
    onChange?(params?:any):any;
}

//generic select element properties
export interface ISelectProperties {
     id?:string;
}

 //******************CUSTOM OBJECT MODELS*************************************************/

//chat window component message (socket message)
export interface IMessageLine {
    user:string;
    content:string;
    timestamp:string;
    userType:number;
}

//TODO LIST - Mission item
export interface IMission {
    mission : {
       objective:string;
       complete:boolean;
       createDate:string;
       completeDate:string;
    };
    toggle:any;
    onClick:any;
}




