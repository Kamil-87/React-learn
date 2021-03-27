import PropTypes from "prop-types"
import React from "react"


// eslint-disable-next-line import/no-default-export
export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        {/* eslint-disable-next-line react/prop-types */}
        <h2>{this.props.text.name}</h2>
        {/* eslint-disable-next-line react/prop-types */}
        <p>{this.props.text.message}</p>
      </div>
    )
  }
}
