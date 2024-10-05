import fs from 'fs';

const create = async () => {
    // Write your code here
    // check if Files folder and fresh.txt exist
    fs.access('files/fresh.txt', (error) => {
        if (!error) {
            throw new Error("FS operation failed");
        } else {
            fs.writeFile('files/fresh.txt', 'I am fresh and young', (error) => {
                if (error) console.log(error)})
        }
    })
};

await create();