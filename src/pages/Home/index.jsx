import React from 'react';

import styles from './Home.module.scss';
import Post from '../../components/Post';
import TagsBlock from '../../components/TagsBlock';
import { Tab, Tabs } from '@mui/material';
import CommentsBlock from '../../components/CommentsBlock';
import { fetchPosts } from '../../redux/slices/posts';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const data = dispatch(fetchPosts());
  console.log(data);
  return (
    <>
      <Tabs value={0} sx={{ marginTop: 3 }}>
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <div className={styles.content}>
        <div className={styles.posts}>
          <Post />
          <Post />
          <Post />
        </div>
        <div className={styles.sidebar}>
          <TagsBlock />
          <CommentsBlock />
        </div>
      </div>
    </>
  );
};

export default Home;
