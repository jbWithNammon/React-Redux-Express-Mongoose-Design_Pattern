// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Product', new Schema({ 
    code: String, 
    category_id: Number,
    name:String,
    barcode:String,
    piece_per_pack:Number,
    pack_qty:Number,
    piece_qty:Number,
    pack_price:Number,
    piece_price:Number,     
    vat:Number,
    discount:Number,    
    status_id:Number,    
    created_by:String,
    created_date:Date,
    updated_by:String,
    updated_date:Date     
}));