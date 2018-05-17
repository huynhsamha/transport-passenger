import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField
} from 'react-admin';
import { UrlField } from '../fields';
import Icon from '@material-ui/icons/LocationCity';


export const CityList = ({ permissions, ...props }) => {
  document.title = 'List City';
  return (
    <List title="City" {...props}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Code" source="code" />
        <NumberField label="Longitude" source="longitude" />
        <NumberField label="Latitude" source="latitude" />
        <UrlField label="Website" source="website" />
        <TextField label="Tel" source="tel_code" />
        <TextField label="Zip" source="zip_code" />
        <TextField label="Area code" source="area_code" />
        <ReferenceField label="Center" source="center_district_id" reference="district">
          <TextField source="id" />
        </ReferenceField>

        {['manager'].indexOf(permissions) > -1 && [<EditButton />,
          <DateField label="Created" source="created_at" showTime />,
          <DateField label="Last Update" source="updated_at" showTime />]}
      </Datagrid>
    </List>
  );
};


CityList.propTypes = { permissions: PropTypes.string };
CityList.defaultProps = { permissions: '' };


const CityTitle = ({ record }) =>
  <span>City {record ? `${record.id}. ${record.name} (${record.code})` : ''}</span>;

CityTitle.propTypes = { record: PropTypes.object };
CityTitle.defaultProps = { record: {} };

export const CityEdit = (props) => {
  document.title = 'Edit City';
  return (
    <Edit title={<CityTitle />} {...props}>
      <SimpleForm >
        <DisabledInput label="ID" source="id" />
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput label="Latitude" source="latitude" />
        <TextInput label="Website" source="website" />
        <TextInput label="Tel" source="tel_code" />
        <TextInput label="Zip" source="zip_code" />
        <TextInput label="Area code" source="area_code" />
        <NumberInput label="Center district" source="center_district_id" />
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};


export const CityCreate = (props) => {
  document.title = 'Create City';
  return (
    <Create title="Create City" {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput label="Latitude" source="latitude" />
        <TextInput label="Website" source="website" />
        <TextInput label="Tel" source="tel_code" />
        <TextInput label="Zip" source="zip_code" />
        <TextInput label="Area code" source="area_code" />
        <NumberInput label="Center district" source="center_district_id" />
      </SimpleForm>
    </Create>
  );
};

export const CityIcon = Icon;
