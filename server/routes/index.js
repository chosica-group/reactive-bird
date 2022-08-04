const express = require('express');
const topics = require('./topics');
const comments = require('./comments');
const routes = express.Router({ mergeParams: true });

routes.use('/topics', topics); // forum handler
routes.use('/topics', comments);

module.exports = routes;
