// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: String
  },
  player_time:{
      type: String
  },
  player_game:{
      type: String
  },
  player_ava:{
    type: String
}

},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);