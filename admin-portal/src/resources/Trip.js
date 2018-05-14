import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField, BooleanField,
  BooleanInput, DateInput
} from 'react-admin';
import Icon from '@material-ui/icons/Schedule';

const TripFilter = props => (
  <Filter {...props} />
);

export const TripList = (props) => {
  document.title = 'List Trip';
  return (
    <List title="Trip" {...props} filters={<TripFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ReferenceField label="Trip Daily" source="trip_daily_id" reference="tripDaily">
          <TextField source="name" />
        </ReferenceField>
        <ChipField label="Code" source="code" />
        <DateField label="Depart Date" source="depart_date" showTime />
        <BooleanField label="Complete" source="is_complete" />
        <ReferenceField label="Bus" source="bus_id" reference="bus">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField label="Driver" source="driver_id" reference="employee">
          <TextField source="username" />
        </ReferenceField>
        <ReferenceField label="Assistant" source="assistant_id" reference="employee">
          <TextField source="username" />
        </ReferenceField>
        <DateField label="Created" source="created_at" showTime />
        <DateField label="Last Update" source="updated_at" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const TripTitle = ({ record }) =>
  <span>Trip {record ? `${record.id}. ${record.code}` : ''}</span>;

TripTitle.propTypes = { record: PropTypes.object };
TripTitle.defaultProps = { record: {} };

export const TripEdit = (props) => {
  document.title = 'Edit Trip';
  return (
    <Edit title={<TripTitle />} {...props}>
      <SimpleForm>
        <DisabledInput label="ID" source="id" />
        <ReferenceInput label="Trip Daily" source="trip_daily_id" reference="tripDaily">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <DateInput label="Depart Date" source="depart_date" />
        <BooleanInput label="Complete" source="is_complete" />
        <ReferenceInput label="Bus" source="bus_id" reference="bus">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput label="Driver" source="driver_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput label="Assistant" source="assistant_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};

export const TripCreate = (props) => {
  document.title = 'Create Trip';
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput label="Trip Daily" source="trip_daily_id" reference="tripDaily">
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <DateInput label="Depart Date" source="depart_date" />
        <BooleanInput label="Complete" source="is_complete" />
        <ReferenceInput label="Bus" source="bus_id" reference="bus">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput label="Driver" source="driver_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput label="Assistant" source="assistant_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const TripIcon = Icon;
