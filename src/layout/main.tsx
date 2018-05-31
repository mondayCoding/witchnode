
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import chatPage from '../pages/chatPage';
import createCharPage from '../pages/createCharPage';
import dashboard from '../pages/dashboard';
import docsPage from '../pages/docsPage';
import missionpage from '../pages/missionpage';
import settingsPage from '../pages/settingsPage';
import soonpage from '../pages/soonpage';
import witchPage from '../pages/witchpage';
import apiMockPage from '../pages/apiMockPage';




export default class Main extends React.Component {

   public state:any = {
      hasError:false
   };

   //error handling (error boundary)
   public componentDidCatch(error:any, info:any) {
      // fallback UI
      this.setState({ hasError: true });
      console.error(error);
      console.error(info);
    }

   public render() {
      return (
      <main className="main" id="wrapper">
         {
            (!this.state.hasError) && 
            <Switch>
               <Route exact path="/" component={dashboard}/>
               <Route exact path="/createchar" component={createCharPage}/>
               <Route exact path="/soon" component={soonpage}/>
               <Route exact path="/missions" component={missionpage}/>
               <Route exact path="/witchchat" component={chatPage}/>
               <Route exact path="/profile" component={witchPage}/>
               <Route exact path="/settings" component={settingsPage}/>
               <Route exact path="/docs" component={docsPage}/>
               <Route exact path="/apimock" component={apiMockPage}/>
               <Redirect to="/"/>
            </Switch>
         }         
      </main> 
      );
   }
}
