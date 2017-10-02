const mongoose    = require('mongoose');

const empSchema   = new mongoose.Schema({
    name : String,
    position : String,
    department : String,
    salary : String
});


const Employee = module.exports = mongoose.model('Employee', empSchema);

module.exports.getEmployees = (callback) =>{
Employee.find(callback);
}

module.exports.addEmployee = (newEmp, callback)=>{
    Employee.create(newEmp, callback);
}

module.exports.updateEmployee = (empUpdate, id, callback) =>{
    Employee.findByIdAndUpdate(empUpdate, id, callback);
}

module.exports.getEmployee = (id , callback) =>{
    Employee.findById(id, callback);
}

module.exports.deleteEmployee = (id, callback) =>{
    Employee.findByIdAndRemove(id, callback);
}