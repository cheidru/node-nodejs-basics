const fs = require('fs');

const list = async () => {
    // Write your code here
    try {
        fs.access('files', (error) => {
            if (error.code === 'ENOENT') { // ENOENT = 'No such file or directory'
                throw new Error ("FS operation failed");
            } else {
                fs.readdir('files', (error, content) => {
                    if (err) {
                        console.log(error);
                    } else {
                        for (item of content) {
                            console.log(item);
                        }
                    }
                })
            }
        });
    } catch (err) {
        console.log(err);
    }
};

await list();