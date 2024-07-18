import React from 'react';

import styles from './Header.module.scss';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const isAuth = useSelector((state) => Boolean(state.auth.data));

  return (
    <header className={styles.root}>
      <Container maxWidth="lg" fixed>
        <div className={styles.flex}>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Mern blog
            </Button>
          </Link>
          {isAuth ? (
            <div className={styles.buttons}>
              <Link to="/login">
                <Button color="primary" variant="contained">
                  Make a post
                </Button>
              </Link>
              <Link to="/register">
                <Button color="error" variant="contained">
                  Log out
                </Button>
              </Link>
            </div>
          ) : (
            <div className={styles.buttons}>
              <Link to="/login">
                <Button variant="outlined">Sign in</Button>
              </Link>
              <Link to="/register">
                <Button variant="contained">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
