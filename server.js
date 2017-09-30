const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const router      = require('./routes/route');

const port        = 3000;
const app         = express();

// Middlewares...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/employees', router);


app.get('/', (req, res) =>{
    res.send ("Hello MEAN stack 2  !!!!");

});

app.listen(port, ()=>{
    console.log("Server is running on  " + port);
});