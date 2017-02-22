import React from 'react'
import Header from '../components/header/header';

import './coreLayout.scss';

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='has-nav-md container'>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout