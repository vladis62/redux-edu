import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../Icon';
import { NameUser, EColor } from '../../../NameUser';
import styles from './userblock.css';

interface IUsetBlockProps {
  avatarSrc?: string,
  username?: string
}

export function UserBlock({ avatarSrc, username }: IUsetBlockProps) {
  return (
    <a
      className={styles.userBox}
      href="https://www.reddit.com/api/v1/authorize?client_id=nX9OpC-uNuyAX6uskR7HIQ&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&scope=identity read submit">
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} className={styles.avatarImage} alt='user avatar' />
          : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <NameUser size={20} color={username ? EColor.black : EColor.gray99}>
          {username || 'Аноним'}
        </NameUser>
      </div>
    </a>
  );
}
