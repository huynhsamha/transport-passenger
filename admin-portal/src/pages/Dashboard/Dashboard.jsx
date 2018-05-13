import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import { AvatarField } from '../../fields';

import './Dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.getUser();
    this.state = {};
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.displayName = `${this.user.first_name || ''} ${this.user.last_name || ''}`;
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="banner">
          <img src="/img/bg-dashboard.jpg" alt="Background Dashboard" className="bg" />
          <img src={this.user.photo_url} alt="Avatar" className="avatar" />
        </div>
        <div className="name">
          <h1>{this.user.displayName}</h1>
        </div>
        <div className="row">
          <div className="col-lg-6" />
          <div className="col-lg-6" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
