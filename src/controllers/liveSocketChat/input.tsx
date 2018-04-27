
import * as React from 'react';

export default class Line extends React.Component<any> {
   public render(){
      const {onKeyUp,onChange,value, placeholder,id,name} = this.props;

      return (
            <div className="chatbox">
                  <input 
                        className="chatbox-input" 
                        name={name} 
                        type="text" 
                        id={id} 
                        value={value} 
                        onKeyUp={onKeyUp} 
                        onChange={onChange} 
                        placeholder={placeholder} 
                  />
            </div>
      );
   }

}
