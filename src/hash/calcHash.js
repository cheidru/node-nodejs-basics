const crypto = require('crypto');

// https://www.techiedelight.com/generate-sha-256-hash-javascript/
// https://nodejs.org/dist/latest-v22.x/docs/api/crypto.html#cryptocreatehashalgorithm-options
// https://nodejs.org/dist/latest-v22.x/docs/api/crypto.html#hashupdatedata-inputencoding
// https://nodejs.org/api/stream.html

const calculateHash = async () => {
    // Write your code here
    const sha256Hash = crypto.createHash('sha256');

    sha256Hash.update(/* Содержимое файла */);

    const hashCode = sha256Hash.digest('hex');

};

await calculateHash();