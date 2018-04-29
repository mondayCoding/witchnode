
import * as React from 'react';

const User = (props:any) => {
    const { name, onClick } = props;
    
    return (
        <div className="selectable-user" onClick={() => onClick(name)} >
            <div className="user-initial">{name.charAt(0)}</div>
            <div className="user-name">{name}</div>
        </div>
    );
};

interface IStatusList {
    active: boolean;
    username: string;
}

interface IProps {
    statusList: IStatusList[];
    onClick(params:string):void;
 }

export default class SelectUserMenu extends React.Component<IProps> {

    public render(){
        const {onClick, statusList} = this.props;

        return (
            <article className="user-selection">
            { 
                statusList.map((user) =>
                {
                    return (!user.active) && <User name={user.username} onClick={onClick} />;
                })
            }
                {/* <User name="Mario" initial="M" onClick={onClick} />
                <User name="Peasant" initial="P" onClick={onClick} />
                <User name="Peach" initial="P" onClick={onClick} />
                <User name="Admin" initial="A" onClick={onClick} /> */}
            </article>
        );
    }

}
