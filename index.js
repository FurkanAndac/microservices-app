const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get the list of projects
app.get('/api/projects', (req, res) => {
  // Replace this array with your list of projects
  const projects = [
    { name: 'Grafana', url: 'http://localhost:3000' },
    { name: 'Prometheus', url: 'http://localhost:9090' },
    { name: 'agencies-website', url: 'http://localhost:3001' },
    { name: 'agency-api-server', url: 'http://localhost:5000' },
    { name: 'Grafana1', url: 'http://localhost:3005' },
    // Add more projects as needed
  ];

  res.json(projects);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
