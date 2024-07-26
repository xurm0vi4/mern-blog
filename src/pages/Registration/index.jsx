import React from 'react';
import styles from './Registration.module.scss';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../redux/slices/auth';

const Registration = () => {
  const isAuth = useSelector((state) => Boolean(state.auth.data));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    console.log(data);

    if (!data.payload) {
      alert('Registration failed');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    navigate('/');
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Full name"
          type="fullName"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Enter your full name' })}
          fullWidth
        />
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
          Sign up
        </Button>
      </form>
    </Paper>
  );
};

export default Registration;
