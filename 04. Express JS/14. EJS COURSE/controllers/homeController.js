const homeController = (req, res) => {
  const data = {
    name: "safwax",
    userId: 20,
  };
  res.render("index", data);
};

export { homeController };
