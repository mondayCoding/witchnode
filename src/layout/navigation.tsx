
import * as React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {
   public render() {
      return (
        <nav className="navigation">
            <ul className="navi-list">
                <li className="navi-item">
                    <NavLink exact to="/" activeClassName="active">
                        <span className="pagename">Dashboard</span>
                        <i className="fa fa-heart"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/createchar" activeClassName="active">
                        <span className="pagename">Create Character</span>
                        <i className="fa fa-heart"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/soon" activeClassName="active">
                        <span className="pagename">Soon™</span>
                        <i className="fa fa-hashtag"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/missions" activeClassName="active">
                        <span className="pagename">Missions</span>
                        <i className="fa fa-exclamation"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/witchchat" activeClassName="active">
                        <span className="pagename">covenChat</span>
                        <i className="fa fa-medkit"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/profile" activeClassName="active">
                        <span className="pagename">Profile</span>
                        <i className="fa fa-flask"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/settings" activeClassName="active">
                        <span className="pagename">Settings</span>
                        <i className="fa fa-cog"></i>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/docs" activeClassName="active">
                        <span className="pagename">Documentation</span>
                        <i className="fa fa-book"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
      );
   }
}
