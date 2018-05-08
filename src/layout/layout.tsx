
import Navigation from './navigation';
import Main from './main';
import Footer from './footer';
import * as React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';

//main layout component, has navigation, main content and router components
class Layout extends React.Component {

   public componentDidMount(){
      document.addEventListener("keyup", (event) => { 
         if (event.altKey && event.keyCode===75){
            console.log("alt + k pressed");            
         }             
       });
   }

   public render() {
      return (
         <BrowserRouter>
            <div className="body-layout">
               <div className="content-layout">
                  <Navigation/>
                  <Main/>
               </div>               
            <Footer />
            </div>
         </BrowserRouter>
      );
   }
}

export = Layout;
