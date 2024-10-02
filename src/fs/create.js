const fs = require('fs');

const create = async () => {
    // Write your code here
    let meFresh = 'I am fresh and young';
    // check if Files folder and fresh.txt exist
    fs.open('files/fresh.txt', r, (error) => {
        if (error.code === 'ENOENT') { // ENOENT = 'No such file or directory'
            fs.writeFile('/files/fresh.txt', meFresh, (error) => {console.log(error)})
        } else {
            throw new Error("FS operation failed");
        }
    })
};

await create();