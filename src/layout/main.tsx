
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
      <main className="main" id="wrapper">
         <Switch>
            <Route exact path="/" component={homepage}/>
            <Route exact path="/createchar" component={createCharPage}/>
            <Route exact path="/soon" component={soonpage}/>
            <Route exact path="/witchchat" component={chatPage}/>
            <Route exact path="/missions" component={missionpage}/>
            <Route exact path="/profile" component={witchPage}/>
            <Route exact path="/settings" component={settingsPage}/>
            <Route exact path="/docs" component={docsPage}/>
            <Redirect to="/"/>
         </Switch>
      </main>
      );
   }
}
