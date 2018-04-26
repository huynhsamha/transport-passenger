import express from 'express';
import http from 'http';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import session from 'express-session';

import routes from './server/routes';
import db from './server/config/oracle';
import config from './config/config';

/** Connect and config Database Oracle */
db.createPool()
  .then((pool) => {
    console.log(`OracleDB: pool ${pool.poolAlias} is created`);
  })
  .catch(err => console.log(err));


/** Configure App Express */
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: config.session.maxAge
  }
}));

app.use(express.static(path.join(__dirname, './build'), {
  setHeaders(res, path) {
    const paths = ['build', 'dist', 'assets', 'lib', 'libs', 'static'];
    paths.forEach((p) => {
      if (path.indexOf(p) > -1) {
        const ONE_MONTH = 30 * 24 * 60 * 60;
        res.setHeader('Cache-Control', `public, max-age=${ONE_MONTH}`);
      }
    });
  }
}));

app.use('/', routes);

// redirect other path to ./build
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send(err);
});


const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
