import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { ViewTitle } from 'react-admin';

export default () => (
  <Card>
    <ViewTitle title="Oops! Page Not Found" />
    <CardContent>
      <h1>Sorry! We can&apos;t seem to find the page you&apos;re looking for.</h1>
    </CardContent>
  </Card>
);
