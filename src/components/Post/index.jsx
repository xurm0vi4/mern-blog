import React from 'react';
import styles from './Post.module.scss';
import UserInfo from '../UserInfo';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRemovePost } from '../../redux/slices/posts';
import Markdown from 'react-markdown';

const Post = ({
  _id,
  imageUrl,
  createdAt,
  title,
  tags,
  viewsCount,
  user,
  text,
  comments,
  isFullPost,
  isEditable,
}) => {
  const dispatch = useDispatch();

  const removePost = () =>{
    if(window.confirm('Are you sure you want to delete this post?')){
      dispatch(fetchRemovePost(_id))
    }
  }


  return (
    <div className={styles.root}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton color="secondary" onClick={removePost}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          src={`http://localhost:4444${imageUrl}`}
          style={isFullPost && { minHeight: '300px', height: '100%' }}
          alt="post image"
          className={styles.img}
        />
      )}

      <div className={styles.content}>
        <UserInfo avatarUrl={user?.avatarUrl || ''} fullName={user?.fullName} date={createdAt || 0} />
        <div className={styles.info}>
          <h2 className={styles.title}>
            {isFullPost ? (
              title
            ) : (
              <Link className={styles.link} to={`/posts/${_id}`}>
                {title}
              </Link>
            )}
          </h2>

          <div className={styles.tags}>
            {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
          <Markdown className={styles.text}>
            {isFullPost ? text : text.length > 300 ? text.substring(0, 300) + '...' : text}
          </Markdown>
          <ul className={styles.stats}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{comments?.length || 0}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
