const User = require("../models/User");

exports.editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email,contactno, dob, salary, joiningdate,releivingdate,status} = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user properties
    user.name=name, 
    user.email=email,
    user.contactno=contactno,
    user.dob=dob,
    user.salary=salary,
    user.joiningdate=joiningdate,
    user.releivingdate=releivingdate,
    user.status=status

    // Save the updated user information to the database
    await user.save();

   return res.status(200).json({
      success: true,
      message: "User is updated successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
   return res.status(500).json({
      success: false,
      message: "Failed to update user, server error",
      error: error.message,
    });
  }
};
