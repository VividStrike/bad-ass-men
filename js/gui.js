class Loading {
    constructor() {

    }

    preload() {

    }

    setup() {
        this.timer = 1;
    }

    draw() {
        background('red');

        //Loading Text
        textSize(50);
        fill('white');
        text('Loading . . .', 0, H / 2);

        // timer for loading screen
        this.timer--;
        if (this.timer <= 0) {
            current_screen = MENU;
            menu.setup();
        }
    }
}

class Menu {
    constructor() {

    }

    preload() {

    }

    setup() {
        // create menu buttons
        this.create_buttons();
    }

    draw() {
        background('blue');

        //Menu Text
        textSize(30);
        fill('white');
        text('Main Menu', 30, 50);

        this.button_functions();
    }

    create_buttons() {
        textSize(20);

        // game button
        this.game_button = new Sprite(W / 2, H / 2);
        this.game_button.w = 100;
        this.game_button.h = 30;
        this.game_button.text = "Play";
        this.game_button.color = 'red';
        this.game_button.visible = true;
        this.game_button.collider = 'n';

        // game button
        this.config_button = new Sprite(W / 2, H / 2 + 50);
        this.config_button.w = 100;
        this.config_button.h = 30;
        this.config_button.text = "Setting";
        this.config_button.color = 'red';
        this.config_button.visible = true;
        this.config_button.collider = 'n';

        // game button
        this.exit_button = new Sprite(W / 2, H / 2 + 100);
        this.exit_button.w = 100;
        this.exit_button.h = 30;
        this.exit_button.text = "Exit";
        this.exit_button.color = 'red';
        this.exit_button.visible = true;
        this.exit_button.collider = 'n';
    }

    button_functions() {
        console.log(current_screen);
        if(this.game_button.mouse.presses()) {
            current_screen = GAME;
        }
        if(this.config_button.mouse.presses()) {
            current_screen = CONFIG;
        }
        if(this.exit_button.mouse.presses()) {

        }
    }
}