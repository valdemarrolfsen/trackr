import React, {Component} from 'react';
import Button from '../../components/button/button';
import { Link } from 'react-router';

import bgImage from '../../resources/img/bg.png'

export const Home = () => (
  <div>
    <div
      className="row row-center row-center-v cover-5 cover-dark h-600 bg-image"
      style={{'backgroundImage': `url(${bgImage})`}}>

      <div className="cover-content color-light">
        <h1>Track your flight</h1>

        <div className="t-center p-1-1 fs-12">

          <Link to={'/login/'}>
            <Button classNames={'btn-md btn-border-light rounded-3 m-0-1'}
                    loading={false}
                    text={'Sign in'} />
          </Link>

          <Link to={'/register/'}>
            <Button classNames={'btn-md btn-border-light rounded-3 m-0-1'}
                    loading={false}
                    text={'Register profile'} />
          </Link>

        </div>
      </div>

    </div>

    <div className="border-t-1 border-primary p-4-2 bg-stable-light row row-center">
      <div className="w-1200">
        <div className="row">
          <div className="c-m-12 t-center">
            <h3>What is trackr</h3>
          </div>
        </div>
        <div className="row row-center p-2-0">
          <div className="c-m-6 t-center">
            <p className="fs-16">Trackr is a system for tracking and informing you about your trip in the sky! Gather your data and show it to your friends. It is fun!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home