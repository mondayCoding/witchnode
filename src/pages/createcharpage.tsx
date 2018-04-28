
//libst
import * as React from 'react';

//components
import Form from '../controllers/CreateCharForm/createCharForm';


export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="page">
            <h2>Create Character</h2>
            <Form />
         </div>
      );
   }
}
