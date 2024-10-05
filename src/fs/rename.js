import fs from 'fs';

const rename = async () => {
    // Write your code here    
    fs.access('files/wrongFilename.txt', (error) => {
        if (error) {
            // file wrongFilename.txt doesn't exists
            throw new Error ("FS operation failed");
        } else {
            fs.access('files/properFilename.md', (error) => {
                if (error) {
                    fs.rename('files/wrongFilename.txt','files/properFilename.md', (error) => {
                        if (error) console.log(error)});
                } else {
                    throw new Error ("FS operation failed");                
                };
            });
        }
    });
};

await rename();