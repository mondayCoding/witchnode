
import * as React from 'react';
import Anno from '../utils/annoModule';
import {IInputFieldProperties} from '../interfaces';


export default class InputDEBUG extends React.Component<IInputFieldProperties,any> {

    public onChange(event:any) {
        console.log( "changed input: now => " + event.target.value );
        Anno.announce(`new state value: ${event.target.value}`, "this input has no custom onChange handler");
    }

    public render() {
        const {id, value, name, label, onKeyUp, readonly, required, children, disabled} = this.props;
        let onChange = this.props.onChange || ((event:any) => { this.onChange(event);});
        let inputClass = ( value === undefined || value.length > 0) ? "input-text hasContent" : "input-text";

        return (
            <div className={inputClass}>
            <input 
                type="text" 
                id={id} 
                value={value} 
                disabled={disabled} 
                readOnly={readonly} 
                required={required} 
                name={name} 
                onKeyUp={onKeyUp} 
                onChange={onChange}
            />
            <label htmlFor={id}> {label} </label>
            <span className="bar"></span>
            </div>
        );
    }
}
