// requiring express and creating port
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const db = require('./config/mongoose');
const path=require('path')
const expressLayout = require('express-ejs-layouts');
const { doesNotThrow } = require('assert');
// set view engine
app.set('view engine','ejs');
app.set('views','./views');
// DB Path
app.set('views',path.join(__dirname,'views'));
// extract style and scripts from subpages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//Use router
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayout);
// require mongoose

// using router
app.use('/',require('./routes/index'));

// port where server listens
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
        return ;
    }
    console.log(`Server is running on port : ${port}`);
})


