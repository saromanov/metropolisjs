import mathjs from 'mathjs';

export class Metropolisjs {
    constructor(mindensity=0, maxdensity=10){
        this.mindensity = 0;
        this.maxdensity = 10;
    }

    //state - initial state
    //startx - initial value
    //q - target distribution
    //n - number of sampels
    fit(state, q, n, startx=-1) {
        let i = 0;
        let result = [];
        let xcurrent = startx;
        while(i != n) {
            let u = Math.random();
            let xn = q(u);
            let A = mathjs.min(1, xn/startx);
            if(u <= A) {
                xcurrent = x;
            }

        }
    }
}
