import {Message} from "@components/message-list/message"
import { Input } from '@material-ui/core'
import React, {Component} from 'react'

export class MessageList extends Component {

  state = {
    messages: [
      {author: 'bot', value: 'Привет'},
      {author: 'bot', value: 'Как дела?'},
    ],
    value: ''
  }



  sendMessage = ({author, value}) => {
    const {messages} = this.state

    this.setState({
      messages: [...messages, {author, value}],
      value
    })
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }

  componentDidUpdate(_, state) {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]

    if (lastMessage.author === "User" && state.messages !== messages) {
      setTimeout(() => {
        this.sendMessage({ author: "bot", value: "Не приставай ко мне?" })
      }, 500)
    }
  }

  render() {
    const { messages } = this.state

    return (
        <div>
          {messages. map((message, index) => (
              <Message message={message} key={index} />
          ))}

          <button
              onClick={() => {
                this.sendMessage({author: 'User', value: 'test'})
              }}>Отправить сообщение
          </button>

          <Input onChange={this.handleChangeInput} />


        </div>
    )
  }
}
