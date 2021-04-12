import React from "react";
import styles from "./message-not-found.module.css";

export const MessageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.noData}>
        <h1>Нет сообщений</h1>
      </div>
    </div>
  );
};
