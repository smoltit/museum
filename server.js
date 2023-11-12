const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = 3001; 

app.use(fileUpload({
    createParentPath: true,
}));

app.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;

    if (!file) return res.json({ error: 'Incorrect input name' });

    const newFileName = encodeURI(Date.now() + '-' + file.name);

    file.mv(`${__dirname}/public/uploads/${newFileName}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        console.log('file was uploaded');

        res.json({
            fileName: file.name,
            filePath: `/uploads/${newFileName}`,
        });
    });
});

// const fs = require('fs');
// const formidable = require('formidable');
// const path = require('path');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.post('/api/update-events', (req, res) => {
//     console.log('API endpoint accessed');
//     // Assuming req.body contains the updated event data
//     const updatedEventsData = req.body;

//     fs.writeFile('public/eventsData.json', JSON.stringify(updatedEventsData), (err) => {
//         if (err) {
//             return res.status(500).json({ error: 'Error saving data' });
//         }
//         res.json({ success: true });
//     });
// });

// app.post('/api/file', (req, res) => {
//     const form = new formidable.IncomingForm();
//     form.parse(req, async (err, fields, files) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error while processing form data.' });
//         }

//         const file = files.file;
//         const fileName = file.name;
//         const filePath = path.join(__dirname, 'public', 'images', fileName);
//         // Move the uploaded file to the desired location
//         fs.renameSync(file.path, filePath);

//         return res.status(200).json({ success: 'File uploaded successfully.' });
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
