
//libst
import * as React from 'react';

//components
import Form from '../controllers/CreateCharForm/createCharForm';
import Tip from '../components/infotip';


export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="page">
            <h2>
               Create Character               
            </h2>
            <Form />
            <Tip message="This form is creation of it's time and repsesents no values of any kind" />
         </div>
      );
   }
}
