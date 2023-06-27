import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useComment } from '../../hooks/useComment';
import { Post } from '../../hooks/usePostsData';
import { Comment } from '../Comment';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

interface IModalTitle {
  post?: Post;
  onClose?: () => void;
}

export function Post({post, onClose }: IModalTitle) {
  const ref = useRef<HTMLDivElement>(null);

  const [commentsInfo] = useComment(post?.subreddit, post?.id);

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

  const node = document.querySelector('#modal_root');

  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <button>закрыть</button>
      <h2>{post?.title}</h2>
      <div className={styles.content}>
        <p>{commentsInfo?.title}</p>
      </div>
      <CommentFormContainer />
      <ul className='list__comment'>
        {commentsInfo?.comments?.map((comment) => { 
          return <Comment key={comment.id} props={comment}/>
        })}
      </ul>
    </div>
  ), node);
}
