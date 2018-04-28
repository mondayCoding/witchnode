
//libs
import * as React from 'react';




export default class Main extends React.Component {

   public theme = true;

   public setTheme() {
      if (this.theme) {
         document.getElementById("stylelink").href="/stylesheets/style_light.css";
         this.theme = !this.theme;                  
      } 
      else {
         document.getElementById("stylelink").href="/stylesheets/style.css"; 
         this.theme = !this.theme;
      }
   }

   public render() {
      return (
      <footer className="footer">
         <a href="https://github.com/mondayCoding/witchnode">
            <span>code lives </span>
            <i className="fas fa-heart"></i>
            <span> and breathes with </span>
            <i className="fas fa-coffee"></i>
         </a>
            <button type="button" onClick={() => this.setTheme()}>style</button>
      </footer>
      );
   }
}
