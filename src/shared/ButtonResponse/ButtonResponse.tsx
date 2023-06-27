import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { PropsDate } from '../Comment';
import { responseContext } from '../context/pesponseContext';
import styles from './buttonresponse.css';

export function ButtonResponse({ props }: PropsDate) {
  const { onChange } = useContext(responseContext);
  const [inputValue, setInputValue ]= useState(`${props.surname}, `);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }



  return (
    <form className={styles.inputResponse}
      onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        onChange={handleChange}
        value={inputValue} />
      <button
        type='submit'
        className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
