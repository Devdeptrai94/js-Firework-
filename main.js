import Firework from './firework.js';
export var fireworks = [];

setInterval(() => {
    var firework = new Firework();
    fireworks.push(firework);
}, 200);

setInterval(() => {
    fireworks.forEach((firework) => {
        firework.update();
        firework.show();
    });
}, 20);