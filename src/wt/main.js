import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
    // Write your code here
    const numberOfCPUCores = os.cpus().length;

    function runWorker(code) {
        const filePath = path.resolve('src/wt', 'worker.js');
        return new Promise((resolve, reject) => { 
            const worker = new Worker(filePath, { workerData: code });
            worker.on('message', resolve); 
            worker.on('error', reject); 
            worker.on('exit', (err) => { 
                if (err) reject(new Error(`Stopped the Worker Thread`)); 
            }) 
        }) 
    }
    async function run() {
        const resArr = [];
        for(let i = 0; i < numberOfCPUCores; i++) {
            const result = await runWorker(10 + i);
            resArr.push(result);
        }         
        console.log(resArr); 
    }

    run().catch(err => console.error(err));
};

await performCalculations();