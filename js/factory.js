class Factory {
    constructor() {

    }

    preload(){

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
        let object = new Sprite(x, y);
        // visual
        object.color = color;
        object.w = 30;
        object.h = 30;
        
        // stats
        object.type = 2;
        object.damage = 10;

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

        return object;
    }
}