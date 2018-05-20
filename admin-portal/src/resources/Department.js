import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField,
  BooleanField, BooleanInput, Show, SimpleShowLayout
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

export const DepartmentList = ({ permissions, ...props }) => {
  document.title = 'List Department';
  return (
    <List
      title="Department" {...props} filters={<DepartmentFilter />}
      {...(['manager'].indexOf(permissions) == -1 && { bulkActions: null })}
    >
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="Type" source="type" />
        <TextField label="Name" source="name" />
        <NumberField label="Manager" source="manager_id" />
        <ReferenceField label="Office" source="office_id" reference="office">
          <TextField source="name" />
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


DepartmentList.propTypes = { permissions: PropTypes.string };
DepartmentList.defaultProps = { permissions: '' };


const DepartmentTitle = ({ record }) =>
  <span>Department {record ? `${record.id}. ${record.type}` : ''}</span>;

DepartmentTitle.propTypes = { record: PropTypes.object };
DepartmentTitle.defaultProps = { record: {} };

export const DepartmentEdit = ({ permissions, ...props }) => {
  const canEdit = ['manager'].indexOf(permissions) > -1;
  if (canEdit) {
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
  } else {
    document.title = 'Show Department';
    return (
      <Show title={<DepartmentTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <TextField label="Type" source="type" />
          <TextField label="Name" source="name" />
          <NumberField label="Manager" source="manager_id" />
          <ReferenceField label="Office" source="office_id" reference="office">
            <TextField source="name" />
          </ReferenceField>
        </SimpleShowLayout>
      </Show>
    );
  }
};

DepartmentEdit.propTypes = { permissions: PropTypes.string };
DepartmentEdit.defaultProps = { permissions: '' };


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

