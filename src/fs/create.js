import fs from 'fs';
import path from 'path';

const create = async () => {
    // Write your code here
    // check if Files folder and fresh.txt exist
    const filePath = path.resolve('src/fs/files', 'fresh.txt');
    fs.access(filePath, (error) => {
        if (!error) {
            throw new Error("FS operation failed");
        } else {
            fs.writeFile(filePath, 'I am fresh and young', (error) => {
                if (error) console.log(error)})
        }
    })
};

await create();