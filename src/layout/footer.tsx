
import * as React from 'react';
import witchPage from '../pages/witchpage';
import homepage from '../pages/homepage';
import soonpage from '../pages/soonpage';
import missionpage from '../pages/missionpage';
import docsPage from '../pages/docsPage';
import settingsPage from '../pages/settingsPage';
import chatPage from '../pages/chatPage';
import createCharPage from '../pages/createCharPage';
import {Switch, Route, Redirect} from 'react-router-dom';


export default class Main extends React.Component {
   public render() {
      return (
      <footer className="footer">
         <a href="">
            <span>heart</span>
            <i className="fas fa-heart"></i>
         </a>
      </footer>
      );
   }
}
