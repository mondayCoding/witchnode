
import * as React from 'react';
import ANNO from '../utils/annoModule';
import Anno from '../utils/annoModule';

interface State {
   imageSource:string;
   active:boolean;
   loaded:boolean;
}

interface Prop {
   onFileChange(param:File):void;
}

export default class FileUpload extends React.Component<Prop> {

   public state:State = {
      imageSource: "",
      active:false,
      loaded:false
   };

   public handleDragEnter = (e:React.DragEvent) => {
      this.setState({active:true});
   }

   public handleDragLeave = (e:React.DragEvent) => {
      this.setState({active:false});
   }

   public handleDragOver = (e:React.DragEvent) =>{
      e.preventDefault();
   }

   public handleDropEvent = (e:React.DragEvent ) => {
      e.preventDefault();
      this.setState({active:false});
      this.updatePreview(e.dataTransfer.files[0]);
   }

   public handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      this.updatePreview(file);
   }

   public updatePreview = (file:File) => {
      const pattern = /image-*/;
      const reader = new FileReader();

      if(!file.type.match(pattern)){
         ANNO.announce("Only image files allowed", null, "info");
         return;
      }

      this.setState({loaded:false});

      reader.onload = (e) => {
         this.setState({
            imageSource: reader.result,
            loaded: true
         });
      };
      reader.readAsDataURL(file);  
      this.props.onFileChange(file);    
   }

   public render(){
      const {loaded, imageSource, active} = this.state;
      const {onFileChange, ...rest} = this.props;
      const labelClass = (active) ? "upload--preview active" : "upload--preview" ;
     
      return (

         <label 
            className={labelClass}
            onDragEnter={this.handleDragEnter}
            onDragLeave={this.handleDragLeave} 
            onDragOver={this.handleDragOver}
            onDrop={this.handleDropEvent}
         >
   
            {
               loaded ? 
               <img src={imageSource} className="upload--preview--image"/>
               :
               <span className="upload--preview--noImage">
                  <i className="fas fa-upload"></i>            
                  <p>Click this or drag a file here to include it</p>
               </span>
            }
            <input type="file" {...rest} accept="image/*" onChange={this.handleFileChange} />

         </label>
      );
   }
}
 