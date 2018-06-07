
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

import * as $ from 'jquery'; 


export default class Main extends React.Component {

   public state:any = {
      hasError:false
   };

   public componentDidMount(){
		let forceUpdate = () => this.forceUpdate();

		$(".baseselect").each(function() {
			
			//upvaluet (lokaaleja functioon)
			var sourceValue: string;
			var newValue: string;

			// focusEvent  => tallennetaan alkuvalue
			$(this).on("focus", function(){
				sourceValue = this.value;
				
			// changeEvent => muutetaan value
			}).on("change", function(event){
				newValue = event.target.value;

				//logiseuranta
				console.log("vanha value => " + sourceValue + " => vapautetaan");				
				console.log("uusi value => " + newValue + " => lukitaan se");
				
				// disabloidaan valittu option kaikista valikoista
				$(".baseselect option[value='"+ newValue +"']").prop("disabled", true);	

				// sallitaan edellisen option valinta kaikkiin valikoihin				
				$(".baseselect option[value='"+ sourceValue +"']").prop("disabled", false);							
														
				// päivitetään previousValue uuteen valuuen
				sourceValue = newValue;
				
			});

     });
	}

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
         <select name="" id="nom1" className="baseselect"> 
				<option value="default" selected disabled>Valitse jotain</option>     			    
          <option value="1">___a___</option>
          <option value="2">___b___</option>
          <option value="3">___c___</option>
          <option value="4">___d___</option>
          <option value="5">___e___</option>
          <option value="6">___f___</option>
          <option value="7">___g___</option>
          <option value="8">___h___</option>
          <option value="9">___i___</option> 
         </select>

          <select name="" id="nom2" className="baseselect">
			 	<option value="default" selected disabled>Valitse jotain</option>     
            <option value="1">___a___</option>
            <option value="2">___b___</option>
            <option value="3">___c___</option>
            <option value="4">___d___</option>
            <option value="5">___e___</option>
            <option value="6">___f___</option>
            <option value="7">___g___</option>
            <option value="8">___h___</option>
            <option value="9">___i___</option> 
         </select>

          <select name="" id="nom3" className="baseselect">
			 	<option value="default" selected disabled>Valitse jotain</option>     			      
            <option value="1">___a___</option>
            <option value="2">___b___</option>
            <option value="3">___c___</option>
            <option value="4">___d___</option>
            <option value="5">___e___</option>
            <option value="6">___f___</option>
            <option value="7">___g___</option>
            <option value="8">___h___</option>
            <option value="9">___i___</option> 
         </select>

          <select name="" id="nom4" className="baseselect">
			 	<option value="default" selected disabled>Valitse jotain</option>     			      
            <option value="1">___a___</option>
            <option value="2">___b___</option>
            <option value="3">___c___</option>
            <option value="4">___d___</option>
            <option value="5">___e___</option>
            <option value="6">___f___</option>
            <option value="7">___g___</option>
            <option value="8">___h___</option>
            <option value="9">___i___</option> 
         </select>

          <select name="" id="nom5" className="baseselect">
			 	<option value="default" selected disabled>Valitse jotain</option>     			      
            <option value="1">___a___</option>
            <option value="2">___b___</option>
            <option value="3">___c___</option>
            <option value="4">___d___</option>
            <option value="5">___e___</option>
            <option value="6">___f___</option>
            <option value="7">___g___</option>
            <option value="8">___h___</option>
            <option value="9">___i___</option> 
         </select>
    
      </main> 
      );
   }
}
