
import * as React from 'react';
import {IMessageLine} from '../../interfaces';

interface IProps {
   message:IMessageLine;
}

export default class Line extends React.Component<IProps> {
    public render(){

        let message = this.props.message;
        let userClass:string;

        switch(message.userType) {
            case 0:
            userClass = "line user-system";
            break;

            case 1:
            userClass = "line user-admin";
            break;

            default:
            userClass = "line";
            break;
        }

        let parsedTime = new Date (message.timestamp);
        const minutes = (parsedTime.getMinutes() < 10) ? "0" + parsedTime.getMinutes() : parsedTime.getMinutes() ;
        const hours = (parsedTime.getHours() < 10) ? "0" + parsedTime.getHours() : parsedTime.getHours() ;
        const stamp = `${hours}:${minutes}`;

        return (
            <div className={userClass}>

                <div className="line-user">
                    <i className="fa fa-user"></i>
                    {message.user}
                </div>

                <div className="line-message">
                    <span>{message.content}</span>
                </div>

                <div className="line-timestamp">{stamp}</div>
            </div>
        );
    }

}
