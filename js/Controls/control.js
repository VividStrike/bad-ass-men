let angle = -2500;
let direction = 1;
let mode = false;

class Control {
    constructor() {

    }

    preload() {

    }

    setup() {

    }

    draw() {

    }

    // Control
    apply_logic_to_units(object, enemies, nodes) {
        // switch between defense and attack mode
        this.mode_switch_logic(object);

        // drawing indicator for range
        noFill();
        stroke('red');
        strokeWeight(3);
        circle(object.x, object.y, object.current_search_range * 2);
        stroke('black');
        strokeWeight(1);
        fill('gray');

        /////////////////////////////
        // Target Finding Sequence //
        /////////////////////////////

        // find enemy within range first
        for (let enemy of enemies) {
            let distance = dist(object.x, object.y, enemy.x, enemy.y);
            if (distance < object.target_enemy_distance && distance < object.current_search_range) {
                object.target_enemy_distance = distance;
                object.target_enemy = enemy;
            }

            if (object.target_enemy && !enemies.includes(object.target_enemy)) {
                // reset everything if the target enemy is no longer active 
                console.log("target is dead")
                object.target_enemy = null;
                object.target_enemy_distance = Infinity;
                object.target_node = null;
                object.target_node_distance = Infinity;
                continue;
            }
        }

        // if there is enemy within range
        if (object.target_enemy != null) {

            // go to that enemy
            this.movement_logic(object.target_enemy, object);

            this.deal_damage(object, object.target_enemy);

            // // if they collide, do the following
            // if (object.colliding(object.target_enemy)) {

            //     // object.target_enemy.health -= object.damage;
            //     // object.moveTowards(object.target_enemy.x, object.target_enemy.y, 0);
            //     object.speed = 0;
            //     if (object.collides(object.target_enemy)) {
            //         // do damage or remove unit here
            //         object.target_enemy.remove();

            //         // reset everything if the target enemy is no longer active 
            //         object.target_enemy = null;
            //         object.target_enemy_distance = Infinity;
            //         object.target_node = null;
            //         object.target_node_distance = Infinity;
            //     }
            // }

            // if there is no enemy within range, go to nodes
        } else {

            // if there is no node currently targeting
            if (object.target_node == null) {
                object.target_node_distance = Infinity;

                // find the nearest node and add as a target
                for (let node of nodes) {
                    let distance = dist(object.x, object.y, node.x, node.y);
                    if (distance < object.target_node_distance) {
                        object.target_node_distance = distance;
                        object.target_node = node;
                    }
                }

                // if target node already exist
            } else {

                // and it is currently overlapping that node
                if (object.overlaps(object.target_node)) {
                    object.target_node_distance = Infinity;

                    // find the next node and set it as target

                    let next_node = nodes.find(n => n.id === object.target_node.id + object.team_switch && n.side === object.target_node.side);

                    if (next_node) {
                        object.target_node = next_node;
                    }

                }
            }

            // move to the target node
            this.movement_logic(object.target_node, object);
        }
    }

    apply_overlap(object) {
        if (object.overlaps(game.playerTwo[0])) {
            game.playerTwo[0].health -= object.damage;
            object.moveTowards(game.playerTwo[0].x, game.playerTwo[0].y, 0);
            object.speed = 0;
        }
    }

    movement_logic(target, object) {
        let angle = atan2(target.y - object.position.y, target.x - object.position.x);
        object.rotateTo(angle)



        if (object.rotation = angle) {
            object.direction = angle;

            // calculate the effective range for targets as some target has bigger w and h
            // and bigger sized sprite means the object with lower attack range cannot hit them 
            let effective_range = object.attack_range + max(target.w, target.h) / 2;

            // noFill();
            // stroke('green');
            // strokeWeight(5);
            // circle(target.x, target.y, effective_range);
            // stroke('black');
            // strokeWeight(1);
            // fill('gray');

            if (dist(object.x, object.y, target.x, target.y) < effective_range && target.type != 5) {
                object.speed = 0;
            } else {
                object.speed = object.movement_speed;
            }
        }
    }

    deal_damage(object, target) {


        let current_time = millis();
        let attack_interval = 1000 / object.attack_speed;

        if (!object.last_attack) {
            object.last_attack = 0;
        }

        let effective_range = object.attack_range + max(target.w, target.h) / 2;

        if (dist(object.x, object.y, target.x, target.y) < effective_range &&
            current_time - object.last_attack >= attack_interval) {
            target.health -= object.damage;
            object.last_attack = current_time;

            // Guide line to indicate current targets
            stroke('red');
            strokeWeight(10);
            line(object.x, object.y, target.x, target.y);
            stroke('black');
            strokeWeight(1);
        }

        if (target.health <= 0) {
            target.remove();
        }
    }

    mode_switch_logic(object) {
        // half search range of units between attack and defense mode
        if (object.x >= W / 2) {
            object.current_search_range = object.default_search_range;
        } else {
            object.current_search_range = object.default_search_range;
        }
    }

    slingshot_logic() {
        let mouse_dragged = false;
        let source = game.playerOne[0];
        if (source.mouse.presses()) {
            game.index = game.playerOne.push(factory.createMeleeGuy(mouse.x, mouse.y, 'blue'));
        }
        let target = game.playerOne[game.index - 1];
        if (source.mouse.dragging()) {
            target.x = mouse.x;
            target.y = mouse.y;
            stroke('black');
            strokeWeight(3);
            line(source.x, source.y, target.x, target.y);
            strokeWeight(1);
            let distance = dist(source.x + 20, source.y, target.x, target.y)
            if (distance > 150) {
                distance = 150;
            }
            let angle = 0;
            if (target.angleTo(target) > 0) {
                angle = -Math.floor(target.angleTo(target));
            } else if (target.angleTo(target) < 0) {
                angle = -Math.floor(target.angleTo(target));
            }
            mouse_dragged = true;
        }
        if (mouse.released()) {

        }
    }

    destroy_base() {

    }
}
