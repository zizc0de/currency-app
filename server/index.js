const express = require('express');
const app = express();
const logger = require('./logger');
const setupAppRoutes = process.env.NODE_ENV === 'development' ? require('./middleware/development') : require('./middleware/production');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 7000;

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e); //eslint-disable-line no-console
    console.log('APPLICATION ERROR:', err); //eslint-disable-line no-console
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError)

logger.info(`Application env: ${process.env.NODE_ENV}`);

app.set('env', process.env.NODE_ENV);
app.use('/public', express.static('public/assets'));

app.use(logger.expressMiddleware);

setupAppRoutes(app);

app.listen(process.env.HTTP_PORT, (error) => {
  if (error) {
    logger.warn(`Server cannot be run on port ${process.env.HTTP_PORT}`);
  } else {
    logger.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
  }
});