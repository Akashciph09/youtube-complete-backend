import multer from "multer";

//The file parameter is an object representing the uploaded file that the user sent from the frontend (form, Postman, etc.).

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
   
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

//When a file is uploaded using Multer, file looks like this:

// js
// Copy
// Edit
// {
//   fieldname: 'image',                // Name of the form field (e.g., <input name="image" />)
//   originalname: 'cat.jpg',           // Original name of the uploaded file
//   encoding: '7bit',
//   mimetype: 'image/jpeg',            // File type (image/jpeg, image/png, etc.)
//   destination: './public/temp',      // Folder where file was stored (if diskStorage is used)
//   filename: 'cat.jpg',               // Name of the file on disk
//   path: 'public/temp/cat.jpg',       // Full path to where the file was saved
//   size: 13274                        // Size of the file in bytes
// }
