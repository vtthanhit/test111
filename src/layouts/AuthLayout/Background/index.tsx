import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import classNames from 'classnames/bind';

import styles from './Backgound.module.scss';

const cx = classNames.bind(styles);

function Background() {
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));
  
  if (!hidden) {
    return <div className={cx('wrapper-bg')}>
      <img className={cx('bg-tree')} src="images/tree.png" alt="tree" />
      <img className={cx('bg-mask')} src="images/mask.png" alt="mask" />
      <img className={cx('bg-tree-3')} src="images/tree-3.png" alt="tree" />
    </div>;
  } else {
    return null;
  }
}

export default Background;