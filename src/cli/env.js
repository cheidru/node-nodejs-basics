import process from 'process';

const parseEnv = () => {
    // Write your code here
    // console.log(process.env);
    let varKeys = Object.keys(process.env).filter(envVar => envVar.startsWith('RSS_'));
    console.log(varKeys);
    let result = [];
    for(let key of varKeys) {
        result.push(key + '=' + process.env[key]);
    }

    console.log(result.join(', '));
};

parseEnv();