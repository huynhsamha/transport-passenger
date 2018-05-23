import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import SaveIcon from '@material-ui/icons/Save';
import SecurityIcon from '@material-ui/icons/Lock';
import PersonalIcon from '@material-ui/icons/Person';

import { AvatarField } from '../../fields';

import './Dashboard.css';

const Highcharts = window.Highcharts;

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      user: this.getUser()
    };

    document.title = 'Dashboard';
  }

  componentDidMount() {
    this.renderChart();
  }

  onClickChangePassword = () => {
    const {
      user, currentPassword, newPassword, confirmPassword
    } = this.state;
    const token = localStorage.getItem('token');

    if (currentPassword.length === 0 || newPassword.length === 0
      || confirmPassword.length === 0 || newPassword !== confirmPassword) {
      console.log('Not valid');
    }

    fetch(`/api/v1/employee/${user.id}/changePassword`, {
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

  onClickSaveInfo = () => {
    const { user } = this.state;
    const token = localStorage.getItem('token');

    fetch(`/api/v1/employee/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        tel: user.tel,
        bank_account: user.bank_account,
        address: user.address
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    }).then(res => res.json())
      .then((res) => {
        const user = res.data;
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ user: this.getUser() }, () => {
          window.alert('Update successfully');
        });
      })
      .catch(err => window.alert('Error. Please try again'));
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    user.displayName = `${user.first_name || ''} ${user.last_name || ''}`;
    user.photo_url = user.photo_url || '/img/avatar.png';
    return user;
  }

  renderChart() {
    const token = localStorage.getItem('token');

    fetch('/api/v1/mix/salary_by_role', {
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    })
      .then(res => res.json())
      .then((res) => {

        const series = res.data.map(data => ({
          name: data.role.charAt(0).toUpperCase() + data.role.slice(1),
          data: [data.sum_salary]
        }));

        Highcharts.chart('chart_sum_salary_role', {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Total employees\' salary by Role'
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            categories: ['Roles of Employee'],
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Salary (VND)'
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} VND</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series
        });
      }).catch((err) => {
        console.log(err);
      });
  }


  render() {
    const {
      user, currentPassword, newPassword, confirmPassword
    } = this.state;

    return (
      <div className="Dashboard">
        <div className="banner">
          <img src="/img/bg-dashboard.jpg" alt="Background Dashboard" className="bg" />
          <img src={user.photo_url} alt="Avatar" className="avatar" />
        </div>
        <div className="name">
          <h1>{user.displayName}</h1>
        </div>

        <div id="chart_sum_salary_role" />
        {/* <div id="chart" />
        <div id="chart" />
        <div id="chart" /> */}

        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <div className="box-setting">
              <h2><PersonalIcon /> Personal Information</h2>
              <div className="row">
                <div className="col-lg-6">
                  <TextField label="ID" value={user.id} disabled type="number" margin="normal" fullWidth />
                </div>
                <div className="col-lg-6">
                  <TextField label="SSN" value={user.ssn} disabled margin="normal" fullWidth />
                </div>
                <div className="col-lg-6">
                  <TextField label="Role" value={user.role} disabled margin="normal" fullWidth />
                </div>
                <div className="col-lg-6">
                  <TextField label="Salary" value={user.salary} disabled type="number" margin="normal" fullWidth />
                </div>
                <div className="col-lg-6">
                  <TextField label="Username" value={user.username} disabled margin="normal" fullWidth />
                </div>
                <div className="col-lg-6">
                  <TextField label="Email" value={user.email} disabled margin="normal" fullWidth />
                </div>
                <div className="col-lg-6">
                  <TextField
                    label="First Name" value={user.first_name} margin="normal" fullWidth
                    onChange={ev => this.setState({ user: { ...user, first_name: ev.target.value } })}
                  />
                </div>
                <div className="col-lg-6">
                  <TextField
                    label="Last Name" value={user.last_name} margin="normal" fullWidth
                    onChange={ev => this.setState({ user: { ...user, last_name: ev.target.value } })}
                  />
                </div>
                <div className="col-lg-6">
                  <TextField
                    label="Tel" value={user.tel} margin="normal" fullWidth
                    onChange={ev => this.setState({ user: { ...user, tel: ev.target.value } })}
                  />
                </div>
                <div className="col-lg-6">
                  <TextField
                    label="Bank Account" value={user.bank_account} margin="normal" fullWidth
                    onChange={ev => this.setState({ user: { ...user, bank_account: ev.target.value } })}
                  />
                </div>
                <div className="col-lg-6">
                  <TextField
                    label="Address" value={user.address} margin="normal" fullWidth
                    onChange={ev => this.setState({ user: { ...user, address: ev.target.value } })}
                  />
                </div>
                <div className="col-lg-6">
                  <TextField label="Join Date" value={user.join_date} disabled margin="normal" fullWidth type="time" />
                </div>
              </div>

              <div style={{ marginTop: '35px', marginBottom: '25px', textAlign: 'center' }}>
                <Button
                  variant="raised" color="secondary"
                  onClick={this.onClickSaveInfo}
                >
                  <SaveIcon style={{ marginRight: '5px' }} />
                  Save changes
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />


          <div className="col-lg-1" />
          <div className="col-lg-10">
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
              <div style={{ marginTop: '35px', marginBottom: '25px', textAlign: 'center' }}>
                <Button
                  variant="raised" color="secondary"
                  onClick={this.onClickChangePassword}
                  disabled={newPassword !== confirmPassword}
                >
                  <SaveIcon style={{ marginRight: '5px' }} />
                  Update Password
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    );
  }

}

export default Dashboard;
