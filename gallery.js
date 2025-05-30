// server.js (ESM compatible)

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';

// Load env vars
dotenv.config();

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

// Gallery route
app.get('/api/gallery', async (req, res) => {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: 'Folder name is required' });
  }

  try {
    const result = await cloudinary.search
      .expression(`folder=${folder}`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map((img) => ({
      src: img.secure_url,
      alt: img.public_id.split('/').pop().replace(/[-_]/g, ' '),
      category: folder,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error('Cloudinary error:', error);
    res.status(500).json({ error: 'Failed to fetch images from Cloudinary' });
  }
});

// Get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
