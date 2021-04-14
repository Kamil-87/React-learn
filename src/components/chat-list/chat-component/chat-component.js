import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons";
import { format } from "date-fns";
import React, { Component } from "react";
import styles from "./chat-component.module.css";

const StyledListItem = withStyles(() => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
}))(ListItem);

export class ChatComponent extends Component {

  render() {
    const { handleListItemClick, selected, chat } = this.props;
    const { lastMessage, title } = chat;
    const time = lastMessage?.createdTs
      ? format(lastMessage.createdTs, "HH:mm:ss")
      : null;

    return (
      <StyledListItem
          button={true}
          selected={selected}
          onClick={handleListItemClick}>
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>

        <div className={styles.description}>
          <ListItemText className={styles.text} primary={title} />
          {lastMessage ? (
            <ListItemText
              className={styles.text}
              primary={`${lastMessage.author}: ${lastMessage.message}`}
            />
          ) : (
            <ListItemText className={styles.text} primary="Нет сообщений" />
          )}
          <ListItemText className={styles.text} primary={time} />
        </div>
      </StyledListItem>
    );
  }
}
