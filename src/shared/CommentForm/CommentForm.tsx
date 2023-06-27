import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export function CommentForm({ value, onChange, onSubmit }: Props) {

  return (
    <form className={styles.input} onSubmit={onSubmit}>
      <textarea className={styles.textarea} onChange={onChange} value={value} />
      <button type='submit' className={styles.button}> Комментировать</button>
    </form>
  );
}
