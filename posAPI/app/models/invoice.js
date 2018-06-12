// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Invoice', new Schema({ 
    no: String, 
    customer_id: Number,
    amount: Schema.Types.Decimal128,
    vat:Number,
    discount:Number,
    total:Number,
    status_id:Number,    
    created_by:String,
    created_date:Date,
    updated_by:String,
    updated_date:Date,
    listings:[{
        product_id:Number,
        pack_qty:Number,
        piece_qty:Number,
        amount:Number,
        discount:Number,
        total:Number,
        status_id:Number
    }            
    ]
}));