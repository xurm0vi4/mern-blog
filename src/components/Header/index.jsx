import React from 'react';

import styles from './Header.module.scss';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container maxWidth="lg" fixed>
        <div className={styles.flex}>
          <a href="/">
            <Button variant="contained" color="secondary">Mern blog</Button>
          </a>
          <div className={styles.buttons}>
            <a href="/login">
              <Button variant="outlined">Sign in</Button>
            </a>
            <a href="/register">
              <Button variant="contained">Sign up</Button>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
