import React, { useEffect } from 'react';

import Header from './components/Header';
import { Container } from '@mui/material';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import FullPost from './pages/FullPost';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';
import AddPost from './pages/AddPost';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  
  return (
    <div className="wrapper">
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
