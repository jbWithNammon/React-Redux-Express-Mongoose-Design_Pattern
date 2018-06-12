// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    user_name: String, 
    password: String, 
    email: String,
    is_active:Boolean,
    created_by:String,
    created_date:Date ,
    access_right:[{
        module_id:Number,
        can_view:Boolean,
        can_edit:Boolean,
        can_append:Boolean,
        can_remove:Boolean
    }
                
    ]
}));