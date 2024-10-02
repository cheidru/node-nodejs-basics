const fs = require('fs');

const rename = async () => {
    // Write your code here
    
    try {
        fs.access('files/wrongFilename.txt', (error) => {
            if (error.code === 'ENOENT') { // ENOENT = 'No such file or directory'
                // file wrongFilename.txt doesn't exists
                throw new Error ("FS operation failed");
            } else {
                fs.access('files/properFilename.md', (error) => {
                    if (error.code === 'ENOENT') {
                        fs.rename('files/wrongFilename.txt','files/properFilename.md', (error) => {console.log(error)});
                    } else {
                        throw new Error ("FS operation failed");                
                    };
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

await rename();