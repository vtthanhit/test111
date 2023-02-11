import { CardContent, Typography, FormControl, InputAdornment, IconButton, Button, InputLabel, OutlinedInput, OutlinedInputProps, styled, Box, Card } from '@mui/material';
import classNames from 'classnames/bind';
import { EyeOutline, EyeOffOutline } from 'mdi-material-ui';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

const CustomOutlinedInput = styled(OutlinedInput)<OutlinedInputProps> ({
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#9115FD',
  },
});

const CustomInputLabel = styled(InputLabel) ({
  '&.Mui-focused': {
    color: '#9115FD',
  },
});

const LinkStyled = styled(Link) ({
  fontSize: '1.6rem',
  textDecoration: 'none',
  color: 'var(--primary-color)',
});

const CustomButton = styled(Button)({
  backgroundColor: '#9155FD',

  '&:hover': {
    backgroundColor: '#804BDF',
  }
}) as typeof Button;

function Register() {
  const [value, setValue] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue({
    ...value,
    [event.target.name]: event.target.value,
  });

  const handleClickShowPassword = () => setValue({
    ...value,
    showPassword: !value.showPassword,
  });

  return <div className={cx('wrapper')}>
    <Box className={cx('container')}>
      <Card>
        <CardContent 
          sx={{
            p: '48px 36px 28px 36px !important'
          }}
        >
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '3rem',
                margin: 0,
              }}
            >
              LOGO
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h5' sx={{ fontSize: '2.5rem', fontWeight: 500, marginBottom: 0.75 }}>
              Sign Up
            </Typography>
            <Typography variant='body2' className={cx('content-title')} sx={{ fontSize: '1.4rem' }}>Make your app management easy and fun!</Typography>
          </Box>
          <form action="">
            <FormControl fullWidth sx={{ mb: 2 }}>
              <CustomInputLabel htmlFor='auth-register-username' required sx={{ fontSize: '1.6rem' }}>Username</CustomInputLabel>
              <CustomOutlinedInput
                label='Username'
                id='auth-register-username'
                sx={{ fontSize: '1.6rem', color: 'rgba(58, 53, 65, 0.87)' }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <CustomInputLabel htmlFor='auth-register-email' required sx={{ fontSize: '1.6rem' }}>Email</CustomInputLabel>
              <CustomOutlinedInput
                label='Email'
                id='auth-register-email'
                sx={{ fontSize: '1.6rem', color: 'rgba(58, 53, 65, 0.87)' }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <CustomInputLabel htmlFor='auth-login-password' required sx={{ fontSize: '1.6rem' }}>Password</CustomInputLabel>
              <CustomOutlinedInput
                label='Password'
                value={value.password}
                id='auth-login-password'
                name='password'
                onChange={handleChange}
                type={value.showPassword ? 'text' : 'password'}
                sx={{ fontSize: '1.6rem', color: 'rgba(58, 53, 65, 0.87)' }}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      aria-label='toggle password visibility'
                    >
                      {value.showPassword ? <EyeOutline sx={{ fontSize: 20 }} /> : <EyeOffOutline sx={{ fontSize: 20 }} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <CustomButton
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 3, fontSize: '1.6rem' }}
            >
              Register
            </CustomButton>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2, fontSize: '1.6rem' }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <LinkStyled to='/login'>
                  Sign in instead
                </LinkStyled>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  </div> 
}

export default Register;