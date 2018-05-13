import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SaveIcon from '@material-ui/icons/Save';
import SecurityIcon from '@material-ui/icons/Lock';

import { AvatarField } from '../../fields';

import './Dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.getUser();
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  onClickSaveChanges = () => {
    const { currentPassword, newPassword, confirmPassword } = this.state;
    const token = localStorage.getItem('token');
    // console.log(currentPassword);
    // console.log(newPassword);
    // console.log(confirmPassword);
    if (currentPassword.length === 0 || newPassword.length === 0
      || confirmPassword.length === 0 || newPassword !== confirmPassword) {
      console.log('Not valid');
    }

    fetch(`/api/v1/employee/${this.user.id}/changePassword`, {
      method: 'POST',
      body: JSON.stringify({
        username: this.user.username || '',
        currentPassword, newPassword
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    })
      .then(res => res.json())
      .then((res) => {
        this.setState({ currentPassword: '', newPassword: '', confirmPassword: '' }, () => {
          window.alert(res.message);
        });
      })
      .catch(err => window.alert(err.message));
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.displayName = `${this.user.first_name || ''} ${this.user.last_name || ''}`;
  }

  render() {
    const {
      currentPassword, newPassword, confirmPassword
    } = this.state;

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
          <div className="col-lg-6">
            <div className="box-setting">
              <h2><SecurityIcon /> Change Password</h2>
              <TextField
                type="password" margin="normal" fullWidth
                label="Current password"
                onChange={ev => this.setState({ currentPassword: ev.target.value })}
                required
              />
              <TextField
                type="password" margin="normal" fullWidth
                label="New password"
                onChange={ev => this.setState({ newPassword: ev.target.value })}
              />
              <TextField
                type="password" margin="normal" fullWidth
                label="Confirm password"
                onChange={ev => this.setState({ confirmPassword: ev.target.value })}
                error={newPassword !== confirmPassword}
              />
              <div style={{ marginTop: '25px', marginBottom: '25px', textAlign: 'center' }}>
                <Button
                  variant="raised" color="secondary"
                  onClick={this.onClickSaveChanges}
                  disabled={newPassword !== confirmPassword}
                >
                  <SaveIcon style={{ marginRight: '5px' }} />
                  Save changes
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
