import React, { Component } from "react"
import {HeaderLeft} from "./header-left"
import {HeaderRight} from "./header-right"

import styles from "./header.module.css"


export class Header extends Component {
  render() {
    return (
        <div className={styles.header}>
          <HeaderLeft />

          <HeaderRight />
        </div>
    )
  }
}
