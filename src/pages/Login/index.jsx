import React from 'react';
import styles from './Login.module.scss';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchLogin } from '../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => Boolean(state.auth.data));
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));

    if (!data.payload) {
      alert('Failed sign in');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  

  if(isAuth){
    navigate('/')
  }

  console.log(isAuth);
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
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('password', { required: 'Enter your password' })}
          fullWidth
        />
        <Button disabled={!isValid} size="large" variant="contained" type="submit" fullWidth>
          Enter
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
