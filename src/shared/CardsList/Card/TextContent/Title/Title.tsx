import React, { useState } from 'react';
import { Post } from '../../../../Post';
import { PostProps } from '../../Card';
import styles from './title.css';



export function TitleComponent({ post }: PostProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} onClick={() => { setIsModalOpen(true); }}>
        {post.title}
      </a>

      {isModalOpen && (
        <Post
          onClose={() => {setIsModalOpen(false);}}
          post={post} />
      )}
    </h2>
  );
}
