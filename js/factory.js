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
        object.w = 50;
        object.h = 50;
        return object;
    }
}