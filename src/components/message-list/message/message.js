import classNames from "classnames"
import React, { Component } from "react"
import styles from "./message.module.css"

export class Message extends Component {

  render() {
    const {
      message: { message, author },
    } = this.props

    return (
        <div
            className={classNames(styles.message, {
              [styles.currentMessage]: author === "User",
            })}
        >
          <h3>{author}</h3>
          <p>{message}</p>
          <p>12.03</p>
        </div>
    )
  }
}
