
//libst
import * as React from 'react';

//components
import Announcement from '../controllers/announcement/announcement';
import Form from '../controllers/CreateCharForm/createCharForm';


export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="page">
            <Announcement message="character creation"/>
            <h2>Create Character</h2>
            <Form />
         </div>
      );
   }
}
