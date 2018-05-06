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
import { Employee, Manager, Driver, Seller, Assistant } from './employee';
import { Location, BusStation, RepairStation } from './location';


/** Relationship between Entities */
BusType.hasMany(Bus, { foreignKey: 'bus_type_id' });
Bus.belongsTo(BusType, { foreignKey: 'bus_type_id', constraints: false, as: 'bus_type' });

City.hasMany(District, { foreignKey: 'city_id' });
District.belongsTo(City, { foreignKey: 'city_id', constraints: false, as: 'city' });

// City.belongsTo(District, { foreignKey: 'center_district_id', as: 'center_district' });
// City.belongsTo(District, { foreignKey: 'center_district_id' });

// Department.hasOne(Manager, { foreignKey: 'manager_id', as: 'manager' });
// Manager.belongsTo(Department, { foreignKey: 'manager_id', constraints: false });

Office.hasMany(Department, { foreignKey: 'office_id' });
Department.belongsTo(Office, { foreignKey: 'office_id', constraints: false, as: 'office' });

Employee.hasOne(Employee, { foreignKey: 'supervisor_id' });
Employee.belongsTo(Employee, { foreignKey: 'supervisor_id', constraints: false, as: 'supervisor' });

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
Trip.belongsTo(TripDaily, { foreignKey: 'trip_daily_id', constraints: false, as: 'trip_daily' });

Bus.hasMany(Trip, { foreignKey: 'bus_id' });
Trip.belongsTo(Bus, { foreignKey: 'bus_id', constraints: false, as: 'bus' });

Driver.hasMany(Trip, { foreignKey: 'driver_id' });
Trip.belongsTo(Driver, { foreignKey: 'driver_id', constraints: false, as: 'driver' });

Assistant.hasMany(Trip, { foreignKey: 'assistant_id' });
Trip.belongsTo(Assistant, { foreignKey: 'assistant_id', constraints: false, as: 'assistant' });

BusType.hasMany(TripDaily, { foreignKey: 'bus_type_id' });
TripDaily.belongsTo(BusType, { foreignKey: 'bus_type_id', constraints: false, as: 'bus_type' });

District.hasMany(Location, { foreignKey: 'district_id' });
Location.belongsTo(District, { foreignKey: 'district_id', constraints: false, as: 'district' });

Location.hasMany(BusStation, { foreignKey: 'id' });
BusStation.belongsTo(Location, { foreignKey: 'id', constraints: false, as: 'information' });

Location.hasMany(RepairStation, { foreignKey: 'id' });
RepairStation.belongsTo(Location, { foreignKey: 'id', constraints: false, as: 'information' });

BusStation.hasMany(TripDaily, { foreignKey: 'depart_station_id' });
TripDaily.belongsTo(BusStation, { foreignKey: 'depart_station_id', constraints: false, as: 'depart_station' });

BusStation.hasMany(TripDaily, { foreignKey: 'arrive_station_id' });
TripDaily.belongsTo(BusStation, { foreignKey: 'arrive_station_id', constraints: false, as: 'arrive_station' });

Employee.hasMany(Manager, { foreignKey: 'id' });
Manager.belongsTo(Employee, { foreignKey: 'id', constraints: false, as: 'information' });

Employee.hasMany(Seller, { foreignKey: 'id' });
Seller.belongsTo(Employee, { foreignKey: 'id', constraints: false, as: 'information' });

Employee.hasMany(Assistant, { foreignKey: 'id' });
Assistant.belongsTo(Employee, { foreignKey: 'id', constraints: false, as: 'information' });

Employee.hasMany(Driver, { foreignKey: 'id' });
Driver.belongsTo(Employee, { foreignKey: 'id', constraints: false, as: 'information' });


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
  Assistant,
  Ticket,
  Customer,
  Transaction,
  Department,
  City,
  District,
  Location,
  BusStation,
  RepairStation
};

export default sequelize;
