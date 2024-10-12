const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// Upload Study Material
router.post('/upload_material', (req, res) => {
  const { title, link, type } = req.body;
  const newMaterial = new Material({
    title,
    link,
    type,
    uploadedBy: req.user._id // Attach the mentor ID to track who uploaded it
  });
  newMaterial.save().then(material => res.redirect('/dashboard'));
});

module.exports = router;
