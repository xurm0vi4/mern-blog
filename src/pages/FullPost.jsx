import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import CommentsBlock from '../components/CommentsBlock';
import AddComment from '../components/AddComment';
import { useParams } from 'react-router-dom';
import axios from '../axios';

const FullPost = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('error');
      });
  }, []);
  console.log(data);
  return (
    <div style={{ marginTop: 30 }}>
      {isLoading ? <h1>Loading</h1> : <Post {...data} isFullPost/>}
      <CommentsBlock>
        <AddComment />
      </CommentsBlock>
    </div>
  );
};

export default FullPost;
