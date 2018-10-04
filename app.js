const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = require('./config/config.js').mongoURI;

//routers
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.set('view engine', 'pug');

mongoose.connect(db,{ useNewUrlParser: true })
   .then(()=>{console.log('connected succsess')}
);

app.listen(3000, (req, res)=>{
    console.log('listening in port 3000..')
});