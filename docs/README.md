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
```shell
git clone https://github.com/huynhsamha/transport-passenger.git
```



### Configure database

Create `.env` in root project (the file is ignored in `.gitignore`, because of security for production)

This project use Postgres SQL.

The file as similar for development:

```shell
DB_HOST=localhost
DB_PORT=5432
DB_NAME=transport_passenger
DB_USERNAME=example_username
DB_PASSWORD=example_password
```

See file `config/db.js` that use the file to export configure the database.



### Installation

```shell
# use npm
npm install
# or can use yarn
yarn
```

#### PostgresSQL - pgAdmin 3
Install `postgres` (database) and `pgAdmin 3` (tool development)


### Start development

#### Fake data before start

To drop all table in your schema (default of postres is `public` schema):
```shell
yarn run db:drop
```

To create tables:
```shell
yarn run db:create
```

To clear data of tables (only clear data, sequences not reset):
```shell
yarn run db:clear
```

After run `db:create`, you can fake data or import available data by following options:

To fake data (maybe catch error):
```shell
yarn run db:fake
```

To import data:
Open `pgAdmin 3` and run script file `scripts/import-data.sql`


#### Run NodeJS
Before start NodeJS, use Oracle SQL Developer or other ways to open localhost and port for database you use for the project.

After above step, run:

```shell
# use npm
npm start 
# or can use npm
yarn start
```


### Testing

Add your test files anywhere in `server` or `test` directory with `*.spec.js`

Run testing:

```shell
# use npm
npm run test 
# or can use yarn
yarn test
```

### Commit code

The project uses `husky` for pre-commit code, that lints your code (`eslint`) and detect your bug syntax js before commit or push.




### Environments (development, test, production)

In file `.env`, add
```shell
# example for domain
DOMAIN=https://domain.com

# example for session secret
SESSION_SECRET=emCNrg59au2fvhgr5RA9TBxvWyBhPRw2RdjZAXR79v5JfDAKMX

# email for project
EMAIL_ADDRESS=noreply.transport.passenger@gmail.com
EMAIL_PASSWORD=[contact someone who know password]

# amazon aws
AWS_ACCESS_KEY_ID=[your access key aws]
AWS_SECRET_ACCESS_KEY=[your secret access key aws]
AWS_S3_BUCKET=transport-passenger
```

## APIs
View [APIs here](https://huynhsamha.github.io/transport-passenger/api)

## Documents - Contributing
View [Documents here](https://huynhsamha.github.io/transport-passenger/docs)

## Deploy AWS
View [instructions here](https://huynhsamha.github.io/transport-passenger/aws/)
