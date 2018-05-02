# transport-passenger

Assignment Database System - Transport Passenger System

NodeJS, Oracle SQL, AWS (EC2 - S3)

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
EMAIL_PASSWORD=[password email here]

# amazon aws
AWS_ACCESS_KEY_ID=[your access key aws]
AWS_SECRET_ACCESS_KEY=[your secret access key aws]
AWS_S3_BUCKET=transport-passenger
```

## APIs
View [APIs here](https://github.com/huynhsamha/transport-passenger/blob/master/APIs.md)

## Documents - Contributing
View [Documents here](https://github.com/huynhsamha/transport-passenger/blob/master/docs/CONTRIBUTING.md)


## Deploy AWS
[Documents](https://github.com/huynhsamha/transport-passenger/blob/master/deploy-aws/README.md)
