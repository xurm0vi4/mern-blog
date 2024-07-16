import React from 'react';

import Header from './components/Header';
import { Container } from '@mui/material';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import FullPost from './pages/FullPost';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/posts" element={<FullPost />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
