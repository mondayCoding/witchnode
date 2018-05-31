
//libs
import * as React from 'react';

//components

import ToDoSimple from '../controllers/todo-simple/todo-simple';


export default class MissionPage extends React.Component {

   public render() {
      return (
         <div className="page">

            <h2>Missionboard</h2>
            <ToDoSimple />

         </div>
      );
   }
}
