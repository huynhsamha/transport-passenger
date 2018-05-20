import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField,
  BooleanField, BooleanInput, Show, SimpleShowLayout
} from 'react-admin';
import Icon from '@material-ui/icons/Domain';

const OfficeFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="District" source="district_id" reference="district">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <BooleanInput label="Headquater" source="is_headquater" />
  </Filter>
);

export const OfficeList = ({ permissions, ...props }) => {
  document.title = 'List Office';
  return (
    <List
      title="Office" {...props} filters={<OfficeFilter />}
      {...(['manager'].indexOf(permissions) == -1 && { bulkActions: null })}
    >
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

        {['manager'].indexOf(permissions) > -1 && [
          <DateField label="Created" source="created_at" showTime />,
          <DateField label="Last Update" source="updated_at" showTime />,
          <EditButton />
        ]}
      </Datagrid>
    </List>
  );
};


OfficeList.propTypes = { permissions: PropTypes.string };
OfficeList.defaultProps = { permissions: '' };


const OfficeTitle = ({ record }) =>
  <span>Office {record ? `${record.id}. ${record.name} (${record.code})` : ''}</span>;

OfficeTitle.propTypes = { record: PropTypes.object };
OfficeTitle.defaultProps = { record: {} };

export const OfficeEdit = ({ permissions, ...props }) => {
  const canEdit = ['manager'].indexOf(permissions) > -1;
  if (canEdit) {
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
  } else {
    document.title = 'Show Office';
    return (
      <Show title={<OfficeTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <TextField label="Name" source="name" />
          <TextField label="Code" source="code" />
          <TextField label="Address" source="address" />
          <NumberField label="Longitude" source="longitude" />
          <NumberField label="Latitude" source="latitude" />
          <BooleanField label="Headquater" source="is_headquater" />
          <ReferenceField label="District" source="district_id" reference="district">
            <TextField source="name" />
          </ReferenceField>
          <TextField label="Hotline" source="hotline" />
        </SimpleShowLayout>
      </Show>
    );
  }
};

OfficeEdit.propTypes = { permissions: PropTypes.string };
OfficeEdit.defaultProps = { permissions: '' };

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

