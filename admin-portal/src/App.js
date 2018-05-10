import React from 'react';
import { jsonServerRestClient, Admin, Resource, simpleRestClient, fetchUtils, Delete } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import BusIcon from 'material-ui/svg-icons/places/airport-shuttle';
import CityIcon from 'material-ui/svg-icons/social/location-city';
import DistrictIcon from 'material-ui/svg-icons/maps/store-mall-directory';
import OfficeIcon from 'material-ui/svg-icons/social/domain';
import authClient from './authClient';
import APIClient from './restClient';
import { auth } from 'admin-on-rest/lib/sideEffect/saga';
import { BusTypeList } from './BusType';
import { BusList, BusEdit, BusCreate } from './Bus';
import { OfficeList } from './Office';
import { CityList } from './City';
import { DistrictList } from './District';
import { EmployeeList } from './Employee';
import Dashboard from './Dashboard';

const App = () => (
  <Admin title="Admin" restClient={APIClient} authClient={authClient} dashboard={Dashboard} >
    <Resource
      name="bus" options={{ label: 'Bus' }} icon={BusIcon}
      list={BusList} edit={BusEdit} create={BusCreate}
    />
    <Resource
      name="busType" options={{ label: 'Bus Type' }}
      list={BusTypeList}
    />
    <Resource options={{ label: 'Office' }} name="office" list={OfficeList} icon={OfficeIcon} />
    <Resource options={{ label: 'City' }} name="city" list={CityList} icon={CityIcon} />
    <Resource options={{ label: 'District' }} name="district" list={DistrictList} icon={DistrictIcon} />
    <Resource options={{ label: 'Employee' }} name="employee" list={EmployeeList} icon={UserIcon} />
  </Admin>
);

export default App;
