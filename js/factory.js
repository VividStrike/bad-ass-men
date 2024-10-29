let layer1;
let layer2;

class Factory {
    constructor() {

    }

    preload() {
        this.generic_sword_guy = loadImage('/assets/genericsword.png');
    }

    setup() {

    }

    draw() {

    }

    createObject(x, y) {
        let object = new Sprite(x, y);
        object.color = 'red';
        object.d = 50;
        return object;
    }

    createBase(x, y, color) {
        let object = new Sprite(x, y);
        object.w = 100;
        object.h = 100;
        // visual
        // object.draw = () => {
        //     fill(color);
        //     rect(0, 0, 100, 100);
        //     textSize(20);
        //     fill('black');
        //     text(object.health, 0, 0);
        // }
        //object.debug = true;
        object.layer = 3;
        object.collider = 's';

        // stats
        object.type = 1;
        object.health = 100;

        return object;
    }

    createTower(x, y, color, rotate) {
        let object = new Sprite(x, y);
        object.w = 50;
        object.h = 100;
        object.rotation = rotate;
        // visual
        // object.draw = () => {
        //     fill(color);
        //     rect(0, 0, 50, 100);
        //     textSize(20);
        //     fill('black');
        //     text(object.health, 0, 0);
        // }
        object.collider = 's';
        object.layer = 3;
        //object.debug = true;

        // stats
        object.type = 1;
        object.health = 100;

        return object;
    }

    createMeleeGuy(x, y, color) {
        // let jointed;
        let object = new Sprite(x, y);
        // let range = new Sprite(x, y);

        // visual
        object.img = this.generic_sword_guy;
        object.color = color;
        object.w = 20;
        object.h = 20;
        object.type = 2;
        object.damage = 10;
        //object.debug = true;
        object.target = 0;

        // stats
        // range.d = 100;
        // range.collider = 'k';
        // range.visible = false;
        // range.debug = true;

        // jointed = new GlueJoint(object, range);

        return object;
    }

    createRangeGuy(x, y, color) {
        let object = new Sprite(x, y);
        // visual
        object.color = color;
        object.d = 30;

        // stats
        object.type = 3;
        object.damage = 20;
        // object.layer = 3;
        return object;
    }

    createRange(x, y, range) {
        let object = new Sprite(x, y);
        object.d = range;
        object.collider = 'k';
        //object.debug = true;
        object.layer = 4;
        object.type = 4;
        return object;
    }
    
    createNode(x, y) {
        let object = new Sprite(x, y);
        // visual
        object.color = "green";
        object.d = 20;
        object.collider = 'n';
        //object.debug = true;
        // object.layer = 1;
        
        return object;
    }
}