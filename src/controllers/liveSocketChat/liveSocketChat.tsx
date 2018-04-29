
//libs
import * as React from 'react';
import axios from 'axios';
import * as io from 'socket.io-client';

//utils
import ANNO from '../../utils/annoModule';
import API from '../../api/SocketChat';

//components
import ChatLine from './line';
import SelectUserMenu from './selectUserMenu';
import InputPlain from '../../components/input_plain';
import Button from '../../components/button';

//interfaces
import { IMessageLine } from '../../interfaces';

interface IStatusList {
    active: boolean;
    username: string;
 }

interface IState {
   messageHistory:IMessageLine[];
   message:string;
   user:string;
   statusList: IStatusList[];
}

//class
export default class ChatWindow extends React.Component {

    public socket: SocketIOClient.Socket;
    public state: IState = {
        messageHistory: [],
        message: "",
        user: "",
        statusList: [
            {username:"Mario", active:false},
            {username:"Peach", active:false},
            {username:"Peasant", active:false},
            {username:"Admin", active:false}
        ]
    };

    public componentDidMount() {

        API.getChatHistory(
            (data:IMessageLine[]) => this.setState({ messageHistory:data })
        );
        // API.getAvaibleUsers(
        //     (data:IMessageLine[]) => this.setState({ statusList:data })
        // );       
    }

    public componentWillUnmount() {
        if (this.socket) {
            this.socket.emit("end");
        }
    }

    public connectToChatAs(connectAsUser:string) {

        //make socket connection and listen for messages
        this.socket = io.connect("http://localhost:4000", {query:{requestName:connectAsUser}});

        //confirm connection
        this.socket
        .on("connect",      () => ANNO.announce(`IO Socket connecting to server`, null, "info"))
        .on("success",      (response:any) => ANNO.announce(response.message))
        .on("err",          (response:any) => ANNO.announce(response.message, null, "error"))
        .on("disconnect",   ()=> ANNO.announce("disconnected", null, "error"))
        .on("refresh",      (response:string) =>  {
            ANNO.announce(`username ${response} was taken`);
        });

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
      const {message, user, statusList} = this.state;
      let onKeyUp = (event:any) => this.onKeyUphandler(event);
      let onChange = (event:any)=> this.onChangeHandler(event);

      return (
         <article className="chat">

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
                <InputPlain 
                    value={message} 
                    name="message" 
                    onKeyUp={onKeyUp} 
                    onChange={onChange} 
                    placeholder={placeholder} 
                />
            </section>

            {/* <section className="choose-username">
                <Button id="connectBtnID" buttonText="Mario" onClick={() => this.connectToChatAs("Mario")} />
                <Button id="connectBtnID" buttonText="Peasant" onClick={() => this.connectToChatAs("Peasant")} />
                <Button id="connectBtnID" buttonText="Peach" onClick={() => this.connectToChatAs("Peach")} />
                <Button id="connectBtnID" buttonText="Admin" onClick={() => this.connectToChatAs("Admin")} />
            </section>   */}

            <SelectUserMenu onClick={(data:string) => this.connectToChatAs(data)} statusList={statusList} />

         </article>
      );
   }

}
