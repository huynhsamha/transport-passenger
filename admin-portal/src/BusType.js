import React from 'react';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter
} from 'react-admin';
import Icon from '@material-ui/icons/AirportShuttle';

export const BusTypeList = props => (
  <List title="Bus Type" {...props}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <TextField label="Brand" source="brand" />
      <TextField label="Model" source="model" />
      <NumberField label="Seats" source="seats" />
      <NumberField label="Fuel" source="capacity_fuel" />
      <NumberField label="Speed" source="speed" />
      <NumberField label="Length" source="length" />
      <NumberField label="Height" source="height" />
      <NumberField label="Mass (all)" source="mass_all" />
      <NumberField label="Mass (no-load)" source="mass_no_load" />
      <DateField label="Created" source="created_at" showTime />
      <DateField label="Last Update" source="updated_at" showTime />
      <EditButton />
    </Datagrid>
  </List>
);

const BusTypeTitle = ({ record }) =>
  <span>Bus Type {record ? `${record.id} ${record.brand} (${record.model})` : ''}</span>;

export const BusTypeEdit = props => (
  <Edit title={<BusTypeTitle />} {...props}>
    <SimpleForm>
      <DisabledInput label="ID" source="id" />
      <TextInput label="Brand" source="brand" />
      <TextInput label="Model" source="model" />
      <NumberInput label="Seats" source="seats" />
      <NumberInput label="Fuel" source="capacity_fuel" />
      <NumberInput label="Speed" source="speed" />
      <NumberInput label="Length" source="length" />
      <NumberInput label="Height" source="height" />
      <NumberInput label="Mass (all)" source="mass_all" />
      <NumberInput label="Mass (no-load)" source="mass_no_load" />
      <DisabledInput label="Created" source="created_at" />
      <DisabledInput label="Last Update" source="updated_at" />
    </SimpleForm>
  </Edit>
);


export const BusTypeCreate = props => (
  <Create title="Create Bus Type" {...props}>
    <SimpleForm>
      <TextInput label="Brand" source="brand" />
      <TextInput label="Model" source="model" />
      <NumberInput label="Seats" source="seats" />
      <NumberInput label="Fuel" source="capacity_fuel" />
      <NumberInput label="Speed" source="speed" />
      <NumberInput label="Length" source="length" />
      <NumberInput label="Height" source="height" />
      <NumberInput label="Mass (all)" source="mass_all" />
      <NumberInput label="Mass (no-load)" source="mass_no_load" />
    </SimpleForm>
  </Create>
);

export const BusTypeIcon = Icon;
