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
    apply_logic(object) {
        let angle = atan2(game.playerTwo[0].y - object.position.y, game.playerTwo[0].x - object.position.x);
        object.rotateTo(angle)
        if (object.rotation = angle) {
            object.direction = angle;
            object.speed = 2;
        }
        if (object.colliding(game.playerTwo[0])) {
            game.playerTwo[0].health -= object.damage;
            object.moveTowards(game.playerTwo[0].x, game.playerTwo[0].y, 0);
            object.speed = 0;
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
        console.log(mouse_dragged);
    }

    destroy_base() {
        
    }
}