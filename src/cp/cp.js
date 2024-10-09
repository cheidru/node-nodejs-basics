import child_process from 'child_process';
import process from 'process';
import path from 'path';

const spawnChildProcess = async (args) => {
    // Write your code here
    const filePath = path.resolve('src/cp/files', 'script.js')
    const child = child_process.fork(filePath, args);
    process.stdin.on('message', (data) => {child.send(data)});
    child.on('message', (data) => {process.stdout.write(data)});
};
// Put your arguments in function call to test this functionality
spawnChildProcess( ['Igor', 'Che', 'Junior'] );
