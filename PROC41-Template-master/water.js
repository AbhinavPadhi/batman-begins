class water {

    constructor(x, y, r) {

        var options = {

            isStatic: false,
            restitution: 0.5

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, this.r / 2, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y - 10);
        ellipseMode(RADIUS);
        fill("#22a6b3");
        ellipse(0, 0, this.r, this.r);
        pop();
    }

    update() {
        if (this.body.position.y >= 900) {
            Matter.Body.setPosition(this.body, {
                x: random(0, 400),
                y: -10
            })
        }
    }
}