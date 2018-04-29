
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';
import Tip from '../components/infotip';


export default class Input extends React.Component<IInputFieldProperties> {

    public render() {
        const {id, value, label, tooltipError, tooltipInfo, ...rest} = this.props;
        const inputClass = ( value === undefined || value.length > 0) ? "input-text hasContent" : "input-text";

        return (
            <div className={inputClass} data-tooltip-error={tooltipError}>
                <input type="text" id={id} {...rest} value={value} />
                <label htmlFor={id}> {label} </label>
                <span className="bar"></span>   
                {(tooltipInfo) && <Tip message={tooltipInfo} />}             
            </div>
        );
    }
}
