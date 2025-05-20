const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Serve uploaded images


app.get('/blogs', (req, res) => {
  fs.readFile(file_path, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading blogs');
    }

    try {
      const blogs = JSON.parse(data);
      res.status(200).json(blogs);
    } catch (parseErr) {
      res.status(500).send('Error parsing blog data');
    }
  });
});


app.post('/createBlog', upload.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'images', maxCount: 5 }
]), (req, res) => {
  const { id, title, content } = req.body;

  const thumbnail = req.files['thumbnail'] ? `/uploads/${req.files['thumbnail'][0].filename}` : null;
  const images = req.files['images'] ? req.files['images'].map(file => `/uploads/${file.filename}`) : [];

  const newBlog = {
    id,
    title,
    thumbnail,
    images,
    content,
  };

  // Step 1: Read existing blogs
  fs.readFile(file_path, 'utf8', (err, data) => {
    let blogs = [];

    if (!err && data) {
      try {
        blogs = JSON.parse(data);
        if (!Array.isArray(blogs)) blogs = [];
      } catch (parseErr) {
        return res.status(500).send('Error parsing existing blogs');
      }
    }

    // Step 2: Add new blog
    blogs.push(newBlog);

    // Step 3: Write updated array back
    fs.writeFile(file_path, JSON.stringify(blogs, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).send('Error saving blog');
      }
      res.status(200).json({ message: 'Blog created successfully', blog: newBlog });
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});