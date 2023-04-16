import fs from 'fs';
import path from 'path';

export default function extractData() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData);
}
