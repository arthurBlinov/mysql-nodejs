const express = require('express');
const postRoutes = require('./routes/post.js');
const userRoutes =  require('./routes/user.js');
const cookie = require('cookie-parser');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(cookie());
const storage = multer?.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../front/public/upload')
    },
    filename: (req, file, cb) => {
       cb(null, Date.now() + file?.originalname);
    }
})
const upload = multer({storage})

app.post('/api/upload', upload.single('file'), (req, res) => {
    const file = req?.file;
    res?.status(200).json(file?.filename);
})

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.listen(5000, () => console.log('Connected'));