// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Seller', new Schema({ 
    code:String,
    name: String,
    lastname:String,
    user_name:String,     
    password: String, 
    email: String,
    is_active:Boolean,
    created_by:String,
    created_date:Date,
    updated_by:String,
    updated_date:Date,
    contact_info:[{
        address:String,
        sub_district_id:Number,
        district_id:Number,
        province_id:Number,
        post_code_id:Number,
        mobile_no:Number
    }            
    ]
}));