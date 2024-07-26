import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Paper, TextField, Typography } from '@mui/material';
import { fetchLogin } from '../../redux/slices/auth';
import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => Boolean(state.auth.data));
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchLogin(values));

      if (!data.payload) {
        alert('Failed sign in');
      }

      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuth) {
    navigate('/');
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Email"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Enter your email' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Password"
          type="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Enter your password' })}
          fullWidth
        />
        <Button disabled={!isValid} size="large" variant="contained" type="submit" fullWidth>
          Sign in
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
