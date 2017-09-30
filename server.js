const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');

const port        = 3000;
const app         = express();

app.get('/', (req, res) =>{
    res.send ("Hello MEAN stack 2  !!!!");

});

app.listen(port, ()=>{
    console.log("Server is running on  " + port);
});