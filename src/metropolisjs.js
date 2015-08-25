import mathjs from 'mathjs';
import underscore, {random} from 'underscore';

export class Metropolisjs {
    constructor(mindensity=0, maxdensity=10){
        this.mindensity = 0;
        this.maxdensity = 10;
    }

    fit(state, startx, q, n) {
        let i = 0;
        let result = [];
        let xcurrent = startx;
        while(i != n) {
            let x = q(xcurrent);
            let u = Math.random();
            let A = mathjs.min(1, state/x);
            if(u <= A) {
                xcurrent = x;
            }

        }
    }
}
