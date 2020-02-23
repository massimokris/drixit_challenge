const mongoose = require('mongoose');
require('../lib/mongo');
const User = require('../schemas/User');
const users =  require('./users');

const dbConnection = mongoose.connection;
 
dbConnection.on('error', console.error.bind(console, 'connection error:'));
 
dbConnection.once('open', function() {

    User.collection.insertMany(users, function (err, docs) {
      if (err){ 
        console.error(err);
          process.exit(1);
      } else {
        console.log(`Multiple documents inserted to Collection \n ${JSON.stringify(docs)}`);
        process.exit(0);
      }
    });
});