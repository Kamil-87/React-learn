import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./chat.module.css";

// eslint-disable-next-line no-unused-vars
const StyledListItem = withStyles((theme) => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
}))(ListItem);

export class Chat extends Component {
  static propTypes = {
    selected: PropTypes.bool.isRequired,
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { handleListItemClick, selected, chat } = this.props;
    // eslint-disable-next-line react/prop-types
    const { lastMessage, title } = chat;
    // eslint-disable-next-line react/prop-types
    const time = lastMessage?.createdTs
      // eslint-disable-next-line react/prop-types
      ? format(lastMessage.createdTs, "HH:mm:ss")
      : null;

    return (
      <StyledListItem button selected={selected} onClick={handleListItemClick}>
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <div className={styles.description}>
          <ListItemText className={styles.text} primary={title} />
          {lastMessage ? (
            <ListItemText
              className={styles.text}
              {/* eslint-disable-next-line react/prop-types */}
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
