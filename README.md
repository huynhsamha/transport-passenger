# transport-passenger

Assignment Database System - Transport Passenger System

NodeJS, Sequelize (Postgres SQL), ReactJS, Amazon AWS (EC2, S3)

## Quickstart


### Quick review source code (Optional)

#### Install extension on Chrome
+ Go [chrome://apps/](chrome://apps/)
+ Choose `Web Store`
+ Search `Octotree` and install the extension on Chrome
+ After installation, a sidebar contains project tree will appear on the web

#### Code structure
+ `package.json`: should view `script` to use
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
	+ `clear`: truncate tables
	+ `create`: create tables
	+ `drop`: drop all tables
	+ `fake`: fake data on your database



### Clone source code
```
git clone https://github.com/huynhsamha/transport-passenger.git
```



### Configure database

Create `.env` in root project (the file is ignored in `.gitignore`, because of security for production)

This project use Postgres SQL.

The file as similar for development:

```base
DB_HOST=localhost
DB_PORT=5432
DB_NAME=transport_passenger
DB_USERNAME=example_username
DB_PASSWORD=example_password
```

See file `config/db.js` that use the file to export configure the database.



### Installation

`npm install` or `yarn`


### Start development

#### Fake data before start

To drop all table in your schema (default of postres is `public` schema):
```
yarn run db:drop
```

To create tables:
```
yarn run db:create
```

To clear data of tables (only clear data, sequences not reset):
```
yarn run db:clear
```

To fake data:
```
yarn run db:fake
```


#### Run NodeJS
Before start NodeJS, use Oracle SQL Developer or other ways to open localhost and port for database you use for the project.

After above step, run:

`npm start` or `yarn start`



### Testing

Add your test files anywhere in `server` or `test` directory with `*.spec.js`

Run testing:

`npm run test` or `yarn test`


### Commit code

The project uses `husky` for pre-commit code, that lints your code (`eslint`) and detect your bug syntax js before commit or push.




### Environments (development, test, production)

In file `.env`, add
```
# environment is test or production
NODE_ENV=test
NODE_ENV=production

# example for domain
DOMAIN=https://domain.com

# example for session secret
SESSION_SECRET=emCNrg59au2fvhgr5RA9TBxvWyBhPRw2RdjZAXR79v5JfDAKMX

# email for project
EMAIL_ADDRESS=noreply.transport.passenger@gmail.com
EMAIL_PASSWORD=[contact someone who know password]
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
|POST|		/api/auth/signIn/| req.body: { username, password } <br> res.status: <br> + 500 => { errorMessage } <br> + 404 => { message: 'User not found' } <br> + 401 => { message: 'Wrong password' } <br> + 200 => { user, token } |
|POST|		/api/auth/forgotPassword/| req.body: { email } <br> res.status: <br> + 500 => { errorMessage } <br> + 404 => { message: 'User not found' } <br> + 200 => { message: 'check email' } |
|POST|		/api/auth/resetPassword/| req.body: { token, password } <br> res.status: <br> + 500 => { errorMessage } <br> + 403 => { message: 'Token is not valid' } <br> + 200 => {  message: 'successfully' } |
|GET|		/api/signOut/| redirect to '/' |

Login with `username` and `password` of table `EMPLOYEE`.

After login, server will create a session for you to use following  APIs

### BUS_TYPE

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/busType/| query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/busType/||
|GET|		/api/v1/busType/:id||
|PUT|		/api/v1/busType/:id||
|DELETE|	/api/v1/busType/:id||
|GET|		/api/v1/busType/:id/buses| Get list of buses which type is bus type `:id`|


## BUS

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/bus/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/bus/||
|GET|		/api/v1/bus/:id||
|PUT|		/api/v1/bus/:id||
|DELETE|	/api/v1/bus/:id||


### TRIP_DAILY

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/tripDaily/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/tripDaily/||
|GET|		/api/v1/tripDaily/:id||
|PUT|		/api/v1/tripDaily/:id||
|DELETE|	/api/v1/tripDaily/:id||
|GET|		/api/v1/tripDaily/:id/trips| Get list of trips which trip daily `:id`|


## TRIP

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/trip/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/trip/||
|GET|		/api/v1/trip/:id||
|PUT|		/api/v1/trip/:id||
|DELETE|	/api/v1/trip/:id||


## OFFICE

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/office/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/office/||
|GET|		/api/v1/office/:id||
|PUT|		/api/v1/office/:id||
|DELETE|	/api/v1/office/:id||


## EMPLOYEE

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/employee/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/employee/||
|GET|		/api/v1/employee/:id||
|PUT|		/api/v1/employee/:id||
|DELETE|	/api/v1/employee/:id||

### + MANAGER

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/employee/role/manager/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/employee/role/manager/||
|GET|		/api/v1/employee/role/manager/:id||
|PUT|		/api/v1/employee/role/manager/:id||
|DELETE|	/api/v1/employee/role/manager/:id||

### + DRIVER

| Method | Url | Description |
| ------ | --- | ----------- |
|GET|		/api/v1/employee/role/driver/|query: { offset: default 0, limit: default 100 }|
|POST|		/api/v1/employee/role/driver/||
|GET|		/api/v1/employee/role/driver/:id||
|PUT|		/api/v1/employee/role/driver/:id||
|DELETE|	/api/v1/employee/role/driver/:id||
