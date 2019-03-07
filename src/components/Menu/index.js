import React, { Component } from "react";
import Input from "../Common/Input";
import api from "../../services/api";
import { MenuStyled } from "./style";
import Avatar from "../Common/Avatar";
import imgAvatar from "../../assets/imgs/avatar.jpeg";

export default class Menu extends Component {
  state = {
    newChat: ""
  };

  handleSubmit = async e => {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    const name = this.state.newChat;
    const createdBy = localStorage.getItem("@Messenger:username");

    await api.post("chat", { createdBy, name });

    this.setState({ newChat: "" });
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const {chats, chatActive} = this.props;
    return (
      <MenuStyled>
        <form>
          <Input
            color="#FFF"
            type="text"
            name="newChat"
            placeholder="Create new chat"
            value={this.state.newChat}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
        </form>
        <h3>Chats</h3>
        {chats.length === 0 && <span>no chat created</span>}
        {chats.length > 0 && (<ul>
          {chats.map(chat => (
            <li key={chat._id}>
              <button
                style={chatActive === chat._id ? styles : {}}
                onClick={() => this.props.handleChangeChat(chat._id, chat.name)}
              >
                <Avatar widthImg={40} src={imgAvatar} />
                <p>
                  {chat.name} 
                  <span className={chat.qtdd > 0 ? "active" : ''}>{chat.qtdd}</span>
                </p>
              </button>
            </li>
          ))}
        </ul>
        )}
      </MenuStyled>
    );
  }
}
const styles = {
  backgroundColor: "#FFF"
};
