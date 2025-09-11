const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/videos', async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet,contentDetails',
          chart: 'mostPopular',
          regionCode: 'IN',
          maxResults: 50,
          key: process.env.YOUTUBE_API_KEY
        }
      }
    );
    res.json(response.data.items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          maxResults: 20,
          type: 'video',
          key: process.env.YOUTUBE_API_KEY
        }
      }
    );
    res.json(response.data.items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));