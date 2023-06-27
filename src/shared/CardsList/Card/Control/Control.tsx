import React, { useState } from 'react';
import { Action } from './Action';
import { KarmaCounter } from './KarmaCounter';
import styles from './control.css';
import { CommentButton } from './CommentButton';
import { DropDownMenu } from '../DropDownMenu';

export interface IItem {
  value: string;
  svg: any;
  id: string,
}

export interface IListProps {
  list: IItem[];
  onClose?: () => void;
}


export function Control({ list }: IListProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.controls}>
      <button className={styles.menuButton} onClick={() => { setIsModalOpened(true) }}>
        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
        </svg>
      </button>
      {isModalOpened && (
        <DropDownMenu 
        onClose={() => {setIsModalOpened(false);}}
        list={list} />
      )}
          {/* <div id='menuModal'></div> */}
      <KarmaCounter />
      <CommentButton />
      <Action />
    </div>
  );
}
