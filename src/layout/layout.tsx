
import Navigation from './navigation';
import Main from './main';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';

//main layout component, has navigation, main content and router components
class Layout extends React.Component {
   public render() {
      return (
         <BrowserRouter>
            <div className="flex-body">
               <Navigation/>
               <Main/>
            </div>
         </BrowserRouter>
      );
   }
}

export = Layout;
