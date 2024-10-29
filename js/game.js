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
            let index = this.playerOne.push(factory.createMeleeGuy(mouse.x, mouse.y, 'blue'));
            // this.playerOne.push(factory.createRange(this.playerOne[index-1].x, this.playerOne[index-1].y, 100));
        }
        // if (mouse.presses('right')) {
        //     this.playerOne.push(factory.createRangeGuy(mouse.x, mouse.y, 'blue'));
        // }
        for (let i = 3; i < this.playerOne.length; i++) {
            if (this.playerOne[i].type = 2) {
                control.apply_logic(this.playerOne[i]);
            }
        }

        control.shooting_physics();
    }

    // put functions here

    // Model
    spawn_sprites() {
        this.playerOne = new Group();
        // index 0
        this.playerOne.push(factory.createBase(100, H / 2, "blue"));
        // index 1
        this.playerOne.push(factory.createTower(300, H / 2 - 250, "blue", 45));
        // index 2
        this.playerOne.push(factory.createTower(300, H / 2 + 250, "blue", 315));

        this.playerTwo = new Group();
        // index 0
        this.playerTwo.push(factory.createBase(W - 100, H / 2, "red"));
        // index 1
        this.playerTwo.push(factory.createTower(W - 300, H / 2 - 250, "red", 315));
        // index 2
        this.playerTwo.push(factory.createTower(W - 300, H / 2 + 250, "red", 45));

        this.nodes = new Group();
        // index 0 P1 Base
        this.nodes.push(factory.createNode(170, H / 2));
        // index 1 P1 Bot tower
        this.nodes.push(factory.createNode(330, H / 2 + 220));
        // index 2 P1 Top tower
        this.nodes.push(factory.createNode(330, H / 2 - 220));

        // let distance = (this.playerOne[1].x)

        // for (let i = 0; i < this.nodes.length; i ++) {
        //     for (let j = 0; j < this.playerOne.length; j++) {
        //         this.nodes[i].overlaps(this.playerOne[j]);
        //     }
        // }
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