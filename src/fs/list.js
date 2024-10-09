import fs from 'fs';
import path from 'path';

const list = async () => {
    // Write your code here
    const folderPath = path.resolve('src/fs/files');
    fs.access(folderPath, (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.readdir(folderPath, (err, content) => {
                if (err) throw err;
                for (let item of content) {
                    console.log(item);
                }
            })
        }
    });
};

await list();