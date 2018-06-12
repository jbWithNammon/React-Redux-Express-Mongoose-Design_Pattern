// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Module', new Schema({ 
    name: String,     
    is_active:Boolean,
    created_by:String,
    created_date:Date,
    updated_by:String,
    updated_date:Date    
}));