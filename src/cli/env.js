const parseEnv = () => {
    // Write your code here
    let varKeys = Object.keys(process.env).filter(envVar => envVar.startsWith('RSS_'));
    let result = [];
    for(let key of varKeys) {
        result.push(key + '=' + process.env[key]);
    }

    console.log(result.join(', '));
};

parseEnv();