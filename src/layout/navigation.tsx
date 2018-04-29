
import * as React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {
   public render() {
      return (
        <nav className="navigation">
            <ul className="navi-list">
                <li className="navi-item">
                    <NavLink exact to="/" activeClassName="active" title="Dashboard">
                        <i className="fas fa-tachometer-alt"></i>
                        <span className="pagename">Dashboard</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/createchar" activeClassName="active" title="Create Character">
                        <i className="fa fa-heart"></i>
                        <span className="pagename">Create Character</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/soon" activeClassName="active" title="Soon™">
                        <i className="fa fa-hashtag"></i>
                        <span className="pagename">Soon™</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/missions" activeClassName="active" title="Missions">
                        <i className="fa fa-exclamation"></i>
                        <span className="pagename">Missions</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/witchchat" activeClassName="active" title="covenChat">
                        <i className="fas fa-comment-dots"></i>
                        <span className="pagename">covenChat</span>
                        {/* <i className="far fa-comments"></i> */}
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/profile" activeClassName="active" title="Profile">
                        <i className="fa fa-flask"></i>
                        <span className="pagename">Profile</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/settings" activeClassName="active" title="Settings">
                        <i className="fa fa-cog"></i>
                        <span className="pagename">Settings</span>
                    </NavLink>
                </li>
                <li className="navi-item">
                    <NavLink exact to="/docs" activeClassName="active" title="Documentation">
                        <i className="fa fa-book"></i>
                        <span className="pagename">Documentation</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
      );
   }
}
