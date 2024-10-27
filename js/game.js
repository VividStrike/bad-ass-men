class Game {
    constructor() {

    }

    preload() {

    }

    setup() {
        this.create_buttons();

        this.spawn_sprites();
    }

    draw() {
        background('purple');

        // add button functions
        this.enable_game_buttons();
        this.bind_button_events();

        // put stuffs here
        if (mouse.presses('right')) {
            this.object.moveTo(mouse.x, mouse.y, 10);
        }






    }

    // put functions here
    spawn_sprites() {
        this.object = new Group();
        this.object.push(factory.createObject(100+1, 100));
        this.object.push(factory.createObject(100+2, 100));
        this.object.push(factory.createObject(100, 100+1));
        this.object.push(factory.createObject(100, 100+2));
        this.object.push(factory.createObject(100, 100));
        this.object.push(factory.createObject(100+1, 100+1));
        this.object.push(factory.createObject(100+2, 100+2));
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