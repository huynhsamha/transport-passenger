// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const CommentList = props => (
  <List title="Comments" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="body" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
