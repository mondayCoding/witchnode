
import * as React from 'react';
import axios from 'axios';
import * as io from 'socket.io-client';

import anno from '../../utils/annoModule';
import ChatLine from './line';
import ChatInput from './input';
import { IMessageLine } from '../../interfaces';

interface IState {
   messageHistory:IMessageLine[];
   message:string;
   user:string;
}

export default class ChatWindow extends React.Component {

   public socket:any;
   public state:IState = {
      messageHistory:[],
      message: "",
      user: ""
   };

   public componentDidMount(){
      axios.get('api/chathistory')
      .then((response)=> {
         this.setState({
            messageHistory: response.data
         });
      })
        .catch((error)=>{
            console.log(error.response);
            anno.announce(
                `there was a slight issue with your request. Status: ${error.response.status}`, 
                error.response.data,
                "error"
            );
      });

      //make socket connection and listen for messages
      this.socket = io.connect("http://localhost:4000");

      //confirm connection
      this.socket.on('connect', () => {
         anno.announce(`IO Socket connection made succesfully`, "Websockets API");
      });

      //when recieving new message
      this.socket.on("newMessages", (recivedMessage:any)=>{
         let messages = this.state.messageHistory;
         messages.push(recivedMessage);
         console.log(messages);
         this.setState({
            messageHistory: messages
         });
      });
   }
   public componentWillUnmount(){
      this.socket.emit("end");
   }

   public onKeyUphandler(event:any){
      if (event.key === "Enter") {
         // axios.put("/api/chathistory", {message:this.state.message})
         // .then((response)=>{
         //    this.setState({
         //       messageHistory: response.data,
         //       message: ""
         //    });
         //    document.getElementById("chat-input").focus();
         // })
         // .catch((error)=>{
         //    console.log(error.response);
         //    anno.announce(`
         //there was a slight issue with your request. Status: ${error.response.status}`, 
         //error.response.data,
         //"error");
         // })
         let val:any = document.getElementById("chat-input");
         val = val.value;
         let user:any = document.getElementById("chat-user");
         user = user.value || "broken";
         //send socket message;
         this.socket.emit("chat",{
            message : val, user
         });
      }
   }

   public onChangeHandler(event:any){
      console.log(event.target);

      this.setState({
         [event.target.name]:event.target.value
      });
   }

   public render(){
      let placeholder = "chat...";
      let message = this.state.message;
      let user = this.state.user;
      let onKeyUp = (event:any) => this.onKeyUphandler(event);
      let onChange = (event:any)=> this.onChangeHandler(event);

      return (
         <section className="chatwindow" id="chatwindow">

            <div className="chatlog" id="chatlog">
                {this.state.messageHistory.map((item:IMessageLine, index) => 
                <ChatLine key={index} message={item} />)}
            </div>

            <ChatInput value={user} name="user" id="chat-user" placeholder="choose username" onChange={onChange} />
            <ChatInput 
                value={message} 
                name="message" 
                onKeyUp={onKeyUp} 
                id="chat-input" 
                onChange={onChange} 
                placeholder={placeholder} 
            />

         </section>
      );
   }

}
