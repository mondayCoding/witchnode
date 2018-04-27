
//libs
import * as React from 'react';

//components
import Announcement from '../controllers/announcement/announcement';
import ToDoSimple from '../controllers/todo-simple/todo-simple';


export default class MissionPage extends React.Component {
   public render() {
      return (
         <div className="page">
            <Announcement message="Quest log"/>
            <h2>Missionboard</h2>
            <ToDoSimple />
         </div>
      );
   }
}
