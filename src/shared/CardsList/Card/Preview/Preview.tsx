import React from 'react';
import styles from './preview.css';

interface IImgProps {
  thumbnail?: string
}

export function Preview({ thumbnail }: IImgProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={thumbnail}
        alt=""
      />
    </div>
  );
}
