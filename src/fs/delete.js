const fs = require('fs');

const remove = async () => {
    try {
        const fileToDlelete = 'fileToRemove.txt';
        // Write your code here
        // check if Files folder exists
        fs.access(fileToDlelete, (error) => {
            if (error.code === 'ENOENT') { // ENOENT = 'No such file or directory'
                fs.unlink(fileToDlelete, (error) => {console.log(error)});
            } else {
                throw new Error ("FS operation failed");
            }
        })
    } catch (err) {
        console.log(err);
    }
};

await remove();