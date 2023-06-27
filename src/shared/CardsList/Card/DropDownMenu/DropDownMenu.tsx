import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { IItem, IListProps } from '../Control';
import styles from './dropdownmenu.css';

export function DropDownMenu({ list,  onClose }: IListProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        onClose?.();
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  return (
    <div className={styles.containerMenu}>
      <ul className={styles.list}>
        {list.map((item: IItem) => (
          <li className={styles.item} key={item.id}>{item.svg}{item.value}</li>
        ))}
      </ul>
    </div>);
}
