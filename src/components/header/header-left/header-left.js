import {Input, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import React, {Component} from 'react';
import styles from "./header-left.module.css";


const StyledInput = withStyles(() => {
  return {
    root: {
      "&": {
        color: "#9a9fa1",
        padding: "0 10px",
        fontSize: "15px",
        background: "rgba(255, 255, 255, .1)",
        borderRadius: "5px",
        borderBottom: "0"
      },
    },
  }
})(Input)


export class HeaderLeft extends Component {
  render() {
    return (
        <div className={styles.left}>
          <div className={styles.burger}>
            <MenuIcon />
          </div>
          <StyledInput
              placeholder="Поиск"
          />
        </div>
    );
  }
}
