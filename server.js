const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const router      = require('./routes/route');
const config    = require('./config/database');
const cors      = require('cors');

const port        = 3000;
const app         = express();

// Connecting mongoDB ...
mongoose.connect(config.database, (err) =>{
if(err){
console.log("MongoDB not connected.." + err);
}else{
console.log("MongoDB is successfully connected.. ");
}
});

// Middlewares...
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/employees', router);


app.get('/', (req, res) =>{
    res.send ("Hello MEAN stack 2  !!!!");

});

app.listen(port, ()=>{
    console.log("Server is running on  " + port);
});
