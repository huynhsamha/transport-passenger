import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField, ImageField, EmailField,
  DateInput, Show, SimpleShowLayout
} from 'react-admin';
import { AvatarField } from '../fields';
import Icon from '@material-ui/icons/AccountBox';


const employeeRole = ['manager', 'driver', 'seller', 'assistant'];
const employeeRoleChoices = employeeRole.map(value => ({ value, name: value.charAt(0).toUpperCase() + value.slice(1) }));

const EmployeeFilter = props => (
  <Filter {...props}>
    <SelectInput
      label="Role" source="role" choices={employeeRoleChoices}
      optionText="name" optionValue="value" allowEmpty
    />
    <ReferenceInput label="Department" source="department_id" reference="department">
      <SelectInput optionText="id" optionValue="id" />
    </ReferenceInput>
  </Filter>
);

export const EmployeeList = ({ permissions, ...props }) => {
  document.title = 'List Employee';
  return (
    <List title="Employee" {...props} filters={<EmployeeFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="SSN" source="ssn" />
        <AvatarField label="Avatar" source="photo_url" dimens={50} />
        <ChipField label="Role" source="role" />
        <TextField label="First Name" source="first_name" />
        <TextField label="Last Name" source="last_name" />
        <TextField label="Username" source="username" />
        <EmailField label="Email" source="email" />
        <ChipField label="Tel" source="tel" />

        {['manager'].indexOf(permissions) > -1 && [
          <TextField label="Bank Account" source="bank_account" />,
          <NumberField label="Salary" source="salary" />
        ]}

        <TextField label="Address" source="address" />
        <DateField label="Join Date" source="join_date" showTime />
        <ReferenceField source="supervisor_id" reference="employee">
          <TextField source="username" />
        </ReferenceField>
        <ReferenceField source="department_id" reference="department">
          <TextField source="type" />
        </ReferenceField>

        {['manager'].indexOf(permissions) > -1 && [
          <DateField label="Created" source="created_at" showTime />,
          <DateField label="Last Update" source="updated_at" showTime />,
          <EditButton />
        ]}
      </Datagrid>
    </List>
  );
};

EmployeeList.propTypes = { permissions: PropTypes.string };
EmployeeList.defaultProps = { permissions: '' };

const EmployeeTitle = ({ record }) =>
  <span>Employee {record ? `${record.id}. ${record.first_name} ${record.last_name}` : ''}</span>;

EmployeeTitle.propTypes = { record: PropTypes.object };
EmployeeTitle.defaultProps = { record: {} };

export const EmployeeEdit = ({ permissions, ...props }) => {
  const canEdit = ['manager'].indexOf(permissions) > -1;
  if (canEdit) {
    document.title = 'Edit Employee';
    return (
      <Edit title={<EmployeeTitle />} {...props}>
        <SimpleForm >
          <DisabledInput label="ID" source="id" />
          <DisabledInput label="SSN" source="ssn" />
          <SelectInput
            label="Role" source="role" choices={employeeRoleChoices}
            optionText="name" optionValue="value" allowEmpty
          />
          <AvatarField label="Avatar" source="photo_url" dimens={200} />
          <TextInput label="First Name" source="first_name" />
          <TextInput label="Last Name" source="last_name" />
          <TextInput label="Username" source="username" />
          <TextInput label="Email" source="email" />
          <TextInput label="Tel" source="tel" />
          <TextInput label="Bank Account" source="bank_account" />
          <NumberInput label="Salary" source="salary" />
          <TextInput label="Address" source="address" />
          <DateInput label="Join Date" source="join_date" />
          <ReferenceInput source="supervisor_id" reference="employee">
            <SelectInput optionText="username" optionValue="id" />
          </ReferenceInput>
          <ReferenceInput source="department_id" reference="department">
            <SelectInput optionText="id" optionValue="id" />
          </ReferenceInput>
          <DisabledInput label="Created" source="created_at" />
          <DisabledInput label="Last Update" source="updated_at" />
        </SimpleForm>
      </Edit>
    );
  } else {
    document.title = 'Show Employee';
    return (
      <Show title={<EmployeeTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <TextField label="SSN" source="ssn" />
          <AvatarField label="Avatar" source="photo_url" dimens={50} />
          <TextField label="Role" source="role" />
          <TextField label="First Name" source="first_name" />
          <TextField label="Last Name" source="last_name" />
          <TextField label="Username" source="username" />
          <EmailField label="Email" source="email" />
          <TextField label="Tel" source="tel" />
          <TextField label="Bank Account" source="bank_account" />
          <NumberField label="Salary" source="salary" />
          <TextField label="Address" source="address" />
          <DateField label="Join Date" source="join_date" showTime />
          <ReferenceField source="supervisor_id" reference="employee">
            <TextField source="username" />
          </ReferenceField>
          <ReferenceField source="department_id" reference="department">
            <TextField source="type" />
          </ReferenceField>
        </SimpleShowLayout>
      </Show>
    );
  }
};
EmployeeEdit.propTypes = { permissions: PropTypes.string };
EmployeeEdit.defaultProps = { permissions: '' };


export const EmployeeCreate = (props) => {
  document.title = 'Create Employee';
  return (
    <Create title="Create Employee" {...props}>
      <SimpleForm>
        <TextInput label="SSN" source="ssn" />
        <SelectInput
          label="Role" source="role" choices={employeeRoleChoices}
          optionText="name" optionValue="value" allowEmpty
        />
        <TextInput label="Avatar Url" source="photo_url" />
        <TextInput label="First Name" source="first_name" />
        <TextInput label="Last Name" source="last_name" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" />
        <TextInput label="Tel" source="tel" />
        <TextInput label="Bank Account" source="bank_account" />
        <NumberInput label="Salary" source="salary" />
        <TextInput label="Address" source="address" />
        <DateInput label="Join Date" source="join_date" />
        <ReferenceInput source="supervisor_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput source="department_id" reference="department">
          <SelectInput optionText="id" optionValue="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const EmployeeIcon = Icon;
