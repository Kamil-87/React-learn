import SettingsIcon from '@material-ui/icons/Settings';
import React, {Component} from 'react';
import styles from "./header-right.module.css";

export class HeaderRight extends Component {
  render() {
    return (
        <div className={styles.right}>
          <div className={styles.title}>
            <p>name</p>
          </div>
          <div className={styles.setting}>
            <SettingsIcon />
          </div>
        </div>
    );
  }
}
