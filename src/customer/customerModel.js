var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema(
    {
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
    }
);

module.exports = mongoose.model('customer',customerSchema);