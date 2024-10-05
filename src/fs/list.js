import fs from 'fs';

const list = async () => {
    // Write your code here
    fs.access('files', (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.readdir('files', (err, content) => {
                if (err) throw err;
                for (let item of content) {
                    console.log(item);
                }
            })
        }
    });
};

await list();