import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'listes.json');

  if (req.method === 'GET') {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
  } 
  else if (req.method === 'POST') {
    try {
        const newTestimony = req.body;
        
        // Validation of newTestimony as needed...

        let data;
        const fileData = fs.readFileSync(filePath, 'utf8');
        // Check if fileData is not empty and is valid JSON
        if (fileData && fileData.trim() !== "") {
            data = JSON.parse(fileData);
            if (!Array.isArray(data.harcelementList)) {
                throw new Error('Data is not an array');
            }
        } else {
            data = { harcelementList: [] }; // Initialize if file is empty or invalid
        }
        
        // Update the JSON data
        data.harcelementList.push(newTestimony);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({ message: 'Testimony added!', newTestimony });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
