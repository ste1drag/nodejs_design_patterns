const stampit = require('stampit');

const character = stampit().
            props({
                name:'anonymous',
                lifePoints: 100,
                x: 0,
                y: 0
            });

const c = character();

c.name = 'John';
c.lifePoints = 10;

console.log(c);

const mover = stampit()
            .methods({
                move(xIncr, yIncr) {
                    this.x += xIncr;
                    this.y += yIncr;
                    console.log(`${this.name} has been moved to [${this.x}, ${this.y}]`)
                }
            })


const slasher = stampit()
            .methods({
                slash(direction) {
                    console.log(`${this.name} slash ${direction}}`)
                }
            })

const shooter = stampit()
            .methods({
                shoot(direction) {
                    if(this.bullets >0){
                        --this.bullets;
                        console.log(`${this.name} shoots on ${direction}`);
                    }
                }
            })

const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamurai = stampit.compose(gunslinger, samurai);

const gojiro = westernSamurai();
gojiro.name = 'Yojimbo';
gojiro.move(1,0);
gojiro.slash('right');
gojiro.shoot('left');
