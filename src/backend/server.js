const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const file_path = 'blogs.json';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'uploads/';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
  });

const upload = multer({ storage });


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Serve uploaded images


app.post('/createBlog', upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 5 } // Allows up to 5 additional images
  ]), (req, res) => {
    const { id, title, content } = req.body;
    
    // Get file paths for uploaded images
    const thumbnail = req.files['thumbnail'] ? `/uploads/${req.files['thumbnail'][0].filename}` : null;
    const images = req.files['images'] ? req.files['images'].map(file => `/uploads/${file.filename}`) : [];
  
    const blog = {
      id,  
      title,
      thumbnail,
      images,
      content,
    };
  
    // Save blog data
    fs.writeFile(file_path, JSON.stringify(blog, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error creating blog');
      }
      res.status(200).json({ message: 'Blog created successfully', blog });
    });
  });

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});