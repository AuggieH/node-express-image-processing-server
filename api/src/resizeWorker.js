const gm = require('gm');
const {parentPort, workerData} = require('worker_threads');

gm(workerData.source);
