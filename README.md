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
