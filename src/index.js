import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import MessageField from "./MessageField"

ReactDOM.render(<MessageField title={'Messenger'} />, document.querySelector('#root'))

// const Messages = () => {
//   const [messages, setMessages] = useState(['Hello'])
//   const [value, setValue] = useState('')
//
//   function handleInput (event) {
//     setValue(event.target.value)
//   }
//
//   function handleClick () {
//     setMessages([...messages, value])
//   }
//
//   return (
//     <div>
//       <h1>Messages</h1>
//       {messages.map((message, index) => (<p key={index}>{message}</p>))}
//       <input placeholder="Введите сообщение" value={value} onChange={handleInput} />
//       <button onClick={handleClick}>Отправить</button>
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <>
//     <Messages title="title" />
//   </>,
//   document.querySelector("#root"),
// )
