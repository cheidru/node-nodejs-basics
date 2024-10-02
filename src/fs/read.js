const fs = require('fs');

const read = async () => {
    // Write your code here
    fs.access('files/fileToRead.txt', (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.readFile('files/fileToRead.txt', (err, data) => {
                if(err) throw err;
                console.log(data);
            })
        }
    });
};

await read();