import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField,
  BooleanField, BooleanInput
} from 'react-admin';
import Icon from '@material-ui/icons/Subtitles';

const departmentType = ['Human Resource', 'Business', 'Financial', 'Shipping', 'Equipment'];
const departmentTypeChoices = departmentType.map(name => ({ name }));

const DepartmentFilter = props => (
  <Filter {...props}>
    <SelectInput
      label="Type" source="type" choices={departmentTypeChoices}
      optionText="name" optionValue="name" allowEmpty
    />
    <ReferenceInput label="Office" source="office_id" reference="office">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
  </Filter>
);

export const DepartmentList = (props) => {
  document.title = 'List Department';
  return (
    <List title="Department" {...props} filters={<DepartmentFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="Type" source="type" />
        <TextField label="Name" source="name" />
        <NumberField label="Manager" source="manager_id" />
        <ReferenceField label="Office" source="office_id" reference="office">
          <TextField source="name" />
        </ReferenceField>
        <DateField label="Created" source="created_at" showTime />
        <DateField label="Last Update" source="updated_at" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const DepartmentTitle = ({ record }) =>
  <span>Department {record ? `${record.id}. ${record.name} (${record.code})` : ''}</span>;

DepartmentTitle.propTypes = { record: PropTypes.object };
DepartmentTitle.defaultProps = { record: {} };

export const DepartmentEdit = (props) => {
  document.title = 'Edit Department';
  return (
    <Edit title={<DepartmentTitle />} {...props}>
      <SimpleForm >
        <DisabledInput label="ID" source="id" />
        <SelectInput
          label="Type" source="type" choices={departmentTypeChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <TextInput label="Name" source="name" />
        <NumberInput label="Manager" source="manager_id" />
        <ReferenceInput label="Office" source="office_id" reference="office">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};


export const DepartmentCreate = (props) => {
  document.title = 'Create Department';
  return (
    <Create title="Create Department" {...props}>
      <SimpleForm>
        <SelectInput
          label="Type" source="type" choices={departmentTypeChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <TextInput label="Name" source="name" />
        <NumberInput label="Manager" source="manager_id" />
        <ReferenceInput label="Office" source="office_id" reference="office">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const DepartmentIcon = Icon;

