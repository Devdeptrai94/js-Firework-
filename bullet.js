export default class Bullet {
    constructor(x, y, background) {
        this.x = x;
        this.y = y;
        this.width = 4;
        this.height = 4;
        this.background = background;
        this.angle = Math.random() * Math.PI * 2;
        this.v = Math.random() * 2 + 3;
        this.bullet = document.createElement('div');
        this.bullet.className = 'bullet';
        this.bullet.style.position = 'absolute';
        this.bullet.style.background = this.background;
        this.bullet.style.width = this.width + 'px';
        this.bullet.style.height = this.height + 'px';
        document.querySelector('body').append(this.bullet);
    }
    update = () => {
        setInterval(() => {
            this.width -= 0.2;
            this.height -= 0.2;
            this.x = this.x + this.v * Math.cos(this.angle);
            this.y = this.y + this.v * Math.sin(this.angle);
        }, 40)
    }

    show = () => {
        setInterval(() => {
            if( this.width < 0 ||
                this.x < 10 ||
                this.x > window.innerWidth - 10 ||
                this.y > window.innerHeight ||
                this.y < 0 ) {
                    this.bullet.remove();
                }
            this.bullet.style.left = this.x + 'px';
            this.bullet.style.top = this.y + 'px';
            this.bullet.style.width = this.width + 'px';
            this.bullet.style.height = this.height + 'px';
        }, 40)
    }
}
