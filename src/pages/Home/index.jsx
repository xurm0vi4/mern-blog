import React, { useEffect } from 'react';

import styles from './Home.module.scss';
import Post from '../../components/Post';
import TagsBlock from '../../components/TagsBlock';
import { Tab, Tabs } from '@mui/material';
import CommentsBlock from '../../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../../redux/slices/posts';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  return (
    <>
      <Tabs value={0} sx={{ marginTop: 3 }}>
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <div className={styles.content}>
        <div className={styles.posts}>
          {posts.items.map((post) => <Post key={post._id} {...post} />)}
        </div>
        <div className={styles.sidebar}>
          <TagsBlock tags={tags.items}/>
          <CommentsBlock />
        </div>
      </div>
    </>
  );
};

export default Home;
