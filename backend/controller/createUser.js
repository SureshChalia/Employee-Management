const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, email,contactno, dob, salary, joiningdate,releivingdate,status } = req.body;
    if (!name || !email || !contactno || !dob || !salary || !joiningdate || !status) {
     
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      name,
      email,
      contactno,
      dob,
      salary,
      joiningdate,
      releivingdate,
      status,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });
    return res.status(200).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
