import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField, ImageField, EmailField,
  DateInput, Show, SimpleShowLayout
} from 'react-admin';
import Icon from '@material-ui/icons/SupervisorAccount';

export const CustomerList = ({ permissions, ...props }) => {
  document.title = 'List Customer';
  return (
    <List title="Customer" {...props}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="SSN" source="ssn" />
        <TextField label="First Name" source="first_name" />
        <TextField label="Last Name" source="last_name" />
        <TextField label="Tel" source="tel" />
        <TextField label="Address" source="address" />
        <TextField label="Feedback" source="feed_back" />

        {['seller'].indexOf(permissions) > -1 && [
          <DateField label="Created" source="created_at" showTime />,
          <DateField label="Last Update" source="updated_at" showTime />,
          <EditButton />
        ]}
      </Datagrid>
    </List>
  );
};


CustomerList.propTypes = { permissions: PropTypes.string };
CustomerList.defaultProps = { permissions: '' };


const CustomerTitle = ({ record }) =>
  <span>Customer {record ? `${record.id}. ${record.first_name} ${record.last_name}` : ''}</span>;

CustomerTitle.propTypes = { record: PropTypes.object };
CustomerTitle.defaultProps = { record: {} };

export const CustomerEdit = ({ permissions, ...props }) => {
  const canEdit = ['seller'].indexOf(permissions) > -1;
  if (canEdit) {
    document.title = 'Edit Customer';
    return (
      <Edit title={<CustomerTitle />} {...props}>
        <SimpleForm >
          <DisabledInput label="ID" source="id" />
          <DisabledInput label="SSN" source="ssn" />
          <TextInput label="First Name" source="first_name" />
          <TextInput label="Last Name" source="last_name" />
          <TextInput label="Tel" source="tel" />
          <TextInput label="Address" source="address" />
          <DisabledInput label="Feedback" source="feed_back" />
          <DisabledInput label="Created" source="created_at" />
          <DisabledInput label="Last Update" source="updated_at" />
        </SimpleForm>
      </Edit>
    );
  } else {
    document.title = 'Show Customer';
    return (
      <Show title={<CustomerTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <TextField label="SSN" source="ssn" />
          <TextField label="First Name" source="first_name" />
          <TextField label="Last Name" source="last_name" />
          <TextField label="Tel" source="tel" />
          <TextField label="Address" source="address" />
          <TextField label="Feedback" source="feed_back" />
        </SimpleShowLayout>
      </Show>
    );
  }
};

CustomerEdit.propTypes = { permissions: PropTypes.string };
CustomerEdit.defaultProps = { permissions: '' };

export const CustomerCreate = (props) => {
  document.title = 'Create Customer';
  return (
    <Create title="Create Customer" {...props}>
      <SimpleForm>
        <TextInput label="SSN" source="ssn" />
        <TextInput label="First Name" source="first_name" />
        <TextInput label="Last Name" source="last_name" />
        <TextInput label="Tel" source="tel" />
        <TextInput label="Address" source="address" />
        <LongTextInput label="Feedback" source="feed_back" />
      </SimpleForm>
    </Create>
  );
};

export const CustomerIcon = Icon;
