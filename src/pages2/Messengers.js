import React, { Component } from "react";
import socket from "socket.io-client";
import api from "../services/api";
import soundfile from "../Message.wav";

import logo from "../twitter.svg";
import "./Messengers.css";
import Messenger from "../components/Messenger";
import Chat from "./Chat";

export default class Messengers extends Component {
  state = {
    messengers: [],
    chatActive: null,
    newMessenger: "",
    qtdd: 0,
    qtddByChat: [],
    newMsg : 0
  };

  componentWillMount() {
    if (!localStorage.getItem("@Messenger:username")) {
      this.props.history.push("/");
    }
  }

  componentDidMount(){
    this.subscribeToEvents();
  }

  async loadMessengers(id) {
    const response = await api.get(`messengers/${id}`);
    this.setState({ messengers: response.data });
  }

  handleSubmit = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newMessenger;
    const chat = this.state.chatActive;
    const author = localStorage.getItem("@Messenger:username");

    await api.post("messengers", { content, author, chat });

    this.setState({ newMessenger: "" });
  };

  handleInputChange = e => {
    this.setState({
      newMessenger: e.target.value
    });
  };

  subscribeToEvents = async () => {
    const io = socket("http://10.100.5.110:3003");
    await io.on('messengers', data => {
      let audio = new Audio(soundfile);
      audio.play();
      
      const author = localStorage.getItem("@Messenger:username");

      if(data.author !== author){
        this.child.handleCount(data.chat);
        this.setState({
          qtdd: this.state.qtdd+1
        });
      }

      this.setState({
        messengers: [data, ...this.state.messengers]
      });
    });
  };

  handleChangeChat = id => {
    this.setState({
      chatActive: id
    });
    this.loadMessengers(id);
  };
  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={logo} alt="Logo" />

        <Chat handleChangeChat={this.handleChangeChat} qtdd={this.state.qtdd} onRef={ref => (this.child = ref)} chatActive={this.state.chatActive} />

        {this.state.chatActive !== null && (
          <div>
            <form>
              <textarea
                value={this.state.newMessenger}
                onChange={this.handleInputChange}
                onKeyDown={this.handleSubmit}
                placeholder="Digite sua mensagem"
              />
            </form>
            <ul className="tweet-list">
              {this.state.messengers.map(messenger => (
                messenger.chat === this.state.chatActive && <Messenger key={messenger._id} messenger={messenger} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
