const process = require('process');
const { Transform } = require('stream');

const transform = async () => {
    // Write your code here
    const reverseStr = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
          }
    })

    process.stdin.pipe(reverseStr).pipe.process.stdout;
};

await transform();