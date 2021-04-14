import { List } from "@material-ui/core"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { ChatComponent } from "./chat-component"

export class ChatList extends Component {

  render() {
    const {
      conversations,
      match: { params },
    } = this.props;

    const chatId = params.id;

    return (
      <List component="nav">
        {conversations.map((chat) => (
          <Link key={chat.title} to={`/chat/${chat.title}`}>
            <ChatComponent selected={chat.title === chatId} chat={chat} />
          </Link>
        ))}
      </List>
    );
  }
}
