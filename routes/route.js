const express = require('express');
const router  = express.Router();
const Employee = require('../models/model');

router.get('/', (req, res) => {
 Employee.getEmployees((err,employees) =>{
    if(err) throw err;
    res.json(employees);
 });
});

router.post('/',(req, res)=>{
    var  newEmp =  {
        name: req.body.name,
        position : req.body.position,
        department : req.body.department,
        salary : req.body.salary
    };
    Employee.addEmployee(newEmp,(err,employee)=>{
        if(err) throw err;
        res.json(employee);

    });
});

router.put('/:_id',(req, res) =>{
    var empUpdate ={
        name : req.body.name,
        position : req.body.position,
        department : req.body.department,
        salary : req.body.salary
    }
    Employee.updateEmployee(req.params._id, empUpdate,(err, employee)=>{
            if(err) throw err;
            res.json(employee);
    });

});

router.get('/:_id', (req, res) =>{
    Employee.getEmployee(req.params._id, (err, employee) =>{
        if(err) throw err;
        res.json(employee);
    });

});

router.delete('/:_id', (req, res)=>{
    Employee.deleteEmployee(req.params._id, (err, employee) =>{
        if(err) throw err;
        res.json(employee);
    });
});




module.exports = router;
