import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from '../../axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import SimpleMdeReact from 'react-simplemde-editor';
import { Button, Paper, TextField } from '@mui/material';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';

const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const inputFileRef = useRef(null);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const isEditing = Boolean(id);

  const onChangeText = useCallback((value) => {
    setText(value);
  }, []);

  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Error in receiving the image');
    }
  };

  const removeImage = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      setImageUrl('');
    }
  };

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        text,
        tags,
        imageUrl,
      };
      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        : await axios.post('/posts', fields);
      const _id = isEditing ? id : data._id;
      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (isEditing) {
      try {
        axios
          .get(`/posts/${id}`)
          .then(({ data }) => {
            setTitle(data.title);
            setText(data.text);
            setTags(data.tags.join(','));
            setImageUrl(data.imageUrl);
          })
          .catch((err) => {
            console.warn(err);
            alert('Error');
          });
      } catch (err) {
        console.warn(err);
        alert('Error');
      }
    }
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Enter your text',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30, marginTop: 30 }}>
      <div className={styles.top}>
        <Button onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
          Upload preview
        </Button>
        <input
          ref={inputFileRef}
          type="file"
          className={styles.file}
          onChange={handleChangeFile}
          hidden
        />
        {imageUrl && (
          <>
            <Button
              sx={{ ml: 3 }}
              variant="contained"
              color="error"
              size="large"
              onClick={removeImage}>
              Delete
            </Button>
            <img className={styles.img} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
          </>
        )}
      </div>
      <TextField
        classes={{ root: styles.title }}
        placeholder="Post title..."
        variant="standard"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        placeholder="Tags"
        variant="standard"
        onChange={(e) => setTags(e.target.value)}
        value={tags}
        fullWidth
      />
      <SimpleMdeReact onChange={onChangeText} options={options} value={text} />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} variant="contained" size="large">
          {isEditing ? 'Update' : 'Upload'}
        </Button>
        <Link to="/">
          <Button size="large">Cancel</Button>
        </Link>
      </div>
    </Paper>
  );
};

export default AddPost;
