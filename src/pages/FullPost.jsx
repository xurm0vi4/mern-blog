import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

import Post from '../components/Post';
import CommentsBlock from '../components/CommentsBlock';
import AddComment from '../components/AddComment';
import PostSkeleton from '../components/Post/PostSkeleton';

const FullPost = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [render, setRender] = useState(0);
  const { id } = useParams();

  const getPost = async () => {
    await axios
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('error');
      });
  };

  useEffect(() => {
    getPost();
  }, [render]);

  return (
    <div style={{ marginTop: 30 }}>
      {isLoading ? <PostSkeleton /> : <Post {...post} isFullPost />}
      <CommentsBlock comments={post?.comments} isLoading={isLoading}>
        <AddComment id={id} render={render} setRender={setRender} />
      </CommentsBlock>
    </div>
  );
};

export default FullPost;
