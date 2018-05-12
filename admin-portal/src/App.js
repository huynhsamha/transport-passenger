import React from 'react';

import { Admin, Resource } from 'react-admin';

import authProvider from './authProvider';
import dataProvider from './dataProvider';

import Dashboard from './Dashboard';
import NotFound from './404NotFound';

import { BusTypeList, BusTypeCreate, BusTypeEdit, BusTypeIcon } from './BusType';
import { BusList, BusEdit, BusCreate, BusIcon } from './Bus';
import { CityList, CityCreate, CityEdit, CityIcon } from './City';
import { DistrictList, DistrictCreate, DistrictEdit, DistrictIcon } from './District';


const App = () => (
  <Admin
    title="Admin Portal" catchAll={NotFound}
    dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}
  >

    <Resource
      name="busType" options={{ label: 'Bus Type' }} icon={BusTypeIcon}
      list={BusTypeList} edit={BusTypeEdit} create={BusTypeCreate}
    />
    <Resource
      name="bus" options={{ label: 'Bus' }} icon={BusIcon}
      list={BusList} edit={BusEdit} create={BusCreate}
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
