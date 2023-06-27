import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {

  const [posts] = usePostsData();

  return (
    <ul className={styles.cardsList}>
        {posts.map((post) => <Card key={post.id} post={post} />)}
    </ul>
  );
}
