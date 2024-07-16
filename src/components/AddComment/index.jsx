import { Avatar, Button, TextField } from '@mui/material';
import React from 'react';
import styles from './AddComment.module.scss';

const AddComment = () => {
  return (
    <div className={styles.root}>
      <Avatar
        sx={{mt: 0.8}}
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <form className={styles.form}>
        <TextField
          variant="outlined"
          label="Write a comment"
          multiline
          fullWidth
        />
        <Button variant="contained">Send</Button>
      </form>
    </div>
  );
};

export default AddComment;
