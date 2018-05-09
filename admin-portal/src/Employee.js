// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField, NumberField, ChipField, ImageField, DateField } from 'admin-on-rest';
import { Chip } from 'material-ui';

export const EmployeeList = props => (
  <List title="Employees" {...props}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <TextField label="SSN" source="ssn" />
      <TextField label="Role" source="role" />
      <ImageField label="Image" source="photo_url" />      
      <TextField label="First Name" source="first_name" />
      <TextField label="Last Name" source="last_name" />
      <TextField label="Username" source="username" />
      <EmailField label="Email" source="email" />
      <TextField label="Tel" source="tel" />
      <TextField label="Bank Account" source="bank_account" />
      <NumberField label="Salary" source="salary" />
      <TextField label="Address" source="address" />
      <DateField label="Join Date" source="join_date" />
      <ChipField label="Supervisor Id" source="supervisor_id" />
      <ChipField label="Department Id" source="department_id" />
      <DateField label="Create" source="created_at" />
      <DateField label="Update" source="updated_at" />      
    </Datagrid>
  </List>
);
export default EmployeeList;
