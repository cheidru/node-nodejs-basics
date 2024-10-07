// const path = require('path');
import path from 'path';
import { fileURLToPath } from 'url';
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
// require('./files/c');
import './files/c.js'

// added imports
import * as objA from './files/a.json' with {type: 'json'};
import * as objB from './files/b.json' with {type: 'json'};


const random = Math.random();

let unknownObject;

// if (random > 0.5) {
//     unknownObject = require('./files/a.json');
// } else {
//     unknownObject = require('./files/b.json');
// }

if (random > 0.5) {
    // refactored value assignement
        unknownObject = objA;
    } else {
    // refactored value assignement
        unknownObject = objB;
    }

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

// __filename & __dirname are not supported in ES modules.
// here is the workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

// refactored export declaration
export {
    unknownObject,
    myServer,
};