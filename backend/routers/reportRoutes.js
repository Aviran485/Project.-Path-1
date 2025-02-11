const express = require('express');
const router = express.Router();
const db = require('../dbSingleton').getConnection();

// get all reports
router.get('/', (req, res) => {
  db.query('SELECT * FROM reports', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// add new reports
router.post('/add', (req, res) => {
  const { location, description, image_url } = req.body;
  const query = 'INSERT INTO reports (location, description, image_url) VALUES (?, ?, ?)';
  db.query(query, [location, description, image_url], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Report added successfully!', id: result.insertId });
  });
});

// update reports
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { location, description, image_url } = req.body;
  const query = 'UPDATE reports SET location = ?, description = ?, image_url = ? WHERE id = ?';
  db.query(query, [location, description, image_url, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Report updated successfully!' });
  });
});

// delete reports
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM reports WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Report deleted successfully!' });
  });
});

module.exports = router;
