const profiler = require('./profiler');

function getRandomArray(len: number): void {
    const p = profiler('Generating array of '+ len + ' elements');
    console.log(p);
    p.start();
    const arr: number[] = [];
    for (let index = 0; index < len; index++) {
        arr.push(Math.random());
    }
    p.end();
}

getRandomArray(1e6);
console.log('END');