const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the blogger who created
});
module.exports = mongoose.model('Blog', BlogSchema);
