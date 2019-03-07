import React, { Component } from "react";
import socket from "socket.io-client";
import api from "../../services/api";
import soundfile from "../../Message.wav";
import { PostStyled } from "./style";
import Avatar from "../Common/Avatar";
import imgAvatar from "../../assets/imgs/avatar.jpeg";

export default class Posts extends Component {
  state = {
    newPost: "",
    username: '',
  };

  constructor(props) {
    super(props)
    this.myRef=null
  }

  componentWillMount() {
    if (localStorage.getItem("@Messenger:username")) {
      this.setState({username: localStorage.getItem("@Messenger:username")})
    }
  }

  componentDidMount() {
    this.subscribeToEvents();
  }

  handleSubmit = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newPost;
    const chat = this.props.chatActive;
    const author = localStorage.getItem("@Messenger:username");

    await api.post("messengers", { content, author, chat });

    this.setState({ newPost: "" });
  };

  handleInputChange = e => {
    this.setState({
      newPost: e.target.value
    });
  };

  subscribeToEvents = async () => {
    const io = socket("http://10.100.5.110:3003");
    await io.on("messengers", data => {

      const author = localStorage.getItem("@Messenger:username");

      if (data.author !== author) {

        let audio = new Audio(soundfile);
        audio.play();

        this.props.handleCount(data.chat);
      }
      this.props.handlePosts(data);
    });
  };

  handleClose = () => {
    document.querySelector('.content').style.left = '100%';
  }

  setDate = date => {
    var formatDate = new Date(date)
      .toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      })
      .split(" ")
      .join(" ")
      .split(",")
      .join("");
    return formatDate;
  };
  render() {
    const {posts, chatActive, chatActiveName} = this.props;
    return (
      <PostStyled>
        {chatActive !== null ? (
          <div>
            <header>
              <h3>{chatActiveName}</h3>
              <button onClick={() => this.handleClose()}>X</button>
            </header>
            <div className="lista-chat">
              {posts.map(
                post =>
                  post.chat === chatActive && (
                    <div key={post._id} className={post.author === this.state.username ? 'own' : ''}>
                      <span>
                        <Avatar widthImg={40} src={imgAvatar} />
                        <div>
                          <span>
                            <strong>{post.author}</strong>
                            <span>{this.setDate(post.createdAt)}</span>
                          </span>
                          <p>{post.content}</p>
                        </div>
                      </span>
                    </div>
                  )
              )}
            </div>
            <form>
              <textarea
                value={this.state.newPost}
                onChange={this.handleInputChange}
                onKeyDown={this.handleSubmit}
                placeholder="Digite sua mensagem"
              />
            </form>
          </div>
        ):<span>no chat selected</span>}
      </PostStyled>
    );
  }
}
