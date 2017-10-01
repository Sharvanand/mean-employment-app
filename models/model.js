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
console.log('This is from DB');
}