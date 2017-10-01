const express = require('express');
const router  = express.Router();
const Employee = require('../models/model');

router.get('/', (req, res) => {
 Employee.getEmployees((err,employees) =>{
    if(err) throw err;
    res.json(employees);
 });
});


module.exports = router;
