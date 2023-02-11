import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import './GlobalStyles.scss';

interface Props {
    children?: ReactNode
}

function GlobalStyles({ children }: Props) {
    return <>{children}</>
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;