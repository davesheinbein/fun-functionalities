const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for comment
const todoSchema = new Schema({
  content: String,
  user: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})
//create model for item
module.exports = mongoose.model('Todo', todoSchema);