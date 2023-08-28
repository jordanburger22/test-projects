const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://jordanburger22:6a2B0fDAm4QQWZpv@cluster0.fhwflo4.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('connected to db'));

const ImageSchema = new mongoose.Schema({
  imageData: Buffer, // Store binary image data
});

const Image = mongoose.model('Image', ImageSchema);

// Route to save the image
app.post('/api/save-image', async (req, res) => {
  try {
    const imageData = Buffer.from(
      req.body.dataURL.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    const newImage = new Image({
      imageData,
    });

    await newImage.save();
    res.status(201).json({ message: 'Image saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/get-all-images', async (req, res) => {
  try {
    const images = await Image.find();

    // Send each image's binary data with the appropriate content type
    images.forEach(image => {
      res.write(`--${image._id}\n`);
      res.write(`Content-Type: image/jpeg\n\n`);
      res.write(image.imageData, 'binary');
      res.write('\n');
    });

    res.end();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


