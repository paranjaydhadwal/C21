var sun,
    mercury,
    venus,
    mars,
    earth,
    jupiter,
    saturn,
    uranus,
    neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload() {
    sunImg = loadImage("6.png");
    mercuryImg = loadImage("1.png.png");
    venusImg = loadImage("2.png.png");
    earthImg = loadImage("3.png.png");
    marsImg = loadImage("4.png.png");
     jupeterImg = loadImage("5.png.png");
    // saturnImg = loadImage("s.jpg");
    // uranusImg = loadImage("n.jpg");
    // neptuneImg = loadImage("ep.png");

}

function setup() {
    createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.addImage("sun", sunImg);
    sun.scale = 0.3;
    sun.setCollider("circle", -85, -60, 140);
    sun.debug = true;

    mercury = createSprite(70, 50);
    mercury.addImage("mercury",mercuryImg);
    mercury.scale = 0.3;
    mercury.setCollider("circle", 0, 0, 300);
    mercury.debug = true;


    venus = createSprite(210, 60);
    venus.addImage("venus",venusImg);
    venus.scale = 0.35;
    venus.debug = true;

    earth = createSprite(150, -18);
    earth.addImage("earth", earthImg);
    earth.scale = 0.52;
    earth.debug = true;
    mars = createSprite(30, 220);
    mars.addImage("mars", marsImg);
    mars.scale = 0.4;
    mars.debug = true;

    jupiter = createSprite(-180, 210);
    jupiter.addImage("jupiter", jupeterImg);
    jupiter.scale = 0.5;
    jupiter.debug=true;

}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width /3, height/3 );
    rotate(angle);

    if (sun.collide(mercury)) {
        mercury.destroy();
    }
    if (sun.collide(venus)) {
        venus.destroy();
    }
    if (sun.collide(mars)) {
        mars.destroy();
    }
    if (sun.collide(earth)) {
        earth.destroy();
    }
    if (sun.collide(jupiter)) {
        jupiter.destroy();
    }

    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.01;
    }
    drawSprites();
}