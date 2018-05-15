import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField
} from 'react-admin';
import Icon from '@material-ui/icons/Subway';

const busTypeBrand = ['Mercedes Benz', 'Toyota', 'Huyndai', 'Thaco'];
const busTypeBrandChoices = busTypeBrand.map(name => ({ name }));

const busTypeModel = ['A2', 'A3', 'B2', 'B3'];
const busTypeModelChoices = busTypeModel.map(name => ({ name }));

const BusTypeFilter = props => (
  <Filter {...props}>
    <SelectInput
      label="Brand" source="brand" choices={busTypeBrandChoices}
      optionText="name" optionValue="name" allowEmpty
    />
    <SelectInput
      label="Model" source="model" choices={busTypeModelChoices}
      optionText="name" optionValue="name" allowEmpty
    />
  </Filter>
);

export const BusTypeList = (props) => {
  document.title = 'List Bus Type';
  return (
    <List title="Bus Type" {...props} filters={<BusTypeFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="Brand" source="brand" />
        <ChipField label="Model" source="model" />
        <NumberField label="Seats" source="seats" />
        <NumberField label="Fuel (m^3)" source="capacity_fuel" />
        <NumberField label="Speed (km/h)" source="speed" />
        <NumberField label="Length (m)" source="length" />
        <NumberField label="Height (m)" source="height" />
        <NumberField label="Width (m)" source="width" />
        <NumberField label="Mass (all) (kg)" source="mass_all" />
        <NumberField label="Mass (no-load) (kg)" source="mass_no_load" />
        <DateField label="Created" source="created_at" showTime />
        <DateField label="Last Update" source="updated_at" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const BusTypeTitle = ({ record }) =>
  <span>Bus Type {record ? `${record.id}. ${record.brand} (${record.model})` : ''}</span>;

BusTypeTitle.propTypes = { record: PropTypes.object };
BusTypeTitle.defaultProps = { record: {} };

export const BusTypeEdit = (props) => {
  document.title = 'Edit Bus Type';
  return (
    <Edit title={<BusTypeTitle />} {...props}>
      <SimpleForm >
        <DisabledInput label="ID" source="id" />
        <SelectInput
          label="Brand" source="brand" choices={busTypeBrandChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <SelectInput
          label="Model" source="model" choices={busTypeModelChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <NumberInput label="Seats" source="seats" />
        <NumberInput label="Fuel (m^3)" source="capacity_fuel" />
        <NumberInput label="Speed (km/h)" source="speed" />
        <NumberInput label="Length (m)" source="length" />
        <NumberInput label="Height (m)" source="height" />
        <NumberInput label="Width (m)" source="width" />
        <NumberInput label="Mass (all) (kg)" source="mass_all" />
        <NumberInput label="Mass (no-load) (kg)" source="mass_no_load" />
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};


export const BusTypeCreate = (props) => {
  document.title = 'Create Bus Type';
  return (
    <Create title="Create Bus Type" {...props}>
      <SimpleForm>
        <SelectInput
          label="Brand" source="brand" choices={busTypeBrandChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <SelectInput
          label="Model" source="model" choices={busTypeModelChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <NumberInput label="Seats" source="seats" />
        <NumberInput label="Fuel (m^3)" source="capacity_fuel" />
        <NumberInput label="Speed (km/h)" source="speed" />
        <NumberInput label="Length (m)" source="length" />
        <NumberInput label="Height (m)" source="height" />
        <NumberInput label="Width (m)" source="width" />
        <NumberInput label="Mass (all) (kg)" source="mass_all" />
        <NumberInput label="Mass (no-load) (kg)" source="mass_no_load" />
      </SimpleForm>
    </Create>
  );
};

export const BusTypeIcon = Icon;
