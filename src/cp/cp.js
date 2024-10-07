import fork from 'child_process';
import process from 'process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = fork('/files/script.js', process.argv);
    // child.send(process.stdin.pipe(child));
    process.stdin.on('data', (data) => {child.send(data)});
    child.on('data', (data) => {process.stdout.write(data)});
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
