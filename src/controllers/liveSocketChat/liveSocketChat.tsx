
//libs
import * as React from 'react';
import axios from 'axios';
import * as io from 'socket.io-client';

//utils
import ANNO from '../../utils/annoModule';
import API from '../../api/SocketChat';

//components
import ChatLine from './line';
import InputPlain from '../../components/input_plain';
import Button from '../../components/button';

//interfaces
import { IMessageLine } from '../../interfaces';

interface IState {
   messageHistory:IMessageLine[];
   message:string;
   user:string;
}

//class
export default class ChatWindow extends React.Component {

    public socket: SocketIOClient.Socket;
    public state: IState = {
        messageHistory: [],
        message: "",
        user: ""
    };

    public componentDidMount() {

        API.getChatHistory(
            (data:IMessageLine[]) => this.setState({ messageHistory:data })
        );      
    }

    public componentWillUnmount() {
        if (this.socket) {
            this.socket.emit("end");
        }
    }

    public connectToChatAs(connectAsUser:string) {

        //make socket connection and listen for messages
        this.socket = io.connect("http://localhost:4000");

        //confirm connection
        this.socket
        .on("connect",      () => ANNO.announce(`IO Socket connecting to server`, null, "info"))
        .on("success",      (response:any) => ANNO.announce(response.message))
        .on("err",          (response:any) => ANNO.announce(response.message, null, "error"))
        .on("disconnect",   ()=> ANNO.announce("disconnected", null, "error"));

        //when recieving new message
        this.socket.on("newMessages", (recivedMessage: IMessageLine) => {
            let messages = this.state.messageHistory;
            messages.push(recivedMessage);

            this.setState({
                messageHistory: messages
            });
        });

        document.getElementById("connectBtnID").remove();
    }

    public onKeyUphandler(event: any) {
        if (event.key === "Enter") {

            //send socket message;
            this.socket.emit("chat", {
                message: this.state.message, 
                user: this.state.user || "borken"
            });
        }
    }

    public onChangeHandler(event: any) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

   public render(){
      let placeholder = "chat...";
      const {message, user} = this.state;
      let onKeyUp = (event:any) => this.onKeyUphandler(event);
      let onChange = (event:any)=> this.onChangeHandler(event);

      return (
         <section className="chatwindow" id="chatwindow">

            <div className="chatlog" id="chatlog">
                {this.state.messageHistory.map((item:IMessageLine, index) => 
                <ChatLine key={index} message={item} />)}
            </div>

            <InputPlain 
                value={user} 
                name="user" 
                placeholder="choose username" 
                onChange={onChange} 
            />

            <Button id="connectBtnID" onClick={() => this.connectToChatAs("")} />

            <InputPlain 
                value={message} 
                name="message" 
                onKeyUp={onKeyUp} 
                onChange={onChange} 
                placeholder={placeholder} 
            />

         </section>
      );
   }

}
