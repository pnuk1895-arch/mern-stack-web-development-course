app.get('/profile/:userId', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Profile of user ${userId}` });
});