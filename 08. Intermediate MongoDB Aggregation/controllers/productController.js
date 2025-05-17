import Product from "../models/Product.js";

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      // 1st Condition
      {
        $match: {
          inStock: true,
          price: {
            $gte: 100,
          },
        },
      },
      //2nd Condition
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    if (result) {
      return res.status(202).json({
        success: true,
        data: result,
      });
    }
  } catch (error) {
    console.error("Error occurred in getProductStatsController", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subminProductPricetract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    return res.status(202).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error occurred in getProductAnalysis", error.message);
    return res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: false,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    return res.status(202).json({
      success: true,
      data: `Inserted ${sampleProducts.length} sample products`,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const fetchProducts = await Product.find({});
    if (fetchProducts) {
      return res.status(202).json({
        success: true,
        data: fetchProducts,
      });
    }
  } catch (error) {
    console.error("Error occurred in getAllProducts", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
    });
  }
};

export {
  insertSampleProducts,
  getAllProducts,
  getProductStats,
  getProductAnalysis,
};
