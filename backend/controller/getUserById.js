const User = require("../models/User");

exports.getUserById = async(req, res) => {
  try {
    console.log(req.params);
    const {id} = req.params;
    console.log("_id",id);
    const user = await User.findById(id);
    if(!user)
    return res.status(401).json({
      success: false,
      message: 'User not found',
    });
    return res.status(200).json({
      success: true,
      message: 'User data found',
      data: user,
    });
  } catch (error) {
    console.error(error);
   return res.status(500).json({
      success: false,
      message: 'Failed to fetch all the tasks',
      error: error.message,
    });
  }
  };