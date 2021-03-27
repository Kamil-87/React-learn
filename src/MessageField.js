import Message from "@components/Message";
import React, {Component} from 'react'

// eslint-disable-next-line import/no-default-export
export default class MessageField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        {name: 'Bot', message: 'Привет'},
        {name: 'Bot', message: 'Как дела?'},
      ]
    }
  }
  handleClick = () => {
    this.setState({messages: [...this.state.messages, {name: 'Person', message: 'Нормально'}]})
  }

  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
      setTimeout(() => {
        this.setState(
          {messages: [...this.state.messages, {name: 'Bot', message:'Не приставай ко мне, я робот'}]}
        ), 20000})  // Почему нет задержки ответа?
    }
  }

  render() {
    const messageElements = this.state.messages.map( (text, index) => (
      <Message key={index} text={text} />
    ))

    return (
      <>
        {/* eslint-disable-next-line react/prop-types */}
        <h1>{this.props.title}</h1>
        {messageElements}
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </>
    )
  }
}
