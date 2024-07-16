import React from 'react';
import Post from '../components/Post';
import CommentsBlock from '../components/CommentsBlock';
import AddComment from '../components/AddComment';

const FullPost = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Post />
      <CommentsBlock>
        <AddComment />
      </CommentsBlock>
    </div>
  );
};

export default FullPost;
