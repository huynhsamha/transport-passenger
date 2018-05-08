// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const UserList = props => (
  <List title="All employee" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="ssn" />
    </Datagrid>
  </List>
);

export default UserList;
