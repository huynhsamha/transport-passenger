import React from 'react';
import { Route } from 'react-router-dom';

import ForgotPassword from './ForgotPassword/ForgotPassword.jsx';

export default [
  <Route exact path="/forgot-password" component={ForgotPassword} />
];
