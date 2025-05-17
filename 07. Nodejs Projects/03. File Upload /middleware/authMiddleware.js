import jwt from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.status(404).json({
      success: true,
      message: "No token provided ",
    });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodeToken);
    req.userInfo = decodeToken;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred in authMiddleware",
    });
    console.error(error.message);
  }
  next();
};
export default authMiddleware;
