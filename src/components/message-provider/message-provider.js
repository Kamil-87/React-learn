import PropTypes from "prop-types"
import {Component} from 'react'

export class MessageProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    match: PropTypes.any,
  }


  state = {
    conversations: [
      {
        title: "room1",
        value: "",
        lastMessage: {author: 'User', message: 'Hi1', createdTs: new Date() }
      },
      {
        title: "room2",
        value: "",
        lastMessage: {author: 'User', message: 'Hi1', createdTs: new Date() }
      }
    ],
    messages: {
      room1: [{author: 'User', message: 'Hoi1', createdTs: new Date() }],
    },
  }



  render() {
    const {children, match} = this.props
    const {messages, conversations} = this.state

    const {id} = match.params ?? {}

    const state = {
      conversations,
      messages: messages[id ?? []],
      value: conversations.find(conversation => conversation.title === id)
          ?.value || ""
    }

    return children()
  }
}
