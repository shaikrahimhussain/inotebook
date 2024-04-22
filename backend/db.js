const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017'

const connectToMongoose =()=>{
    mongoose.connect(mongoURI);

    mongoose.connection.on('connected',()=>{
        console.log('Connected to mongoose successfully');
    });

    mongoose.connection.on('error',()=>{
        console.log('Error connecting to mongoose');
    });
}

module.exports = connectToMongoose;