# transport-passenger

Assignment Database System - Transport Passenger System

## Quickstart

### Configure database

Create `.env` in root project (the file is ignored in `.gitignore`, because of security for production)

The file as similar for development:

```base
DB_HOST=localhost:1521/XE
DB_USERNAME=tranport_passenger
DB_PASSWORD=12345
```

See file `config/db.js` that use the file to export configure the database.


### Installation

`npm install` or `yarn`


### Start development

Before start NodeJS, use Oracle SQL Developer or other ways to open localhost and port for database you use for the project.

After above step, run:

`npm start` or `yarn start`

You maybe see:

```bash
yarn run v1.3.2
$ node index
Running on localhost:4200
OracleDB: pool default is created
```


## APIs

### BUS_TYPE

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/busType/||
|POST|		/api/v1/busType/||
|GET|		/api/v1/busType/:id||
|PUT|		/api/v1/busType/:id||
|DELETE|	/api/v1/busType/:id||
|GET|		/api/v1/busType/:id/buses| Get list of buses which type is bus type `:id`|


## BUS

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/bus/||
|POST|		/api/v1/bus/||
|GET|		/api/v1/bus/:id||
|PUT|		/api/v1/bus/:id||
|DELETE|	/api/v1/bus/:id||


### TRIP_DAILY

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/tripDaily/||
|POST|		/api/v1/tripDaily/||
|GET|		/api/v1/tripDaily/:id||
|PUT|		/api/v1/tripDaily/:id||
|DELETE|	/api/v1/tripDaily/:id||
|GET|		/api/v1/tripDaily/:id/trips| Get list of trips which trip daily `:id`|


## TRIP

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/trip/||
|POST|		/api/v1/trip/||
|GET|		/api/v1/trip/:id||
|PUT|		/api/v1/trip/:id||
|DELETE|	/api/v1/trip/:id||
