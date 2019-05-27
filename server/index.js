const express = require('express');
const app = express();
const setupAppRoutes = process.env.NODE_ENV === 'development' ? require('./middleware/development') : require('./middleware/production');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 7000;

app.set('env', process.env.NODE_ENV);

app.use('/public', express.static('public/assets'));

setupAppRoutes(app);

app.listen(process.env.HTTP_PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
  }
});