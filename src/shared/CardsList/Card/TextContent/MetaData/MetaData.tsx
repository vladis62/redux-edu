import React from 'react';
import { PostProps } from '../../Card';
import styles from './metadata.css';

interface User {
  children?: React.ReactNode;
  icon?: string;
}

export function MetaData({ children, icon }: User) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userlink}>
        <img className={styles.avatar} src={icon}
          alt="avatar"
        />
        <a href="#user-url" className={styles.username}>{children}</a>
      </div>
      <span className={styles.createAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад</span>
    </div>
  );
}
