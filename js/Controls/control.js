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
    apply_logic(object, enemies) {


        // Find closest objectTwo
        let closest_enemy = null;
        let closest_enemy_distance = Infinity;

        // Find closest objectTwo
        let closest_node = null;
        let closest_node_distance = Infinity;

        for (let enemy of enemies) {
            let distance = dist(object.x, object.y, enemy.x, enemy.y);
            if (distance < closest_enemy_distance && distance < object.range) {
                closest_enemy_distance = distance;
                closest_enemy = enemy;
            }
        }

        if (closest_enemy != null) {
            this.movement_logic(closest_enemy, object);
            if (object.colliding(closest_enemy)) {
                // closest_enemy.health -= object.damage;
                object.moveTowards(closest_enemy.x, closest_enemy.y, 0);
                object.speed = 0;
                if (object.collides(closest_enemy)) {
                    // object.remove();
                    closest_enemy.remove();
                }
            }
        } else {
            // let angle = atan2(game.playerTwo[0].y - object.position.y, game.playerTwo[0].x - object.position.x);
            // object.rotateTo(angle)
            // if (object.rotation = angle) {
            //     object.direction = angle;
            //     object.speed = 2;
            // }
            
            for (let node of game.nodes) {
                let distance = dist(object.x, object.y, node.x, node.y);
                if (distance < closest_node_distance) {
                    closest_node_distance = distance;
                    closest_node = node;
                }
            }
            this.movement_logic(closest_node, object);

            if (object.overlaps(closest_node)) {
                // let current_node = closest_node;
                closest_node_distance = Infinity;
                console.log()

                // for (let node of game.nodes) {
                //     let distance = dist(object.x, object.y, node.x, node.y);
                //     if (distance < closest_node_distance) {
                //         closest_node_distance = distance;
                //         closest_node = node;
                //     }
                // }

                // this.movement_logic(closest_node, object);
            }
            // if (game.nodes.length == object.target) {
            //     object.target = game.nodes.length - 1;
            // }
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
        stroke('red');
        strokeWeight(3);
        line(object.x, object.y, target.x, target.y);
        stroke('black');
        strokeWeight(1);
        if (object.rotation = angle) {
            object.direction = angle;
            object.speed = 2;
        }
    }

    shooting_physics() {
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
        // console.log(mouse_dragged);
    }

    destroy_base() {

    }
}