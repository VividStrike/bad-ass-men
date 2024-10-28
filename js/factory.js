class Factory {
    constructor() {

    }

    preload(){
        this.genericswordguy = loadImage('/assets/genericsword.png');
    }

    setup(){

    }

    draw(){

    }

    createObject(x, y) {
        let object = new Sprite(x, y);
        object.color = 'red';
        object.d = 50;
        return object;
    }

    createBase(x, y, color) {
        let object = new Sprite(x, y);
        // visual
        object.draw = () => {
            fill(color);
            rect(0, 0, 100, 100);
            textSize(20);
            fill('black');
            text(object.health, 0, 0);
        }
        object.collider = 's';

        // stats
        object.type = 1;
        object.health = 100;

        return object;
    }

    createMeleeGuy(x, y, color) {
        let jointed;
        let object1 = new Sprite(x, y);
        let range = new Sprite(x, y);

        // visual
        object1.img = this.genericswordguy;
        object1.color = color;
        object1.w = 20;
        object1.h = 20;
        
        // stats
        range.w = 20;
        range.visible = false;
        range.h = 20;
        range.type = 2;
        range.damage = 10;

        jointed = new GlueJoint(object1, range);

        return range;
    }

    createRangeGuy(x, y, color) {
        let object = new Sprite(x, y);
        // visual
        object.color = color;
        object.d = 30;

        // stats
        object.type = 3;
        object.damage = 20;

        return object;
    }
}