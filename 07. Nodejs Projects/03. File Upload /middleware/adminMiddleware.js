const isAdmin = async (req, res, next) => {
  if (req.userInfo.role !== "admin") {
    return res.status(404).json({
      success: false,
      message: "This page is prohibited by admin",
    });
  }
  next();
};
export default isAdmin;
