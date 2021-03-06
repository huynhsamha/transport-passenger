import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField, BooleanField,
  BooleanInput, DateInput, Show, SimpleShowLayout
} from 'react-admin';
import Icon from '@material-ui/icons/Schedule';

const TripFilter = props => (
  <Filter {...props}>
    <BooleanInput
      label="Complete" source="is_complete"
    />
  </Filter>
);

export const TripList = ({ permissions, ...props }) => {
  document.title = 'List Trip';
  return (
    <List
      title="Trip" {...props} filters={<TripFilter />}
      {...(['manager'].indexOf(permissions) == -1 && { bulkActions: null })}
    >
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

        {['manager'].indexOf(permissions) > -1 && [
          <DateField label="Created" source="created_at" showTime />,
          <DateField label="Last Update" source="updated_at" showTime />,
          <EditButton />
        ]}
      </Datagrid>
    </List>
  );
};

TripList.propTypes = { permissions: PropTypes.string };
TripList.defaultProps = { permissions: '' };

const TripTitle = ({ record }) =>
  <span>Trip {record ? `${record.id}. ${record.code}` : ''}</span>;

TripTitle.propTypes = { record: PropTypes.object };
TripTitle.defaultProps = { record: {} };

export const TripEdit = ({ permissions, ...props }) => {
  const canEdit = ['manager'].indexOf(permissions) > -1;
  if (canEdit) {
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
  } else {
    document.title = 'Show Trip';
    return (
      <Show title={<TripTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <ReferenceField label="Trip Daily" source="trip_daily_id" reference="tripDaily">
            <TextField source="name" />
          </ReferenceField>
          <TextField label="Code" source="code" />
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
        </SimpleShowLayout>
      </Show>
    );
  }
};

TripEdit.propTypes = { permissions: PropTypes.string };
TripEdit.defaultProps = { permissions: '' };

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
