// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField, NumberField, BooleanField, DateField } from 'admin-on-rest';

export const BusTypeList = props => (
  <List title="Bus Type" {...props}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <TextField label="Brand" source="brand" />
      <TextField label="Model" source="model" />
      <NumberField label="Seat" source="seat" />
      <NumberField label="Capacity Fuel" source="capacity_fuel" />
      <NumberField label="Speed" source="speed" />
      <NumberField label="Length" source="length" />
      <NumberField label="Height" source="height" />
      <NumberField label="Mass all" source="mass_all" />
      <NumberField label="Mass no load" source="mass_no_load" />
      <DateField label="Create" source="created_at" showTime />
      <DateField label="Last Update" source="updated_at" showTime />
    </Datagrid>
  </List>
);

export default BusTypeList;
