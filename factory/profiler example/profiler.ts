require('dotenv').config();
interface IProfiler{
    start(): void;
    end(): void;
}

class Profiler {
    label: string;
    lastTime: [number, number];

    constructor(label: string){
        this.label = label;
        this.lastTime = null;
    }

    start(): void {
        this.lastTime = process.hrtime()
    }

    end(): void {
        const diff: [number, number] = process.hrtime(this.lastTime);
        console.log(`Calculation "${this.label} was ${diff[0]} seconds long and ${diff[1]} nanoseconds"`);
    }
}

module.exports = function(label) : IProfiler {
    console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV === 'development'){
        return new Profiler(label);
    }
    else if(process.env.NODE_ENV === 'production'){
        return {
            start: function(){},
            end: function(){}
        }
    }
    else {
        throw new Error('You must set NODE_ENV');
    }
}