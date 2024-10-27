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
}