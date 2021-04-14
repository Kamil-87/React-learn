import {Component} from "react";

export class MessageProvider extends Component {
  state = {
    conversations: [
      {
        title: "room1",
        value: "",
        lastMessage: {author: "User", message: "hi!", createdTs: new Date()},
      },
      {title: "room2", value: "", lastMessage: null},
      {title: "room3", value: "", lastMessage: null},
    ],
    messages: {
      room1: [{author: "User", message: "hi!", createdTs: new Date()}],
    },
  };

  handleChangeValue = (value) => {
    const {
      match: {params},
    } = this.props;

    console.log(this.state.conversations)

    this.setState({
      conversations: this.state.conversations.map((conversation) =>
        conversation.title === params.id
          ? {...conversation, value}
          : conversation
      ),
    });
  };

  sendMessage = ({author, message}) => {
    if (!message) {
      return;
    }

    const {
      match: {params},
    } = this.props;

    const newMessage = {author, message, createdTs: new Date()};

    this.setState({
      conversations: this.state.conversations.map((conversation) =>
        conversation.title === params.id
          ? {
            ...conversation,
            lastMessage: newMessage,
            value: "",
          }
          : conversation
      ),
      messages: {
        ...this.state.messages,
        [params.id]: [...(this.state.messages[params.id] || []), newMessage],
      },
    });
  };

  componentDidUpdate() {}

  render() {
    const {children, match} = this.props;
    const {conversations, messages} = this.state;

    const {id} = match.params ?? {};

    const state = {
      conversations,
      messages: messages[id] ?? [],
      value:
        conversations.find((conversation) => conversation.title === id)
          ?.value || "",
    };

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue,
    };

    return children([state, actions]);
  }
}
