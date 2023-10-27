const User = require("../models/User");

exports.deleteUser = async (req, res) => {
  try {
   
    const userId = req.params.id; 
    console.log("dele ID",userId)
    const user = await User.findById(userId);

    // Check if the task exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.findByIdAndDelete({_id:userId});

    res.status(200).json({
      success: true,
      message: 'User is deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete User, server error',
      error: error.message,
    });
  }
};