let layer1;
let layer2;

class Factory {
    constructor() {

    }

    preload() {
        // this.generic_sword_guy = loadImage('/assets/genericsword.png');
    }

    setup() {

    }

    draw() {

    }

    /////////////////////////
    // Creating Path-Nodes //
    /////////////////////////
    createNode(x, y, side, id) {
        let object = new Sprite(x, y);
        // visual
        object.color = "green";
        object.d = 10;
        object.collider = 'n';
        // object.visible = false;
        // object.debug = true;
        object.side = side;
        object.id = id;

        return object;
    }




    ////////////////////////
    // Creating Buildings //
    ////////////////////////

    //______ Building: Main Base ______//
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
        // object.debug = true;
        object.layer = 3;
        object.collider = 's';

        // stats
        object.type = 1;
        object.health = 100;

        return object;
    }

    //______ Building: Tower ______//
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
        // object.debug = true;

        // stats
        object.type = 1;
        object.health = 100;

        return object;
    }



    ////////////////////
    // Creating Units //
    ////////////////////

    //______ Function to mess apply stats ______//
    apply_default_stats(object, health, armor, damage, attack_speed, attack_range, search_range, movement_speed) {
        // target finding stats
        object.default_search_range = search_range; // hold default search range (should not be changed)
        object.current_search_range = search_range; // hold current search range (can be changed)
        object.target_node = null;
        object.target_node_distance = Infinity;
        object.target_enemy = null;
        object.target_enemy_distance = Infinity;

        // unit stats
        object.type = 2;                     // unit type (will always be 2 for units)
        object.health = health;                 // hit point / health
        object.armor = armor;                   // armor (reduce incoming damage)
        object.damage = damage;                 // damage (damage done per attack)
        object.attack_speed = attack_speed;     // attack speed (attacks per second)
        object.attack_range = attack_range;     // attack range (50 minimum especially melee units)
        object.movement_speed = movement_speed; // speed (normal should be 1)
    }

    //______ Unit: Melee ______//
    createMeleeGuy(x, y, color) {
        let object = new Sprite(x, y);

        // Visual Config
        // object.img = this.generic_sword_guy;
        object.color = color;
        object.w = 20;
        object.h = 20;
        //object.debug = true;

        // Stats Config
        this.apply_default_stats(
            object, // object
            100,    // health
            2,      // armor
            5,      // damage
            1,      // attack_speed
            50,     // attack_range
            100,    // search_range
            1       // movement_speed
        );

        return object;
    }

    //______ Unit: Range ______//
    createRangeGuy(x, y, color) {
        let object = new Sprite(x, y);

        // Visual Config
        // object.img = this.generic_sword_guy;
        object.color = color;
        object.d = 20;
        //object.debug = true;

        // Stats Config
        this.apply_default_stats(
            object, // object
            80,    // health
            0,      // armor
            5,      // damage
            1,      // attack_speed
            100,     // attack_range
            150,    // search_range
            1       // movement_speed
        );

        return object;
    }








    // Relic Codes (unused/old) 
    createRange(x, y, range) {
        let object = new Sprite(x, y);
        object.d = range;
        object.collider = 'k';
        object.debug = true;
        object.layer = 4;
        object.type = 4;
        return object;
    }
}