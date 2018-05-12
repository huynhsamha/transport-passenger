import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField
} from 'react-admin';
import Icon from '@material-ui/icons/AirportShuttle';

export const OfficeList = props => (
  <List title="Offices" {...props}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <TextField label="Name" source="name" />
      <ChipField label="Code" source="code" />
      <TextField label="Address" source="address" />
      <NumberField label="Longitude" source="longitude" />
      <NumberField label="Latitude" source="latitude" />
      <BooleanField label="HQ" source="is_headquater" />
      <NumberField label="District" source="district_id" />
      <TextField label="Hotline" source="hotline" />
      <DateField label="Create" source="created_at" />
      <DateField label="Update" source="updated_at" />
    </Datagrid>
  </List>
);

export default OfficeList;
