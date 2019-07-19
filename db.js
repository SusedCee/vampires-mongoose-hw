const mongoose = require('mongoose');
// purpose it to create a connection 
//with the database named test

//test is what we are naming the database just below
connectionString = 'mongodb://localhost/vampire';

mongoose.connect(connectionString, { useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`mongoose disconnected to ${connectionString}`)
})

mongoose.connection.on('error', (err) => {
  console.log(`mongoose error: ${err}`)
})