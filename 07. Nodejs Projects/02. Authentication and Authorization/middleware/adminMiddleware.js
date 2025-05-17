const isAdmin = (req, res, next) => {
  if (req.userInfo.role !== "admin") {
    res.status(404).json({
      success: false,
      message: "This is page prohibited by admin",
    });
  }
  next();
};
export default isAdmin;
