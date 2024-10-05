import fs from 'fs';

const read = async () => {
    // Write your code here
    fs.access('files/fileToRead.txt', (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.readFile('files/fileToRead.txt', 'utf8', (err, data) => {
                if(err) throw err;
                console.log(data);
            })
        }
    });
};

await read();