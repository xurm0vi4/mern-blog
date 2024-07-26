import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../axios';
import { Avatar, Button, TextField } from '@mui/material';

import styles from './AddComment.module.scss';

const AddComment = ({ id, render, setRender }) => {
  const userData = useSelector((state) => state.auth.data);
  const [text, setText] = useState('');

  const submitComment = async () => {
    try {
      if (text.trim().length) {
        await axios.post(`/posts/${id}/comments`, { text });
        setText('');
        setRender((prev) => prev + 1);
      } else {
        alert('Enter your comment');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      {userData && Object.keys(userData).length > 0 && (
        <div className={styles.root}>
          <Avatar sx={{ mt: 0.8 }} alt="Remy Sharp" src={userData.avatarUrl} />
          <form className={styles.form}>
            <TextField
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Write a comment"
              multiline
              fullWidth
            />
            <Button onClick={submitComment} variant="contained">
              Send
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddComment;
