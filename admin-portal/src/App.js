import React from 'react';

import { Admin, Resource } from 'react-admin';

import { authProvider, dataProvider } from './providors';

import './App.css'; // override default css and index.css

import { Dashboard, NotFound } from './pages';

import { BusTypeList, BusTypeCreate, BusTypeEdit, BusTypeIcon } from './resources/BusType';
import { BusList, BusEdit, BusCreate, BusIcon } from './resources/Bus';
import { CityList, CityCreate, CityEdit, CityIcon } from './resources/City';
import { DistrictList, DistrictCreate, DistrictEdit, DistrictIcon } from './resources/District';
import { OfficeCreate, OfficeEdit, OfficeIcon, OfficeList } from './resources/Office';
import { DepartmentCreate, DepartmentEdit, DepartmentIcon, DepartmentList } from './resources/Department';
import { EmployeeCreate, EmployeeEdit, EmployeeIcon, EmployeeList } from './resources/Employee';
import { TripDailyCreate, TripDailyEdit, TripDailyIcon, TripDailyList } from './resources/TripDaily';
import { TripCreate, TripEdit, TripIcon, TripList } from './resources/Trip';
import { CustomerCreate, CustomerEdit, CustomerIcon, CustomerList } from './resources/Customer';
import { TransactionCreate, TransactionEdit, TransactionIcon, TransactionList } from './resources/Transaction';
import { TicketCreate, TicketEdit, TicketIcon, TicketList } from './resources/Ticket';

const App = () => (
  <Admin
    title="Admin Portal" catchAll={NotFound}
    dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}
  >

    <Resource
      name="transaction" options={{ label: 'Transaction' }} icon={TransactionIcon}
      list={TransactionList} edit={TransactionEdit} create={TransactionCreate}
    />
    <Resource
      name="ticket" options={{ label: 'Ticket' }} icon={TicketIcon}
      list={TicketList} edit={TicketEdit} create={TicketCreate}
    />
    <Resource
      name="tripDaily" options={{ label: 'Trip Daily' }} icon={TripDailyIcon}
      list={TripDailyList} edit={TripDailyEdit} create={TripDailyCreate}
    />
    <Resource
      name="trip" options={{ label: 'Trip' }} icon={TripIcon}
      list={TripList} edit={TripEdit} create={TripCreate}
    />
    <Resource
      name="employee" options={{ label: 'Employee' }} icon={EmployeeIcon}
      list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate}
    />
    <Resource
      name="customer" options={{ label: 'Customer' }} icon={CustomerIcon}
      list={CustomerList} edit={CustomerEdit} create={CustomerCreate}
    />
    <Resource
      name="busType" options={{ label: 'Bus Type' }} icon={BusTypeIcon}
      list={BusTypeList} edit={BusTypeEdit} create={BusTypeCreate}
    />
    <Resource
      name="bus" options={{ label: 'Bus' }} icon={BusIcon}
      list={BusList} edit={BusEdit} create={BusCreate}
    />
    <Resource
      name="office" options={{ label: 'Office' }} icon={OfficeIcon}
      list={OfficeList} edit={OfficeEdit} create={OfficeCreate}
    />
    <Resource
      name="department" options={{ label: 'Department' }} icon={DepartmentIcon}
      list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate}
    />
    <Resource
      name="city" options={{ label: 'City' }} icon={CityIcon}
      list={CityList} edit={CityEdit} create={CityCreate}
    />
    <Resource
      name="district" options={{ label: 'District' }} icon={DistrictIcon}
      list={DistrictList} edit={DistrictEdit} create={DistrictCreate}
    />

  </Admin>
);

export default App;
