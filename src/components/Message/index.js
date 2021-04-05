import PropTypes from "prop-types"
import React from "react"


export class Message extends React.Component {
  static propTypes = {
    text: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.text.name}</h2>
        <p>{this.props.text.message}</p>
      </div>
    )
  }
}
