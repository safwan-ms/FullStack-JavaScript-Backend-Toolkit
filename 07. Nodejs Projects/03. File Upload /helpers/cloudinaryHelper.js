import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);

    return { url: result.secure_url, publicId: result.public_id };
  } catch (error) {
    throw new Error("Error while uploading to cloudinary", error.message);
    console.error("Error while uploading to cloudinary", error.message);
  }
};

export { uploadToCloudinary };
