var mongoose = require("mongoose");
var websiteSchema = require('../website/website.schema.server')

var userSchema = mongoose.Schema({
  username: {type: String},
  password: {type: String},
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [websiteSchema],
  facebook: {
    id: String,
    token: String
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
}, {collection: 'user'});


module.exports = userSchema;



