import React from 'react';
import { PostProps } from '../Card';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { TitleComponent } from './Title';


export function TextContent({ post }: PostProps) {
  return (
    <div className={styles.textContent}>
      <MetaData icon={post.icon_img}>
        {post.author}
      </MetaData>
      <TitleComponent post={post}/>
    </div>
  );
}
