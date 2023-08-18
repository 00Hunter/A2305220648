const express = require('express');
const route=express.Router();
const pool=require('../pool');




route.get('/trains', async (req, res) => {
  try {
    // Fetch train data from the database
    const query = `
      SELECT train_id, train_name, departure_time, delay_minutes, sleeper_price, ac_price
      FROM trains
      WHERE departure_time > NOW() + INTERVAL '30 minutes'
      ORDER BY ac_price ASC, sleeper_price DESC, departure_time DESC;
    `;

    const result = await pool.query(query);
    const trains = result.rows;

    res.status(200).send(trains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching train data.' });
  }
});

module.export=route;