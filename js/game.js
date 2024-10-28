class Game {
    constructor() {

    }

    preload() {

    }

    setup() {
        // this.create_buttons();

        this.spawn_sprites();
    }

    draw() {
        background('gray');

        // add button functions
        // this.enable_game_buttons();
        // this.bind_button_events();

        // put stuffs here

        if (kb.presses('space')) {
            this.playerOne.push(factory.createMeleeGuy(mouse.x, mouse.y, 'blue'));
        }
        // if (mouse.presses('right')) {
        //     this.playerOne.push(factory.createRangeGuy(mouse.x, mouse.y, 'blue'));
        // }
        for (let i = 1; i < this.playerOne.length; i++) {
            if (this.playerOne[i].type = 2) {
                this.apply_logic(this.playerOne[i]);
            }
        }

        this.shooting_physics();
    }

    // put functions here

    // Model
    spawn_sprites() {
        this.playerOne = new Group();
        this.playerOne.push(factory.createBase(100, H / 2, "blue"));

        this.playerOneTowers = new Group();
        this.playerOneTowers.push(factory.createBase(300, H / 2 - 200, "blue"));
        this.playerOneTowers.push(factory.createBase(300, H / 2 + 200, "blue"));

        this.playerTwo = new Group();
        this.playerTwo.push(factory.createBase(W - 100, H / 2, "red"));

        this.playerTwoTowers = new Group();
        this.playerTwoTowers.push(factory.createBase(W - 300, H / 2 - 200, "red"))
        this.playerTwoTowers.push(factory.createBase(W - 300, H / 2 + 200, "red"))
    }

    // Control
    apply_logic(object) {
        let angle = atan2(this.playerTwo[0].y - object.position.y, this.playerTwo[0].x - object.position.x);
        object.rotateTo(angle)
        if (object.rotation = angle) {
            object.direction = angle;
            object.speed = 2;
        }
        
        if (object.colliding(this.playerTwo[0])) {
            this.playerTwo[0].health -= object.damage;
            object.moveTowards(this.playerTwo[0].x, this.playerTwo[0].y, 0);
            object.speed = 0;
        }
    }

    shooting_physics() {
        let mouse_dragged = false;
        let source = this.playerOne[0];
        if (source.mouse.presses()) {
            this.index = this.playerOne.push(factory.createMeleeGuy(mouse.x, mouse.y, 'blue'));
        }
        let target = this.playerOne[this.index - 1];
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




    // Button Related Functions
    create_buttons() {
        // button configs
        let button_x = W / 2 - 70;
        let button_y = H - 30;
        let button_width = 100;
        let button_height = 30;
        let button_space = 150;

        this.game_quit_button = new Sprite();
        menu.apply_button_style(this.game_quit_button, button_x, button_y, button_width, button_height, "Quit");

        this.game_config_button = new Sprite();
        menu.apply_button_style(this.game_config_button, button_x + button_space, button_y, button_width, button_height, "Config");
    }

    bind_button_events() {
        if (this.game_quit_button.mouse.presses()) {
            current_screen = MENU;
            this.disable_game_buttons();
            game_setup = false;

            // remove all sprite groups
            this.object.remove();


        }
        if (this.game_config_button.mouse.presses()) {
            console.log("Config, Under Construction!");
            // current_screen = CONFIG;
            // this.disable_game_buttons();
        }
    }

    enable_game_buttons() {
        let buttons = [this.game_quit_button, this.game_config_button];
        for (let button of buttons) {
            button.visible = true;
            button.collider = 'k';
        }
    }

    disable_game_buttons() {
        let buttons = [this.game_quit_button, this.game_config_button];
        for (let button of buttons) {
            button.visible = false;
            button.collider = 'n';
        }
    }
}