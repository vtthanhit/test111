import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import Background from './Background/index';
import styles from './AuthLayout.module.scss';
import { Grid } from '@mui/material';

interface Props {
  children?: ReactNode;
}

const cx = classNames.bind(styles);

function AuthLayout({ children }: Props): JSX.Element {
  return <>
    <Grid container spacing={2} className={cx('wrapper')}>
      <Grid item xs={12} md={12} className={cx('content')}>
        { children }
      </Grid>
      <Background />
    </Grid>
  </> 
}

export default AuthLayout;