import React from 'react';
import styles from './dropdownmenu.css';

interface IItem {
  value: string;
  svg: any;
  id: string,
}

interface IMyListProps {
  list: IItem[];
}


export function IDropDownMenu({ list }: IMyListProps) {

  return (
    <div className={styles.containerMenu}>
      <ul className={styles.list}>
        {list.map((item: IItem) => (
          <li className={styles.item} key={item.id}>{item.svg}{item.value}</li>
        ))}
      </ul>
      <button className={styles.closeMenu}>
        Закрыть
      </button>
    </div>
  );
}

export function DropDownMenuMobil({ list }: IMyListProps) {

  return (
    <div className={styles.containerMenuModil}>
      <ul className={styles.list}>
        {list.map((item: IItem) => (
          <li className={styles.item} key={item.id}>{item.svg}{item.value}</li>
        ))}
      </ul>
      <button className={styles.closeMenu}>
        Закрыть
      </button>
    </div>
  );
}