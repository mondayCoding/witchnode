
//libs
import * as React from "react";

//components

import Complex from '../controllers/complex/complex';


export default class ComplexPage extends React.Component {
   public render() {
      return (
      <div className="page">

         <div className="content-centered-md">
            <h2>Complex form testing || null/encompass</h2>
            <Complex />
         </div>
         
      </div>
      );
   }
}
