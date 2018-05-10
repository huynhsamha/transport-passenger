import React from 'react';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter
} from 'react-admin';
import Icon from '@material-ui/icons/DirectionsBus';

const BusFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Bus Type" source="bus_type_id" reference="bus" allowEmpty>
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);

export const BusList = props => (
  <List title="Bus" {...props} filters={<BusFilter />}>
    <Datagrid>
      <NumberField label="ID" source="id" />
      <ReferenceField label="Bus Type" source="bus_type_id" reference="busType">
        <TextField source="id" />
      </ReferenceField>
      <NumberField label="Price" source="price" />
      <NumberField label="Miles" source="miles" />
      <NumberField label="Warranty Month" source="warranty_month" />
      <NumberField label="Warranty Miles" source="warranty_miles" />
      <NumberField label="Height" source="height" />
      <TextField label="Status" source="status" />
      <TextField label="Description" source="description" />
      <TextField label="Registration" source="registration" />
      <DateField label="Created" source="created_at" showTime />
      <DateField label="Last Update" source="updated_at" showTime />
      <EditButton />
    </Datagrid>
  </List>
);

const BusTitle = ({ record }) => <span>Loại xe {record ? `${record.id}` : ''}</span>;

export const BusEdit = props => (
  <Edit title={<BusTitle />} {...props}>
    <SimpleForm>
      <DisabledInput label="ID" source="id" />
      <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
        <SelectInput source="id" />
      </ReferenceInput>
      <NumberInput label="Price" source="price" />
      <NumberInput label="Miles" source="miles" />
      <NumberInput label="Warranty Month" source="warranty_month" />
      <NumberInput label="Warranty Miles" source="warranty_miles" />
      <NumberInput label="Height" source="height" />
      <TextInput label="Status" source="status" />
      <LongTextInput label="Description" source="description" />
      <TextInput label="Registration" source="registration" />
      <DisabledInput label="Created" source="created_at" />
      <DisabledInput label="Last Update" source="updated_at" />
    </SimpleForm>
  </Edit>
);

export const BusCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
        <SelectInput source="id" />
      </ReferenceInput>
      <NumberInput label="Price" source="price" />
      <NumberInput label="Miles" source="miles" />
      <NumberInput label="Warranty Month" source="warranty_month" />
      <NumberInput label="Warranty Miles" source="warranty_miles" />
      <NumberInput label="Height" source="height" />
      <TextInput label="Status" source="status" />
      <LongTextInput label="Description" source="description" />
      <TextInput label="Registration" source="registration" />
    </SimpleForm>
  </Create>
);

export const BusIcon = Icon;
