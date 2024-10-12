router.post('/create_blog', (req, res) => {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content, author: req.user._id });
    newBlog.save().then(blog => res.redirect('/dashboard'));
  });
  