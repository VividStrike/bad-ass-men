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

        if (mouse.presses('left')) {
            this.playerOne.push(factory.createMeleeGuy(mouse.x, mouse.y, 'blue'));
        }
        if (mouse.presses('right')) {
            this.playerOne.push(factory.createRangeGuy(mouse.x, mouse.y, 'blue'));
        }
        for (let i = 0; i < this.playerOne.length; i++) {
            if (this.playerOne[i].type = 2) {
                this.apply_logic(this.playerOne[i]);
            }
        }
    }

    // put functions here

    // Model
    spawn_sprites() {
        this.playerOne = new Group();
        this.playerOne.push(factory.createBase(100, H / 2, "blue"));

        this.playerTwo = new Group();
        this.playerTwo.push(factory.createBase(W - 100, H / 2, "red"));
    }

    // Control
    apply_logic(object) {
        
        object.moveTo(this.playerTwo[0].x, this.playerTwo[0].y, 10);

        if (object.colliding(this.playerTwo[0])) {
            object.collider = 'k';
            this.playerTwo[0].health -= object.damage;
        }
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