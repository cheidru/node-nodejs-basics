const fs = require('fs');

const copy = async () => {
    // Write your code here
    const filesFolder = 'files';
    const copyFolder = 'files_copy';
    // const copyFolderPath = '\files_copy\\';

    try {
        // check if 'files' folder exists
        fs.access(filesFolder, (error) => {
            if (error.code === 'ENOENT') { // ENOENT = 'No such file or directory'
                throw new Error ("FS operation failed");
            } else {
                // check if 'files_copy' folder exists
                fs.access(copyFolder, (error) => {
                    if (error.code === 'ENOENT') {
                        // create 'files_copy' folder
                        fs.mkdir(copyFolder, (err) => {console.log(err)});
                        // copy files and folders
                        fs.cp(filesFolder, copyFolder);
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

await copy();
