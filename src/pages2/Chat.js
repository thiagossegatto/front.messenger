import React, { Component } from "react";

import socket from "socket.io-client";
import api from "../services/api";

import "./Chat.css";

export default class Chat extends Component {
  state = {
    newChat: "",
    chats: []
  };

  async componentDidMount() {
    this.props.onRef(this);
    this.subscribeToEvents();
    var response = await api.get("chat");
    response.data.map((chat, i) => (response.data[i].qtdd = 0));
    this.setState({ chats: response.data });
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  subscribeToEvents = () => {
    const io = socket("http://10.100.5.110:3003");
    io.on("chat", data => {
      this.setState({
        chats: [data, ...this.state.chats]
      });
    });
  };

  handleSubmit = async e => {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    const name = this.state.newChat;
    const createdBy = localStorage.getItem("@Messenger:username");

    await api.post("chat", { createdBy, name });

    this.setState({ newChat: "" });
  };

  handleCount(id){
    this.setState({
      chats: this.state.chats.map(
        chat => (id === chat._id ? {...chat, qtdd: chat.qtdd+1} : chat)
      )
    })
  }

  handleInputChange = e => {
    this.setState({
      newChat: e.target.value
    });
  };

  openChat = id => {
    this.props.handleChangeChat(id);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.newChat}
            onChange={this.handleInputChange}
            onKeyDown={this.handleSubmit}
            placeholder="Novo chat"
          />
        </form>
        Chats <span style={{float: 'right'}}>{this.props.qtdd > 0 && `Mensagens não lidas: (${this.props.qtdd})`}</span>
        <ul className="list-chat" style={{marginTop: 20}}>
          {this.state.chats.map(chat => (
            <li key={chat._id}>
              <button
                style={this.props.chatActive === chat._id ? styles : {}}
                onClick={() => this.openChat(chat._id)}
              >
                {chat.name} {chat.qtdd > 0 && `(${chat.qtdd})`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  backgroundColor: "#999"
};
