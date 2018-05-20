import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField, ImageField, EmailField,
  DateInput, ReferenceArrayInput, SelectArrayInput, ReferenceManyField, SingleFieldList,
  Show, SimpleShowLayout
} from 'react-admin';
import Icon from '@material-ui/icons/LocalOffer';


export const TicketList = ({ permissions, ...props }) => {
  document.title = 'List Ticket';
  return (
    <List
      title="Ticket" {...props}
      {...(['seller'].indexOf(permissions) == -1 && { bulkActions: null })}
    >
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="Code" source="code" />
        <ReferenceField label="Transaction" source="transaction_id" reference="transaction">
          <TextField source="code" />
        </ReferenceField>
        <ReferenceField label="Trip" source="trip_id" reference="trip">
          <TextField source="code" />
        </ReferenceField>
        <NumberField label="Price" source="price_pay" />

        {['seller'].indexOf(permissions) > -1 && [
          <DateField label="Created" source="created_at" showTime />,
          <DateField label="Last Update" source="updated_at" showTime />,
          <EditButton />
        ]}
      </Datagrid>
    </List>
  );
};


TicketList.propTypes = { permissions: PropTypes.string };
TicketList.defaultProps = { permissions: '' };


const TicketTitle = ({ record }) =>
  <span>Ticket {record ? `${record.id}. ${record.code}` : ''}</span>;

TicketTitle.propTypes = { record: PropTypes.object };
TicketTitle.defaultProps = { record: {} };

export const TicketEdit = ({ permissions, ...props }) => {
  const canEdit = ['seller'].indexOf(permissions) > -1;
  if (canEdit) {
    document.title = 'Edit Ticket';
    return (
      <Edit title={<TicketTitle />} {...props}>
        <SimpleForm >
          <DisabledInput label="ID" source="id" />
          <DisabledInput label="Code" source="code" />
          <ReferenceInput label="Transaction" source="transaction_id" reference="transaction">
            <SelectInput optionText="code" optionValue="id" />
          </ReferenceInput>
          <ReferenceInput label="Trip" source="trip_id" reference="trip">
            <SelectInput optionText="code" optionValue="id" />
          </ReferenceInput>
          <NumberInput label="Price" source="price_pay" />
          <DisabledInput label="Created" source="created_at" />
          <DisabledInput label="Last Update" source="updated_at" />
        </SimpleForm>
      </Edit>
    );
  } else {
    document.title = 'Show Ticket';
    return (
      <Show title={<TicketTitle />} {...props} actions={null}>
        <SimpleShowLayout >
          <NumberField label="ID" source="id" />
          <TextField label="Code" source="code" />
          <ReferenceField label="Transaction" source="transaction_id" reference="transaction">
            <TextField source="code" />
          </ReferenceField>
          <ReferenceField label="Trip" source="trip_id" reference="trip">
            <TextField source="code" />
          </ReferenceField>
          <NumberField label="Price" source="price_pay" />
        </SimpleShowLayout>
      </Show>
    );
  }
};
TicketEdit.propTypes = { permissions: PropTypes.string };
TicketEdit.defaultProps = { permissions: '' };


export const TicketCreate = (props) => {
  document.title = 'Create Ticket';
  return (
    <Create title="Create Ticket" {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceInput label="Transaction" source="transaction_id" reference="transaction">
          <SelectInput optionText="code" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput label="Trip" source="trip_id" reference="trip">
          <SelectInput optionText="code" optionValue="id" />
        </ReferenceInput>
        <NumberInput label="Price" source="price_pay" />
      </SimpleForm>
    </Create>
  );
};

export const TicketIcon = Icon;
