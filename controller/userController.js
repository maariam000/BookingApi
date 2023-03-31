const User = require('../models/User');

// @desc        Register User
// @route       POST api/auth
// @access      Public

exports.registerUser = async (req, res, next) => {
  const { name, email, phone, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

    res.status(200).json({
      success: true,
      data: user,
      message: 'User registered successfully!!',
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Failed registration',
    });
  }
};
