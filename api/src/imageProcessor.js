const path = require('path');
const {Worker, isMainThread} = require('worker_threads');

const imageProcessor = () => {
  return new Promise((resolve, reject) => {
    if (isMainThread) {

    } else {
      reject(new Error('not on main thread'));
    }
    resolve();
  });
};

module.exports = imageProcessor;
