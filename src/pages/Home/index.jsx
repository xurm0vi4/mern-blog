import React from 'react';

import styles from './Home.module.scss';
import Post from '../../components/Post';
import TagsBlock from '../../components/TagsBlock';
import { Tab, Tabs } from '@mui/material';
import CommentsBlock from '../../components/CommentsBlock';

const Home = () => {
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
