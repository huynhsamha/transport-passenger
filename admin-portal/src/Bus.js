// in src/users.js
import React from 'react';
import { EditButton, Edit, SimpleForm, required, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, NumberInput, DateInput, List, Datagrid, EmailField, TextField, NumberField, BooleanField, DateField, ReferenceField } from 'admin-on-rest';

export const BusList = props => (
  <List title="Bus" {...props}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <TextField label="Bus Type" source="bus_type_id" />
      <NumberField label="Price" source="price" />
      <NumberField label="Miles" source="miles" />
      <NumberField label="Warranty Month" source="warranty_month" />
      <NumberField label="Warranty Miles" source="warranty_miles" />
      <NumberField label="Height" source="height" />
      <NumberField label="Status" source="status" />
      <NumberField label="Description" source="description" />
      <DateField label="Create" source="created_at" showTime />
      <DateField label="Last Update" source="updated_at" showTime />
      <TextField label="Registration" source="registration" />
      <EditButton />
    </Datagrid>
  </List>
);

const BusTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BusEdit = props => (
  <Edit title={<BusTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <NumberInput label="Bus Type" source="bus_type_id" />
      <NumberInput label="Price" source="price" />
      <NumberInput label="Miles" source="miles" />
      <NumberInput label="Warranty Month" source="warranty_month" />
      <NumberInput label="Warranty Miles" source="warranty_miles" />
      <NumberInput label="Height" source="height" />
      <TextInput label="Status" source="status" />
      <LongTextInput label="Description" source="description" />
      <DisabledInput label="Create" source="created_at" />
      <DisabledInput label="Last Update" source="updated_at" />
      <TextInput label="Registration" source="registration" />
    </SimpleForm>
  </Edit>
);

