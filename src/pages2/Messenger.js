import React, { Component } from 'react';

import './Messenger.css';

export default class Messenger extends Component {
  state = {
    posts: [],
    chatActive: null,
    newPost: "",
    qtdd: 0,
    qtddByChat: []
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
    const {messenger} = this.props;
    return (
      <li className="tweet">
        <strong>{messenger.author}</strong><span style={{float: 'right'}}>{messenger.createdAt}</span>
        <p>{messenger.content}</p>
      </li>
    )
  }
}
