import React, { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import Post from '../../components/Post';
import TagsBlock from '../../components/TagsBlock';
import { Tab, Tabs } from '@mui/material';
import CommentsBlock from '../../components/CommentsBlock';
import { fetchComments, fetchPosts, fetchTags } from '../../redux/slices/posts';
import { useDispatch, useSelector } from 'react-redux';
import PostSkeleton from '../../components/Post/PostSkeleton';

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('New');
  const { posts, tags, comments } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);
  const popularPosts = [...posts.items].sort((a, b) => b.viewsCount - a.viewsCount);

  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';
  const isCommentsLoading = comments.status === 'loading';

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.posts}>
          <Tabs value={activeTab === 'New' ? 0 : 1} sx={{ marginTop: 3 }}>
            <Tab label="New" onClick={() => setActiveTab('New')} />
            <Tab label="Popular" onClick={() => setActiveTab('Popular')} />
          </Tabs>
          {isPostsLoading
            ? [...Array(3)].map((_, i) => <PostSkeleton key={i} />)
            : activeTab === 'New'
            ? posts.items.map((post) => (
                <Post key={post._id} {...post} isEditable={userData?._id === post.user._id} />
              ))
            : popularPosts.map((post) => (
                <Post key={post._id} {...post} isEditable={userData?._id === post.user._id} />
              ))}
        </div>
        <div className={styles.sidebar}>
          <TagsBlock tags={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock comments={comments.items} isLoading={isCommentsLoading} isHomePage />
        </div>
      </div>
    </>
  );
};

export default Home;
