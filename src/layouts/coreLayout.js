import React from 'react'
import Header from '../components/header/header';

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='has-nav-md'>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout