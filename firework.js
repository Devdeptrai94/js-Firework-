import Bullet from './bullet.js';
import { fireworks } from './main.js';

var color = ['red', 'blue', 'green', 'yellow', 'white'];

export default class Firework {
    constructor() {
        this.x = Math.random() * (window.innerWidth - 100);
        this.y = window.innerHeight - 10;
        this.v = 10;
        this.vy = Math.random() * 5 + this.v;
        this.background = color[Math.floor(Math.random() * color.length)];
        this.firework = document.createElement('div');
        this.firework.className = 'firework';
        this.firework.style.position = 'absolute';
        this.firework.style.left = this.x + 'px';
        this.firework.style.top = this.y + 'px';
        this.firework.style.width = 3 + 'px';
        this.firework.style.height = 3 + 'px';
        this.firework.style.background = this.background;
        document.querySelector('body').append(this.firework);
        this.bullets = [];
    }

    update = () => {
        this.vy -= 0.2;
        if (this.vy <= 0) {
            this.removeFirework();
            this.creatBullet();
            this.bullets.forEach((bullet) => {
                bullet.update();
                bullet.show();
            })
            return;
        }
        this.y -= this.vy;
    }

    show = () => {
        this.firework.style.top = this.y + 'px';
    }
 
    removeFirework = () => {
        this.firework.remove();
        fireworks.splice(fireworks.indexOf(this), 1);
    }
    
    creatBullet = () => {
        for (var i = 0; i < 40; i++) {
            var bullet = new Bullet(this.x, this.y, this.background);
            this.bullets.push(bullet);
        }
    }
}