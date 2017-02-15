import React, {Component} from 'react';
import Button from '../../components/button/button';

export const Home = () => (
  <div>
    <section
      className="row row-center row-center-v cover-5 cover-dark h-600 bg-image" style={{'backgroundImage':'url(http://www.paragliding-lessons.com/wp-content/uploads/2015/12/slider-4.png)'}}>
      <div className="cover-content color-light">
        <h1>Track your flight</h1>

        <div className="t-center">

          <Button classNames={'btn-md btn-border-light rounded-3'}
                  loading={false}
                  text={'Sign in'} />
        </div>
      </div>
    </section>
  </div>
);

export default Home