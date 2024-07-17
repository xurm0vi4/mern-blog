import React from 'react';
import styles from './Post.module.scss';
import imgTest from './Screenshot_53.png';
import UserInfo from '../UserInfo';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';

const Post = ({ _id, imageUrl, createdAt, title, tags, viewsCount, user, text, isFullPost }) => {
  
  return (
    <div className={styles.root}>
      {imageUrl && (
        <img
          src={`http://localhost:4444${imageUrl}`}
          style={isFullPost && { minHeight: '300px', height: '100%' }}
          alt="post image"
          className={styles.img}
        />
      )}
      <div className={styles.content}>
        <UserInfo fullName={user.fullName} date={createdAt} />
        <div className={styles.info}>
          <Link className={styles.link} to={`/posts/${_id}`}>
            <h2 className={styles.title}>{title}</h2>
          </Link>
          <div className={styles.tags}>
            {tags.length && tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
          <p className={styles.text}>{text}</p>
          <ul className={styles.stats}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>150</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
