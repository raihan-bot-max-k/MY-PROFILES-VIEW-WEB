const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '../public/main.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).send('Error loading HTML file');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(data);
    }
  });
};