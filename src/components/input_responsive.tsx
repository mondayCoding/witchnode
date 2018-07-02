
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';

export default class InputResponsive extends React.Component<IInputFieldProperties> {

   public render() {
      const {id, value, label, validation, isSmall,  ...rest} = this.props;
      
      let inputClass = "themeinput-responsive";
      if (value && value.length > 0) { 
         inputClass = inputClass + " hasContent"; 
      }
      if (isSmall) { 
         inputClass = inputClass+ " number"; 
      }

      let validationClass = (validation) ? "invalid" : null;

      return (
         <div className={inputClass} data-tooltip-error={validation}>
               <label htmlFor={id}> {label} </label>
               <input type="text" className={validationClass} id={id} {...rest} value={value} />
         </div>
      );
   }
}
