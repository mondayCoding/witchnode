
import * as React from 'react';

interface Iprops {
   heading: string;
   onFadeClick():void;
}

export default class Modal extends React.Component<Iprops> {

    public render(){

        let onFadeClick = this.props.onFadeClick;
        
        return (
            <div className="modal-fade" onClick={onFadeClick}>
            <div className="modal-box">
                <div className="modal-heading">
                    <h3>{this.props.heading}</h3>
                </div>
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
            </div>
        );
    }

}
