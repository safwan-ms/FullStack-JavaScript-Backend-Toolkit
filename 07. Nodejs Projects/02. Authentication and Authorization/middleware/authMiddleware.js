import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "No token provided. Please login to continue",
    });
  }
  try {
    //decode  token
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodeToken);
    req.userInfo = decodeToken;

    next();
  } catch (err) {
    console.log(`An error occured in authMiddleware ${err}`);
  }
};
export default authMiddleware;
