import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    //check if user already exists or not
    const checkUserExists = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkUserExists) {
      return res.status(404).json({
        success: false,
        message: "User already exists",
      });
    }

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //saving into db
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      return res.status(202).json({
        success: true,
        message: "User Registered successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not registered",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong with register user",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    //check user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exists",
      });
    }

    //verify the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    //creating accesstoken
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
      accessToken,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong with login user",
    });
  }
};

export { registerUser, loginUser };
