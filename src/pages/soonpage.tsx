
//libs
import * as React from "react";

//components
import Announcement from '../controllers/announcement/announcement';
import Listing from '../controllers/todo-soon/todo-soon';


export default class SoonPage extends React.Component {
   public render() {
      return (
      <div className="page">
         <Announcement message="future implementation plans"/>
         <h2>Soon™ // WiP</h2>
         <Listing />
      </div>
      );
   }
}
