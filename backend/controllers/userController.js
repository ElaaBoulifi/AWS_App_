module.exports.createUser = (req, res) => {
  let body = req.body;

  if (Buffer.isBuffer(body)) {
    try {
      body = JSON.parse(body.toString());
    } catch (err) {
      return res.status(400).json({ success: false, message: 'Invalid JSON body' });
    }
  }

  const { name, email, skillsOffered, skillsWanted } = body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required' });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    skillsOffered,
    skillsWanted,
    createdAt: new Date().toISOString()
  };

  console.log(' DEBUG NEW USER:', newUser);

  res.status(201).json({ success: true, user: newUser });
};
