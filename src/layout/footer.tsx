
//libs
import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//components
import witchPage from '../pages/witchpage';
import homepage from '../pages/homepage';
import soonpage from '../pages/soonpage';
import missionpage from '../pages/missionpage';
import docsPage from '../pages/docsPage';
import settingsPage from '../pages/settingsPage';
import chatPage from '../pages/chatPage';
import createCharPage from '../pages/createCharPage';


export default class Main extends React.Component {
   public render() {
      return (
      <footer className="footer">
         <a href="https://github.com/mondayCoding/witchnode">
            <span>code lives </span>
            <i className="fas fa-heart"></i>
            <span> and breathes with </span>
            <i className="fas fa-coffee"></i>
         </a>
      </footer>
      );
   }
}
