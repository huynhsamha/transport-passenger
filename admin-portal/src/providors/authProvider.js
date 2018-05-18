import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';

export default (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    const request = new Request('/api/auth/signIn/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    return fetch(request)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        if (response.status === 401) {
          throw new Error('Wrong password');
        }
        if (response.status === 500) {
          throw new Error('Internal Server Error');
        }
        return response.json();
      })
      .then(({ user, token }) => {
        console.log('Store token on AUTH_LOGIN');
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return Promise.resolve();
      });
  }

  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    console.log('Remove Token on AUTH_LOGOUT');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Promise.resolve();
  }

  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      console.log('Remove Token on AUTH_ERROR');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return Promise.reject();
    }
    return Promise.resolve();
  }

  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') && localStorage.getItem('user')
      ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { role } = user; // 'manager', 'driver', 'assistant', 'seller'
    return role ? Promise.resolve(role) : Promise.reject();
  }

  return Promise.reject(new Error('Unknown method'));
};
