class Model {
    constructor() {

    }

    preload() {

    }

    setup() {

    }

    draw() {

    }

    spawn_sprites() {
        this.spawn_playerOne();
        this.spawn_playerTwo();

        this.nodes = new Group();

        this.topLeft1 = createVector(this.playerOne[1].x + 30, this.playerOne[1].y + 30);
        this.topRight1 = createVector(this.playerTwo[1].x -30, this.playerTwo[1].y + 30);
        this.bottomLeft1 = createVector(this.playerOne[0].x + 70, this.playerOne[0].y - 20);
        this.bottomRight1 = createVector(this.playerTwo[0].x - 70, this.playerTwo[0].y - 20);

        this.spawn_node(this.bottomLeft1, this.topLeft1, this.topLeft1, this.topRight1, this.topRight1, this.bottomRight1, 1);

        this.topLeft2 = createVector(this.playerOne[0].x + 70, this.playerOne[0].y + 20);
        this.topRight2 = createVector(this.playerTwo[0].x - 70, this.playerTwo[0].y + 20);
        this.bottomLeft2 = createVector(this.playerOne[2].x + 35, this.playerOne[2].y - 20);
        this.bottomRight2 = createVector(this.playerTwo[2].x - 35, this.playerTwo[2].y - 20);

        this.spawn_node(this.topLeft2, this.bottomLeft2, this.bottomLeft2, this.bottomRight2, this.bottomRight2, this.topRight2, 2);

        // this.spawn_nodes();

        // this.nodesTop = new Group();

        // let distance = dist(this.playerOne[1].x, this.playerOne[1].y, this.playerTwo[1].x, this.playerTwo[1].y);
        // for (let i = 30; i < distance; i += distance / 15) {
        //     this.nodesTop.push(factory.createNode(this.playerOne[1].x + i, this.playerOne[1].y + 30, 1));
        // }


        // this.nodesBottom = new Group();
        // for (let i = 30; i < distance; i += distance / 15) {
        //     this.nodesBottom.push(factory.createNode(this.playerOne[2].x + i, this.playerOne[2].y - 30, 2));
        // }


        // this.nodeP1Base = new Group();
        // this.nodeP1Base.push(factory.createNode(170, H / 2, 1));


        // this.nodeP2Base = new Group();
        // this.nodeP2Base.push(factory.createNode(W - 170, H / 2, 2));

        // let distance = (this.playerOne[1].x)
    }

    spawn_playerOne() {
        this.playerOne = new Group();
        // index 0
        this.playerOne.push(factory.createBase(100, H / 2, "blue"));
        // index 1
        this.playerOne.push(factory.createTower(300, H / 2 - 250, "blue", 45));
        // index 2
        this.playerOne.push(factory.createTower(300, H / 2 + 250, "blue", 315));
    }

    spawn_playerTwo() {
        this.playerTwo = new Group();
        // index 0
        this.playerTwo.push(factory.createBase(W - 100, H / 2, "red"));
        // index 1
        this.playerTwo.push(factory.createTower(W - 300, H / 2 - 250, "red", 315));
        // index 2
        this.playerTwo.push(factory.createTower(W - 300, H / 2 + 250, "red", 45));
    }

    // spawn_nodes() {
    //     this.nodes = new Group();
    //     let dist_b_top_tower_to_base = dist(this.playerOne[0].x + 70, this.playerOne[0].y - 20, this.playerOne[1].x + 30, this.playerOne[1].y + 30);
    //     let dist_b_bottom_tower_to_base
    //     let dist_b_two_towers = dist(this.playerOne[1].x, this.playerOne[1].y, this.playerTwo[1].x, this.playerTwo[1].y);
    //     let top_counter = 0;

    //     // for (let i = 30; i < dist_b_top_tower_to_base; i += dist_b_top_tower_to_base / 7) {
    //     //     this.nodes.push(factory.createNode(this.playerOne[0].x + 40 + i, this.playerOne[0].y - i + 30, 1, 1 + top_counter));
    //     //     top_counter++;
    //     // }

    //     // for (let i = 30; i < dist_b_two_towers; i += dist_b_two_towers / 15) {
    //     //     this.nodes.push(factory.createNode(this.playerOne[1].x + i, this.playerOne[1].y + 30, 1, 1 + top_counter));
    //     //     top_counter++;
    //     // }

    //     // this.nodes.push(factory.createNode(W-170, H / 2 -30, 1, top_counter + 6));
    //     // this.nodes.push(factory.createNode(W-170 + 30, H / 2 -60, 1, top_counter + 5));
    //     // this.nodes.push(factory.createNode(W-170 + 60, H / 2 -90, 1, top_counter + 4));
    //     // this.nodes.push(factory.createNode(W-170 + 90, H / 2 -120, 1, top_counter + 3));
    //     // this.nodes.push(factory.createNode(W-170 + 120, H / 2 -150, 1, top_counter + 2));
    //     // this.nodes.push(factory.createNode(W-170 + 150, H / 2 -180, 1, top_counter + 1));


    //     let bottom_counter = 0;
    //     for (let i = 30; i < dist_b_two_towers; i += dist_b_two_towers / 15) {
    //         this.nodes.push(factory.createNode(this.playerOne[2].x + i, this.playerOne[2].y - 30, 2, 1 + bottom_counter));
    //         bottom_counter++;
    //     }

    //     this.nodes.push(factory.createNode(W - 170, H / 2, 0, 0));
    // }

    spawn_node(start1, end1, start2, end2, start3, end3, side) {
        let counter = 0;

        let count1 = 8; // Number of sprites to place
        for (let i = 0; i <= count1; i++) {
            let t = i / count1;
            let x = lerp(start1.x, end1.x, t);
            let y = lerp(start1.y, end1.y, t);
            fill('black');
            text(1 + counter, x, y);
            // ellipse(x, y, 20);
            this.nodes.push(factory.createNode(x, y, side, 1 + counter));
            counter++;
        }

        let count2 = 20; // Number of sprites to place
        for (let i = 0; i <= count2; i++) {
            let t = i / count2;
            let x = lerp(start2.x + 35, end2.x - 35, t);
            let y = lerp(start2.y, end2.y, t);
            fill('black');
            text(1 + counter, x, y);
            // ellipse(x, y, 20);
            this.nodes.push(factory.createNode(x, y, side, 1 + counter));
            counter++;
        }

        let count3 = 8; // Number of sprites to place
        for (let i = 0; i <= count3; i++) {
            let t = i / count3;
            let x = lerp(start3.x, end3.x, t);
            let y = lerp(start3.y, end3.y, t);
            fill('black');
            text(1 + counter, x, y);
            // ellipse(x, y, 20);
            this.nodes.push(factory.createNode(x, y, side, 1 + counter));
            counter++;
        }
    }
}