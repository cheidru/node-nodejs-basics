import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        const result = nthFibonacci(workerData);
        // This function sends result of nthFibonacci computations to main thread
        parentPort.postMessage({ result, status: 'resolved' });
    } catch (err) {
        result = null;
        parentPort.postMessage({ result, status: 'error' });
    }

};

sendResult();