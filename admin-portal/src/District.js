// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField, NumberField, ChipField, ImageField, DateField, UrlField } from 'admin-on-rest';
import { Chip } from 'material-ui';

export const DistrictList = props => (
  <List title="Districts" {...props}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <TextField label="Name" source="name" />
      <TextField label="Code" source="code" />
      <NumberField label="Longitude" source="longitude" />
      <NumberField label="Latitude" source="latitude" />
      <UrlField label="Website" source="website" />      
      <TextField label="Tel" source="tel" />
      <NumberField label="City" source="city_id"/>
      <DateField label="Create" source="created_at" />
      <DateField label="Update" source="updated_at" />      
    </Datagrid>
  </List>
);

export default DistrictList;
