
//libst
import * as React from 'react';

//components
import Form from '../controllers/CreateCharForm/createCharForm';
import Tip from '../components/infotip';
import ImgCaption from '../components/imgCaption';


export default class CreateCharPage extends React.Component {
   public render() {
      return (
         <div className="page">

            <div className="content-centered-md">
               <h2>Create Account</h2>
               <h2 className="heading sm">fill entire form before asking claiming it doesn't work</h2>
            </div>

            <Form />

            <div className="content-centered-md">

               <Tip message="This form is creation of it's time and repsesents no values of any kind" />
               <Tip message="Another tip with no valuable content" />
               <Tip message="Third one, still useless" />
               <Tip message="Not even going to bother anymore" />
               <Tip message="..." />

               <ImgCaption 
                  src="../images/blur.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content" 
                  size="sm" 
                  captionTitle="Blur by design"
               />
   
               <div className="spacing"></div>
   
               <ImgCaption 
                  src="../images/abyss.jpg" 
                  captionText="This is caption sample for testing imgCaption component. Text here is caption content" 
                  size="md" 
                  captionTitle="Blur by design" 
               />

            </div>

         </div>
      );
   }
}
