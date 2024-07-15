import React from 'react';

import styles from './Home.module.scss';
import Post from '../../components/Post';
import TagsBlock from '../../components/TagsBlock';

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
      </div>
      <div className={styles.sidebar}>
        <TagsBlock />
      </div>
    </div>
  );
};

export default Home;
