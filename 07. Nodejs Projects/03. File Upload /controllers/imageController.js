import Image from "../models/Image.js";
import { uploadToCloudinary } from "../helpers/cloudinaryHelper.js";
// import fs from "fs";
import cloudinary from "../config/cloudinary.js";

//upload image controller
const imageUploadController = async (req, res) => {
  try {
    if (!req.file.path) {
      res.status(404).json({
        success: false,
        message: "Image is missing, please upload an image!",
      });
    }
    const { url, publicId } = await uploadToCloudinary(req.file.path);
    //save into db
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });
    await newlyUploadedImage.save();

    //delete file from the local storage
    // fs.unlinkSync(req.file.path);
    return res.status(202).json({
      success: true,
      message: "Image uploaded successfully",
      image: newlyUploadedImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in image upload controller",
    });
    console.error(
      "Something went wrong in image upload controller",
      error.message
    );
  }
};

// fetch image controller
const fetchImagesController = async (req, res) => {
  try {
    const images = await Image.find({});
    if (images) {
      return res.status(202).json({
        success: true,
        data: images,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in image upload controller",
    });
    console.error(
      "Something went wrong in fetch image controller",
      error.message
    );
  }
};

//delete image controller
const deleteImageController = async (req, res) => {
  try {
    const getCurrentIdOfImage = req.params.id;
    const userId = req.userInfo.userId;

    const image = await Image.findById(getCurrentIdOfImage);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    //check if the image is uploaded by the current user who is trying to delete this image
    if (image.uploadedBy.toString() !== userId) {
      return res.status(404).json({
        success: false,
        message:
          "You are not authorized to delete this image, because you haven't uploaded",
      });
    }

    //delete this image first from your cloudinary storage
    await cloudinary.uploader.destroy(image.publicId);

    //delete this image from mongodb db
    await Image.findByIdAndUpdate(getCurrentIdOfImage);

    return res.status(202).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in delete image controller",
    });
    console.error(
      "Something went wrong in delete image controller",
      error.message
    );
  }
};

export { imageUploadController, fetchImagesController, deleteImageController };
