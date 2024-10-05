import fs from 'fs';

const remove = async () => {
    const fileToDelete = 'files/fileToRemove.txt';
    // Write your code here
    fs.access(fileToDelete, (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.unlink(fileToDelete, (error) => {
                if (error) console.log(error)});
        }
    })
};

await remove();