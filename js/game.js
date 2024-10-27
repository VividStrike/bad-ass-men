class Game {
    constructor() {

    }

    preload(){

    }

    setup(factory){
        this.object = new Group();
        this.object.push(factory.createObject(100,100));
        this.object.push(factory.createObject(200,100));
        this.object.push(factory.createObject(300,100));
    }

    draw(){
        background('purple');
    }
}