import React, { Component } from "react";
import socket from "socket.io-client";

import { Background } from "../assets/styles/common";
import { ContextBox } from "../slyled";
import Logo from "../components/Common/Logo";
import Menu from "../components/Menu";
import Posts from "../components/Posts";
import api from "../services/api";
import {scroll} from "../functions";

export default class Chat extends Component {
  state = {
    chatActive: null,
    chatActiveName: "",
    posts: [],
    chats: []
  };
  async componentWillMount() {
    // Verifica se estaá logado
    if (!localStorage.getItem("@Messenger:username")) {
      this.props.history.push("/");
    }
    this.subscribeToEvents();
    var response = await api.get("chat");
    response.data.map((chat, i) => (response.data[i].qtdd = 0));
    this.setState({ chats: response.data });
  }

  subscribeToEvents = () => {
    const io = socket("http://10.100.5.110:3003");
    io.on("chat", data => {
      this.setState({
        chats: [data, ...this.state.chats]
      });
    });
  };
  handleChangeChat = async (id, name) => {
    this.setState({
      chatActive: id,
      chatActiveName: name
    });

    this.setState({
      chats: this.state.chats.map(chat =>
        id === chat._id ? { ...chat, qtdd: 0 } : chat
      )
    });

    var width = document.querySelector("html").clientWidth;
    if (width <= 480) {
      document.querySelector(".content").style.left = 0;
    }
    await this.loadMessengers(id);

    scroll();

  };

  handlePosts = data => {
    this.setState({
      posts: [...this.state.posts, data]
    });
    if(this.state.chatActive && this.state.chatActive === data.chat){
      scroll();
    }
  };

  handleCount = id => {
    this.setState({
      chats: this.state.chats.map(chat =>
        id === chat._id ? { ...chat, qtdd: chat.qtdd + 1 } : chat
      )
    });
  }

  async loadMessengers(id) {
    const response = await api.get(`messengers/${id}`);
    this.setState({ posts: response.data });
  }
  render() {
    return (
      <Background>
        <ContextBox>
          <div className="menu">
            <Logo />
            <Menu
              handleChangeChat={this.handleChangeChat}
              chatActive={this.state.chatActive}
              chats={this.state.chats}
            />
          </div>
          <div className="content">
            <Posts
              chatActive={this.state.chatActive}
              chatActiveName={this.state.chatActiveName}
              posts={this.state.posts}
              handlePosts={this.handlePosts}
              handleCount={this.handleCount}
            />
          </div>
        </ContextBox>
      </Background>
    );
  }
}
