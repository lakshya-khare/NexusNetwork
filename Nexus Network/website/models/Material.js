const mongoose = require('mongoose');
const MaterialSchema = new mongoose.Schema({
  title: String,
  link: String,
  type: String, // "notes", "video", "pdf", etc.
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the mentor who uploaded
});
module.exports = mongoose.model('Material', MaterialSchema);
