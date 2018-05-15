import React from 'react';
import PropTypes from 'prop-types';
import {
  EditButton, Edit, SimpleForm, DisabledInput,
  TextInput, LongTextInput, NumberInput, List, Datagrid,
  TextField, NumberField, DateField, Create, ReferenceField,
  ReferenceInput, SelectInput, Filter, ChipField, ImageField, EmailField,
  DateInput, ReferenceArrayInput, SelectArrayInput, ReferenceManyField, SingleFieldList
} from 'react-admin';
import Icon from '@material-ui/icons/SwapVerticalCircle';

const paymentMethods = ['Cash', 'Visa', 'Master Card', 'PayPal', 'Bitcoin'];
const statuses = ['Approving', 'Processing', 'Complete'];
const statusChoices = statuses.map(name => ({ name }));
const paymentMethodChoices = paymentMethods.map(name => ({ name }));


const TransactionFilter = props => (
  <Filter {...props}>
    <SelectInput
      label="Status" source="status" choices={statusChoices}
      optionText="name" optionValue="name" allowEmpty
    />
    <SelectInput
      label="Payment Method" source="payment_method" choices={paymentMethodChoices}
      optionText="name" optionValue="name" allowEmpty
    />
    {/* <ReferenceArrayInput label="Seller" source="seller_id" reference="employee">
      <SelectArrayInput optionText="username" optionValue="id" />
    </ReferenceArrayInput> */}
    <ReferenceInput label="Seller" source="seller_id" reference="employee">
      <SelectInput optionText="username" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput label="Customer" source="customer_id" reference="customer">
      <SelectInput optionText="id" optionValue="id" />
    </ReferenceInput>
  </Filter>
);

export const TransactionList = (props) => {
  document.title = 'List Transaction';
  return (
    <List title="Transaction" {...props} filters={<TransactionFilter />}>
      <Datagrid>
        <NumberField label="ID" source="id" />
        <ChipField label="Code" source="code" />
        <ChipField label="Payment Method" source="payment_method" />
        <ChipField label="Status" source="status" />
        <ReferenceField label="Seller" source="seller_id" reference="employee">
          <TextField source="username" />
        </ReferenceField>
        <ReferenceField label="Customer" source="customer_id" reference="customer">
          <TextField source="id" />
        </ReferenceField>
        <NumberField label="Price" source="total_price" />
        <DateField label="Time" source="timestamp" showTime />
        <DateField label="Created" source="created_at" showTime />
        <DateField label="Last Update" source="updated_at" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const TransactionTitle = ({ record }) =>
  <span>Transaction {record ? `${record.id}. ${record.code}` : ''}</span>;

TransactionTitle.propTypes = { record: PropTypes.object };
TransactionTitle.defaultProps = { record: {} };

export const TransactionEdit = (props) => {
  document.title = 'Edit Transaction';
  return (
    <Edit title={<TransactionTitle />} {...props}>
      <SimpleForm >
        <DisabledInput label="ID" source="id" />
        <DisabledInput label="Code" source="code" />
        <SelectInput
          label="Status" source="status" choices={statusChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <SelectInput
          label="Payment Method" source="payment_method" choices={paymentMethodChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <ReferenceInput source="seller_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput source="customer_id" reference="customer">
          <SelectInput optionText="id" optionValue="id" />
        </ReferenceInput>
        <DisabledInput label="Price" source="total_price" />
        <DisabledInput label="Time" source="timestamp" />
        <DisabledInput label="Created" source="created_at" />
        <DisabledInput label="Last Update" source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};


export const TransactionCreate = (props) => {
  document.title = 'Create Transaction';
  return (
    <Create title="Create Transaction" {...props}>
      <SimpleForm>
        <DisabledInput label="Code" source="code" />
        <SelectInput
          label="Status" source="status" choices={statusChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <SelectInput
          label="Payment Method" source="payment_method" choices={paymentMethodChoices}
          optionText="name" optionValue="name" allowEmpty
        />
        <ReferenceInput source="seller_id" reference="employee">
          <SelectInput optionText="username" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput source="customer_id" reference="customer">
          <SelectInput optionText="id" optionValue="id" />
        </ReferenceInput>
        <DisabledInput label="Price" source="total_price" />
        <DisabledInput label="Time" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};

export const TransactionIcon = Icon;
