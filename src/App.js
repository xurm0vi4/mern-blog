import React from 'react';

import Header from './components/Header';
import { Container } from '@mui/material';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Container maxWidth="lg">
        <Home/>
      </Container>
    </div>
  );
}

export default App;
