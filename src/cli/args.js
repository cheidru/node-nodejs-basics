const parseArgs = () => {
    // Write your code here
    let arr = process.argv.slice(2).map(item => item.replace('--',''));
    let argsString = [];
    for(let i=0; i< arr.length; i +=2) {
        argsString.push(arr[i] + ' is ' + arr[i+1]);
    }

    console.log(argsString.join(', '));
};

parseArgs();