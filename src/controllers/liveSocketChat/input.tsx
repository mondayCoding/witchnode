
import * as React from 'react';

export default class Line extends React.Component<any> {
   public render(){
      const {onKeyUp, onChange, value, placeholder} = this.props;

      return (
            <div className="chatbox">
                  <input 
                        className="chatbox-input" 
                        name={name} 
                        type="text" 
                        value={value} 
                        onKeyUp={onKeyUp} 
                        onChange={onChange} 
                        placeholder={placeholder} 
                  />
            </div>
      );
   }

}
