const mongoose = require('mongoose');
require('dotenv').config();
const url=process.env.Mongo_Url;
// connecting to mongoose
mongoose.connect(url);
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=db;
