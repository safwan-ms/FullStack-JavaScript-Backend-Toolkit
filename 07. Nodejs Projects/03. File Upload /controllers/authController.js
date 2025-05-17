import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    //fetching User
    const { username, email, password, role } = req.body;
    //check user already exists or not
    const checkUserExists = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkUserExists) {
      res.status(404).json({
        success: false,
        message: "User already exists",
      });
    }
    //converting the password into hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //saving the user into db
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      res.status(202).json({
        success: true,
        message: "User registered successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Something went wrong unable to register user ",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error with handling registration",
    });
    console.log("Server error with handling registration", error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    //fetching details from body
    const { username, password } = req.body;
    //check user exists or not
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User doesn't exists",
      });
    }
    //verify the user's password
    const checkPasswordMatch = await bcrypt.compare(password, user.password);
    if (!checkPasswordMatch) {
      res.status(404).json({
        success: false,
        message: "Incorrect Password",
      });
    }
    //create access token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15m" }
    );
    return res.status(202).json({
      success: true,
      message: "User Logged in successfully",
      role: user.role,
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error with handling Login",
    });
    console.log("Server error with handling Login", error.message);
  }
};

const changePassword = async (req, res) => {
  try {
    //get Logged in person's userId
    const userId = req.userInfo.userId;
    //extract old and new password
    const { oldPassword, newPassword } = req.body;

    //find the current logged in user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    //check if the old password is correct
    const checkPasswordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!checkPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: "Old Password is incorrect",
      });
    }

    //hash the new password
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    //update user password
    user.password = newHashedPassword;
    await user.save();
    res.status(202).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(
      "Error occurred in change password controller",
      error.message
    );
    res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};
export { loginUser, registerUser, changePassword };
