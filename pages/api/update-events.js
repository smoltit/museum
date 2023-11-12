import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const updatedEventsData = req.body;
    const eventsDataFilePath = path.join(process.cwd(), 'public', 'eventsData.json');

    // Write the updated data to the file
    await fs.promises.writeFile(eventsDataFilePath, JSON.stringify(updatedEventsData));

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating events:', error);
    res.status(500).json({ error: 'Error updating events' });
  }
}
