const path = require('path');
const express = require('express');
const compression = require('compression');

const buildPath = path.resolve(__dirname, '..', '..', 'build');

module.exports = (app) => {
  app.use(compression());
  app.use('/', express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'));
  });
};