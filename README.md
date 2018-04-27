# transport-passenger

Assignment Database System - Transport Passenger System

## Quickstart

### Quick review source code (Optional)
#### Install extension on Chrome
+ Go [chrome://apps/](chrome://apps/)
+ Choose `Web Store`
+ Search `Octotree` and install the extension on Chrome
+ After installation, a sidebar contains project tree will appear on the web

#### Code structure
+ `index.js`: start running node with `babel` (transform ES6, ES7 to ES5) and `dotenv` (environment variables)
+ `server.js`: start server express
+ `test.js`: only for testing somethings
+ `config/db.js`: export environment variables for database
+ `server/config/oracle`: config package `oracledb`
+ `server/models`: Models database extend from `server/config/oracle/baseModel.js`
+ `server/controllers`: Controllers connect to database
+ `server/routes`: Routes express
+ `server/documents`: Database diagrams ERD
+ `server/scripts`: Import SQL, database scripts

### Clone source code
```
git clone https://github.com/huynhsamha/transport-passenger.git
```


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
All APIs need token after login to system to use.

### Authentication Secret - avoid login
To avoid login to use api for development, you can create auth secret in file `.env`, which is added to the request as `body` or `query` to pass the authentication layer.

Example, in file `.env`, add:
```
AUTHENTICATION_SECRET=F3yqfrVHR3cLDYdqpQLVZus549aXLrWTsDGsddVARSSPCBw5GAa6VGafxAdh4Mac9cP93PbNheL7BxzRPMMH36h5VuB7ks5xbZMDUHczZQc82ra6UMkbEE9zQtDRYvqNHSUn8UVySaSEDQLtz2RYHhQQnA7rjAahZKY4sGh6B5exnL7SD8fbGe8cPhSHYXFbDMZtaSseMQsYUT76BMEGANCxZxy2hCYRB4JVXVrqpjTT48BWRcuX6uqZ8kuKNCZhEF7L6emrTgQLCfWh436WPA3rQKLw39exaAZbwstCuGqd7SmeXgnZkXmnhBu3GhhJdsVdf5bce4yHTrUQhjKCeUb3vFxMMtCEHQGzx6C5bz7ewjtFZnB8ngXcPCGkJcGmaUpAVJUFdfwKwME8Dyz9HQmDeAHNpWUn3XQpa97TKfJZ8Zue2VNqV93SnS8qMmV9cfvye2YVSzJJ65rUPDnHVbvPDp69BEJe4UNeYJ9WRnDy4EFqz4ZFdjF8z6wtQRQc
```

In request, for `post` or `put`, you add to `body` with `authSecret`, for `get` or `delete`, you add to `query` with `authSecret` (`authSecret` is the `AUTHENTICATION_SECRET` you added)


## Authentication - login to use APIs

| Method | Url | Description |
| ------ | --- | ----------- |
|POST|		/api/auth/signIn/| body: { username, password } |

Login with `username` and `password` of table `EMPLOYEE`.

After login, server will create a session for you to use following  APIs

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


## OFFICE

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/office/||
|POST|		/api/v1/office/||
|GET|		/api/v1/office/:id||
|PUT|		/api/v1/office/:id||
|DELETE|	/api/v1/office/:id||


## EMPLOYEE

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/employee/||
|POST|		/api/v1/employee/||
|GET|		/api/v1/employee/:id||
|PUT|		/api/v1/employee/:id||
|DELETE|	/api/v1/employee/:id||

### + MANAGER

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/employee/role/manager/||
|POST|		/api/v1/employee/role/manager/||
|GET|		/api/v1/employee/role/manager/:id||
|PUT|		/api/v1/employee/role/manager/:id||
|DELETE|	/api/v1/employee/role/manager/:id||

### + DRIVER

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/employee/role/driver/||
|POST|		/api/v1/employee/role/driver/||
|GET|		/api/v1/employee/role/driver/:id||
|PUT|		/api/v1/employee/role/driver/:id||
|DELETE|	/api/v1/employee/role/driver/:id||
