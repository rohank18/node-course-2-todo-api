const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds151207.mlab.com:51207/todoapp1234' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
