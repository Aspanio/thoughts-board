const express = require('express');
const app = express();

//routers
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.set('view engine', 'pug');

app.listen(3000, (req, res)=>{
    console.log('listening in port 3000..')
});