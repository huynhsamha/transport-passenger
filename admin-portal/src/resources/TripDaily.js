import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField,
  Show, SimpleShowLayout
} from 'react-admin';
import Icon from '@material-ui/icons/Room';

const tripDailyBrand = ['Mercedes Benz', 'Toyota', 'Huyndai', 'Thaco'];
const tripDailyBrandChoices = tripDailyBrand.map(name => ({ name }));

const tripDailyModel = ['A2', 'A3', 'B2', 'B3'];
const tripDailyModelChoices = tripDailyModel.map(name => ({ name }));

const TripDailyFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
      <SelectInput optionText="id" optionValue="id" />
    </ReferenceInput>
  </Filter>
);

export const TripDailyList = ({ permissions, ...props }) => {
  document.title = 'List Trip Daily';
  return (
    <List
      title="Trip Daily" {...props} filters={<TripDailyFilter />}
      {...(['manager'].indexOf(permissions) == -1 && { bulkActions: null })}
    >
      <Datagrid>
        <NumberField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ChipField label="Code" source="code" />
        <TextField label="Depart Time" source="depart_time" />
        <NumberField label="Duration (minutes)" source="duration" />
        <TextField label="Arrive Time" source="arrive_time" />
        <NumberField label="Price (VND)" source="price" />
        <NumberField label="Distance (m)" source="distance" />
        <TextField label="Hotline" source="hotline" />
        <ReferenceField label="Bus Type" source="bus_type_id" reference="busType">
          <TextField source="id" />
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

TripDailyList.propTypes = { permissions: PropTypes.string };
TripDailyList.defaultProps = { permissions: '' };

const TripDailyTitle = ({ record }) =>
  <span>Trip Daily {record ? `${record.id}. ${record.name}` : ''}</span>;

TripDailyTitle.propTypes = { record: PropTypes.object };
TripDailyTitle.defaultProps = { record: {} };

export const TripDailyEdit = ({ permissions, ...props }) => {
  const canEdit = ['manager'].indexOf(permissions) > -1;
  if (canEdit) {
    document.title = 'Edit Trip Daily';
    return (
      <Edit title={<TripDailyTitle />} {...props}>
        <SimpleForm >
          <DisabledInput label="ID" source="id" />
          <TextInput label="Name" source="name" />
          <TextInput label="Code" source="code" />
          <TextInput label="Depart Time" source="depart_time" />
          <NumberInput label="Duration (minutes)" source="duration" />
          <TextInput label="Arrive Time" source="arrive_time" />
          <NumberInput label="Price (VND)" source="price" />
          <NumberInput label="Distance (m)" source="distance" />
          <TextInput label="Hotline" source="hotline" />
          <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
            <SelectInput optionText="id" optionValue="id" />
          </ReferenceInput>
          <DisabledInput label="Created" source="created_at" />
          <DisabledInput label="Last Update" source="updated_at" />
        </SimpleForm>
      </Edit>
    );
  } else {
    document.title = 'Show Trip Daily';
    return (
      <Show title={<TripDailyTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <TextField label="Name" source="name" />
          <TextField label="Code" source="code" />
          <TextField label="Depart Time" source="depart_time" />
          <NumberField label="Duration (minutes)" source="duration" />
          <TextField label="Arrive Time" source="arrive_time" />
          <NumberField label="Price (VND)" source="price" />
          <NumberField label="Distance (m)" source="distance" />
          <TextField label="Hotline" source="hotline" />
          <ReferenceField label="Bus Type" source="bus_type_id" reference="busType">
            <TextField source="id" />
          </ReferenceField>
        </SimpleShowLayout>
      </Show>
    );
  }
};

TripDailyEdit.propTypes = { permissions: PropTypes.string };
TripDailyEdit.defaultProps = { permissions: '' };


export const TripDailyCreate = (props) => {
  document.title = 'Create Trip Daily';
  return (
    <Create title="Create Trip Daily" {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <TextInput label="Depart Time" source="depart_time" />
        <NumberInput label="Duration (minutes)" source="duration" />
        <TextInput label="Arrive Time" source="arrive_time" />
        <NumberInput label="Price (VND)" source="price" />
        <NumberInput label="Distance (m)" source="distance" />
        <TextInput label="Hotline" source="hotline" />
        <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
          <SelectInput optionText="id" optionValue="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const TripDailyIcon = Icon;
