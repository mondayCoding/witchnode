
import * as React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {
   public render() {
      return (
        <nav className="flex-navigation">
            <ul className="navi-list">
                <li className="navi-item">
                    <NavLink exact to="/" activeClassName="active">
                        Dashboard
                        <i className="fa fa-heart"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/createchar" activeClassName="active">
                        Create Character
                        <i className="fa fa-heart"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/soon" activeClassName="active">
                        Soon™
                        <i className="fa fa-hashtag"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/witchchat" activeClassName="active">
                        covenChat
                        <i className="fa fa-medkit"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/missions" activeClassName="active">
                        Missions
                        <i className="fa fa-exclamation"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/profile" activeClassName="active">
                        Profile
                        <i className="fa fa-flask"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/settings" activeClassName="active">
                        Settings
                        <i className="fa fa-cog"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/docs" activeClassName="active">
                        Documentation
                        <i className="fa fa-book"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
      );
   }
}
