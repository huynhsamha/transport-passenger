import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField,
  BooleanField, BooleanInput
} from 'react-admin';
import Icon from '@material-ui/icons/Domain';

const officeBrand = ['Mercedes Benz', 'Toyota', 'Huyndai', 'Thaco'];
const officeBrandChoices = officeBrand.map(name => ({ name }));

const officeModel = ['A2', 'A3', 'B2', 'B3'];
const officeModelChoices = officeModel.map(name => ({ name }));

const OfficeFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="District" source="district_id" reference="district">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <BooleanInput label="Headquater" source="is_headquater" />
  </Filter>
);

export const OfficeList = (props) => {
  document.title = 'List Office';
  return (
    <List title="Office" {...props} filters={<OfficeFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ChipField label="Code" source="code" />
        <TextField label="Address" source="address" />
        <NumberField label="Longitude" source="longitude" />
        <NumberField label="Latitude" source="latitude" />
        <BooleanField label="Headquater" source="is_headquater" />
        <ReferenceField label="District" source="district_id" reference="district">
          <TextField source="name" />
        </ReferenceField>
        <ChipField label="Hotline" source="hotline" />
        <DateField label="Created" source="created_at" showTime />
        <DateField label="Last Update" source="updated_at" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const OfficeTitle = ({ record }) =>
  <span>Office {record ? `${record.id}. ${record.name} (${record.code})` : ''}</span>;

OfficeTitle.propTypes = { record: PropTypes.object };
OfficeTitle.defaultProps = { record: {} };

export const OfficeEdit = (props) => {
  document.title = 'Edit Office';
  return (
    <Edit title={<OfficeTitle />} {...props}>
      <SimpleForm >
        <DisabledInput label="ID" source="id" />
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <TextInput label="Address" source="address" />
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput label="Latitude" source="latitude" />
        <ReferenceInput label="District" source="district_id" reference="district">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <BooleanInput label="Headquater" source="is_headquater" />
        <TextInput label="Hotline" source="hotline" />
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};


export const OfficeCreate = (props) => {
  document.title = 'Create Office';
  return (
    <Create title="Create Office" {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <TextInput label="Address" source="address" />
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput label="Latitude" source="latitude" />
        <ReferenceInput label="District" source="district_id" reference="district">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <BooleanInput label="Headquater" source="is_headquater" />
        <TextInput label="Hotline" source="hotline" />
      </SimpleForm>
    </Create>
  );
};

export const OfficeIcon = Icon;

