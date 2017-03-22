import React, {Component} from 'react';
import {connect} from 'react-redux'
import { IndexLink, Link } from 'react-router';

class Sidebar extends Component {

  render() {
    let links = [
      {name: 'My trips', path: '/trips/', icon: 'fa-globe'},
      {name: 'Statistics', path: '/trips/statistics', icon: 'fa-bar-chart'}
    ];

    links = links.map((link, i) => {
      return (
        <Link key={i} to={link.path} activeClassName={'active'}>
          <div className="nav-item">
            <span className={`fa ${link.icon}`}/>
            <span className="item-text">{link.name}</span>
          </div>
        </Link>)
    });

    return (
      <nav className="nav-side nav-side-dark nav-side-lg nav-left">
        {links}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Sidebar);