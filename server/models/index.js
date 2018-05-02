import sequelize from '../config/sequelize';

import BusType from './busType';
import Bus from './bus';
import TripDaily from './tripDaily';
import Trip from './trip';
import Office from './office';
import Ticket from './ticket';
import Customer from './customer';
import Transaction from './transaction';
import Department from './department';
import City from './city';
import District from './district';
import {
  Employee,
  Manager,
  Driver,
  Seller,
  Assistant
} from './employee';


/** Relationship between Entities */
BusType.hasMany(Bus, { foreignKey: 'bus_type_id' });
Bus.belongsTo(BusType, { foreignKey: 'bus_type_id', constraints: false, as: 'bus_type' });

City.hasMany(District, { foreignKey: 'city_id' });
District.belongsTo(City, { foreignKey: 'city_id', constraints: false, as: 'city' });

City.hasOne(District, { foreignKey: 'center_district_id', as: 'center_district' });

Department.hasOne(Manager, { foreignKey: 'manager_id', as: 'manager' });
Manager.belongsTo(Department, { foreignKey: 'manager_id', constraints: false });

Office.hasMany(Department, { foreignKey: 'office_id' });
Department.belongsTo(Office, { foreignKey: 'office_id', constraints: false, as: 'office' });

Employee.hasOne(Employee, { foreignKey: 'supervisor_id', as: 'supervisor' });

Department.hasMany(Employee, { foreignKey: 'department_id' });
Employee.belongsTo(Department, { foreignKey: 'department_id', constraints: false, as: 'department' });

Transaction.hasMany(Ticket, { foreignKey: 'transaction_id' });
Ticket.belongsTo(Transaction, { foreignKey: 'transaction_id', constraints: false, as: 'transaction' });

Trip.hasMany(Ticket, { foreignKey: 'trip_id' });
Ticket.belongsTo(Trip, { foreignKey: 'trip_id', constraints: false, as: 'trip' });

Customer.hasMany(Transaction, { foreignKey: 'customer_id' });
Transaction.belongsTo(Customer, { foreignKey: 'customer_id', constraints: false, as: 'customer' });

Seller.hasMany(Transaction, { foreignKey: 'seller_id' });
Transaction.belongsTo(Seller, { foreignKey: 'seller_id', constraints: false, as: 'seller' });

TripDaily.hasMany(Trip, { foreignKey: 'trip_daily_id' });
Trip.belongsTo(TripDaily, { foreignKey: 'trip_daily_id', constraints: false, as: 'trip' });

Bus.hasMany(Trip, { foreignKey: 'bus_id' });
Trip.belongsTo(Bus, { foreignKey: 'bus_id', constraints: false, as: 'bus' });

Driver.hasMany(Trip, { foreignKey: 'driver_id' });
Trip.belongsTo(Driver, { foreignKey: 'driver_id', constraints: false, as: 'driver' });

Assistant.hasMany(Trip, { foreignKey: 'assistant_id' });
Trip.belongsTo(Assistant, { foreignKey: 'assistant_id', constraints: false, as: 'assistant' });

BusType.hasMany(TripDaily, { foreignKey: 'bus_type_id' });
TripDaily.belongsTo(BusType, { foreignKey: 'bus_type_id', constraints: false, as: 'bus_type' });

// Station.hasMany(TripDaily, { foreignKey: 'depart_station_id' });
// TripDaily.belongsTo(Station, { foreignKey: 'depart_station_id', constraints: false });
// Station.hasMany(TripDaily, { foreignKey: 'arrive_station_id' });
// TripDaily.belongsTo(Station, { foreignKey: 'arrive_station_id', constraints: false });


export {
  BusType,
  Bus,
  TripDaily,
  Trip,
  Office,
  Employee,
  Manager,
  Driver,
  Seller,
  Ticket,
  Customer,
  Transaction,
  Department,
  City,
  District
};

export default sequelize;
