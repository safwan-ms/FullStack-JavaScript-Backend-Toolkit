1. create user model with fields of url, publicId, uploadedBy
2. create config for cloudinary
3. create cloudinaryHelper and uploadToCloudinary and fetch the url and publicId
4. create imageController 
 i)  check if the file is missing in req object  
 ii) write upload to cloudinary function which contains url and publicid 
and save into db

Image Routes
     protect them with some middlewares

Image middleware
    set storage 
