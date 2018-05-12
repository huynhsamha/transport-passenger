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

const App = () => (
  <Admin
    title="Admin Portal" catchAll={NotFound}
    dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}
  >

    <Resource
      name="office" options={{ label: 'Office' }} icon={OfficeIcon}
      list={OfficeList} edit={OfficeEdit} create={OfficeCreate}
    />
    <Resource
      name="department" options={{ label: 'Department' }} icon={DepartmentIcon}
      list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate}
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
      name="employee" options={{ label: 'Employee' }} icon={EmployeeIcon}
      list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate}
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
