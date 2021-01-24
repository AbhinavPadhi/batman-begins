// pls check readme
var thunderImg1;
var thunderImg2;
var thunderImg3;
var thunderImg4;

var batmanImage;

var thunderDisplayFrame;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var waterDrops = [];
var maxDrops = 100;
var drops = 0;
var ball;

function preload() {
    thunderImg1 = loadImage("images/1.png");
    thunderImg2 = loadImage("images/2.png");
    thunderImg3 = loadImage("images/3.png");
    thunderImg4 = loadImage("images/4.png");

    batmanImage = loadImage("images/walking_1.png");
}

function setup() {
    createCanvas(400, 800);

    engine = Engine.create();
    world = engine.world;

    var ballOption = {
        isStatic: true
    }

    ball = Bodies.circle(215, 513, 118, ballOption);
    World.add(world, ball);


}

function draw() {
    background("black");

    Engine.update(engine);

    if (frameCount % 2 == 0 && drops <= 100) {
        waterDrops.push(new water(random(0, 400), -10, 5));
        drops = drops + 1;
    }

    for (g = 0; g < waterDrops.length; g++) {
        waterDrops[g].display();
        waterDrops[g].update();
    }

    if (frameCount % 120 == 0) {

        var rand = Math.round(random(1, 4));

        thunderDisplayFrame = frameCount;

        thunder = createSprite(random(100, 300), random(100, 200), 10, 10);
        switch (rand) {
            case 1:
                thunder.addImage(thunderImg1);
                break;
            case 2:
                thunder.addImage(thunderImg2);
                break;
            case 3:
                thunder.addImage(thunderImg3);
                break;
            case 4:
                thunder.addImage(thunderImg4);
                break;
        }
    }
    if (thunderDisplayFrame + 10 == frameCount && thunder) {
        thunder.destroy();
    }

    imageMode(CENTER)
    image(batmanImage, 200, 590, 500, 500)

    drawSprites();
}