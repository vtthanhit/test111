import { Box, Card, CardContent, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox, Button } from '@mui/material';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import classNames from 'classnames/bind';
import { styled } from '@mui/material/styles';
import { EyeOffOutline, EyeOutline } from 'mdi-material-ui';

import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

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
})

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps> ({
  '& .MuiFormControlLabel-label': {
    fontSize: '1.6rem',
    color: '#3a3541ad',
  },
});

const CustomButton = styled(Button)({
  backgroundColor: '#9155FD',

  '&:hover': {
    backgroundColor: '#804BDF',
  }
}) as typeof Button;

function Login() {
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
          className={cx('container-content')}
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
              Sign In
            </Typography>
            <Typography variant='body2' className={cx('content-title')} sx={{ fontSize: '1.4rem' }}>Please sign in your account</Typography>
          </Box>
          <form action="">
            <FormControl fullWidth sx={{ mb: 2 }}>
              <CustomInputLabel htmlFor='auth-login-email' required sx={{ fontSize: '1.6rem' }}>Email</CustomInputLabel>
              <CustomOutlinedInput
                label='Email'
                id='auth-login-email'
                autoFocus
                sx={{ fontSize: '1.6rem', color: 'rgba(58, 53, 65, 0.87)' }}
              />
            </FormControl>
            <FormControl fullWidth>
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
                      // onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {value.showPassword ? <EyeOutline sx={{ fontSize: 20 }} /> : <EyeOffOutline sx={{ fontSize: 20 }} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{ mb: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel control={<Checkbox />} label='Remember Me' />
              <LinkStyled to='#'>
                Forgot Password?
              </LinkStyled>
            </Box>
            <CustomButton
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 3, fontSize: '1.6rem' }}
            >
              Login
            </CustomButton>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2, fontSize: '1.6rem' }}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <LinkStyled to='/register'>
                  Create an account
                </LinkStyled>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  </div>
  ;
}

export default Login;