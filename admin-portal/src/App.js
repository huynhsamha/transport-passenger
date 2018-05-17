import React from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

import { Admin, Resource } from 'react-admin';

import { authProvider, dataProvider } from './providors';

import './App.css'; // override default css and index.css

import { Dashboard, NotFound, customRoutes } from './pages';

import { BusTypeList, BusTypeCreate, BusTypeEdit, BusTypeIcon, BusTypeShow } from './resources/BusType';
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


const history = createHistory();

const App = () => (
  <Admin
    title="Admin Portal" catchAll={NotFound}
    dashboard={Dashboard} customRoutes={customRoutes}
    authProvider={authProvider} dataProvider={dataProvider}
    history={history}
  >
    {permissions => [

      ['manager', 'seller'].indexOf(permissions) > -1 ?
        <Resource
          name="transaction" options={{ label: 'Transaction' }} icon={TransactionIcon}
          list={TransactionList}
          edit={['seller'].indexOf(permissions) > -1 ? TransactionEdit : null}
          create={['seller'].indexOf(permissions) > -1 ? TransactionCreate : null}
        /> : null,

      ['manager', 'seller'].indexOf(permissions) > -1 ?
        <Resource
          name="ticket" options={{ label: 'Ticket' }} icon={TicketIcon}
          list={TicketList}
          edit={['seller'].indexOf(permissions) > -1 ? TicketEdit : null}
          create={['seller'].indexOf(permissions) > -1 ? TicketCreate : null}
        /> : null,

      <Resource
        name="tripDaily" options={{ label: 'Trip Daily' }} icon={TripDailyIcon}
        list={TripDailyList}
        edit={['manager'].indexOf(permissions) > -1 ? TripDailyEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? TripDailyCreate : null}
      />,

      <Resource
        name="trip" options={{ label: 'Trip' }} icon={TripIcon}
        list={TripList}
        edit={['manager'].indexOf(permissions) > -1 ? TripEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? TripCreate : null}
      />,

      <Resource
        name="employee" options={{ label: 'Employee' }} icon={EmployeeIcon}
        list={EmployeeList}
        edit={['manager'].indexOf(permissions) > -1 ? EmployeeEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? EmployeeCreate : null}
      />,

      ['manager', 'seller'].indexOf(permissions) > -1 ?
        <Resource
          name="customer" options={{ label: 'Customer' }} icon={CustomerIcon}
          list={CustomerList}
          edit={['seller'].indexOf(permissions) > -1 ? CustomerEdit : null}
          create={['seller'].indexOf(permissions) > -1 ? CustomerCreate : null}
        /> : null,

      <Resource
        name="busType" options={{ label: 'Bus Type' }} icon={BusTypeIcon}
        list={BusTypeList}
        edit={['manager'].indexOf(permissions) > -1 ? BusTypeEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? BusTypeCreate : null}
      />,

      <Resource
        name="bus" options={{ label: 'Bus' }} icon={BusIcon}
        list={BusList}
        edit={['manager'].indexOf(permissions) > -1 ? BusEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? BusCreate : null}
      />,

      <Resource
        name="office" options={{ label: 'Office' }} icon={OfficeIcon}
        list={OfficeList}
        edit={['manager'].indexOf(permissions) > -1 ? OfficeEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? OfficeCreate : null}
      />,

      <Resource
        name="department" options={{ label: 'Department' }} icon={DepartmentIcon}
        list={DepartmentList}
        edit={['manager'].indexOf(permissions) > -1 ? DepartmentEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? DepartmentCreate : null}
      />,

      <Resource
        name="city" options={{ label: 'City' }} icon={CityIcon}
        list={CityList}
        edit={['manager'].indexOf(permissions) > -1 ? CityEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? CityCreate : null}
      />,

      <Resource
        name="district" options={{ label: 'District' }} icon={DistrictIcon}
        list={DistrictList}
        edit={['manager'].indexOf(permissions) > -1 ? DistrictEdit : null}
        create={['manager'].indexOf(permissions) > -1 ? DistrictCreate : null}
      />
    ]}
  </Admin>
);

export default App;
