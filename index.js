const express = require('express');
const axios = require('axios');
const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'No URL provided.' });
  }

  const urls = Array.isArray(url) ? url : [url];

  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        return { error: `Failed to retrieve data from URL: ${url}` };
      }
    })
  );

  res.json(results);
});

// Add a default route to handle undefined paths
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`number-management-service listening at http://localhost:${port}`);
});
