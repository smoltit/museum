const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // Choose a suitable port

app.use(bodyParser.json());

app.post('/api/update-events', (req, res) => {
    console.log('API endpoint accessed');
    // Assuming req.body contains the updated event data
    const updatedEventsData = req.body;

    fs.writeFile('public/eventsData.json', JSON.stringify(updatedEventsData), (err) => {
        if (err) {
        return res.status(500).json({ error: 'Error saving data' });
        }
        res.json({ success: true });
    });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
