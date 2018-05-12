import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField
} from 'react-admin';
import Icon from '@material-ui/icons/DirectionsBus';

const busStatus = ['Mới nguyên bản', 'Còn mới', 'Đã qua sử dụng', 'Sử dụng trong thời gian dài', 'Cũ', 'Quá cũ'];
const busStatusChoices = busStatus.map(name => ({ name }));

const BusFilter = props => (
  <Filter {...props}>
    <SelectInput
      label="Status" source="status" choices={busStatusChoices}
      optionText="name" optionValue="name" allowEmpty
    />
  </Filter>
);

export const BusList = (props) => {
  document.title = 'List Bus';
  return (
    <List title="Bus" {...props} filters={<BusFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ReferenceField label="Bus Type" source="bus_type_id" reference="busType">
          <TextField source="id" />
        </ReferenceField>
        <ChipField label="Registration" source="registration" />
        <NumberField label="Price (VND)" source="price" />
        <NumberField label="Miles" source="miles" />
        <NumberField label="Warranty Month" source="warranty_month" />
        <NumberField label="Warranty Miles" source="warranty_miles" />
        <ChipField label="Status" source="status" />
        <TextField label="Description" source="description" />
        <DateField label="Created" source="created_at" showTime />
        <DateField label="Last Update" source="updated_at" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const BusTitle = ({ record }) =>
  <span>Bus {record ? `${record.id}. ${record.registration}` : ''}</span>;

BusTitle.propTypes = { record: PropTypes.object };
BusTitle.defaultProps = { record: {} };

export const BusEdit = (props) => {
  document.title = 'Edit Bus';
  return (
    <Edit title={<BusTitle />} {...props}>
      <SimpleForm>
        <DisabledInput label="ID" source="id" />
        <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput label="Registration" source="registration" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Miles" source="miles" />
        <NumberInput label="Warranty Month" source="warranty_month" />
        <NumberInput label="Warranty Miles" source="warranty_miles" />
        <SelectInput
          label="Status" source="status" choices={busStatusChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <LongTextInput label="Description" source="description" />
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};

export const BusCreate = (props) => {
  document.title = 'Create Bus';
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput label="Bus Type" source="bus_type_id" reference="busType">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput label="Registration" source="registration" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Miles" source="miles" />
        <NumberInput label="Warranty Month" source="warranty_month" />
        <NumberInput label="Warranty Miles" source="warranty_miles" />
        <SelectInput
          label="Status" source="status" choices={busStatusChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <LongTextInput label="Description" source="description" />
      </SimpleForm>
    </Create>
  );
};

export const BusIcon = Icon;
