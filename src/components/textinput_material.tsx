
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';
import Tip from '../components/infotip';


export default class Input extends React.Component<IInputFieldProperties> {

    public render() {
        const {id, value, label, isSmall, tooltipInfo, validation, ...rest} = this.props;
        let inputClass = (value === undefined || value.length > 0) ? "input-text hasContent" : "input-text";
        let validationClass = (validation) ? "invalid" : null;

        return (
            <div className={inputClass} data-tooltip-error={validation}>
                <input type="text" className={validationClass} id={id} {...rest} value={value} />
                <label htmlFor={id}> {label} </label>
                <span className="bar"></span>   
                {(tooltipInfo) && <Tip message={tooltipInfo} />}
                {/* {(validation) && <Tip message={validation} />}*/}
            </div>
        );
    }
}
