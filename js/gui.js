class Loading {
    constructor() {

    }

    preload() {

    }

    setup() {
        this.timer = 30;
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
        }
    }
}

class Menu {
    constructor() {

    }

    preload() {

    }

    setup() {
        this.create_buttons();
    }

    draw() {
        background('blue');

        // menu text
        textSize(30);
        fill('white');
        text('Main Menu', 30, 50);

        // add button functions
        this.enable_menu_buttons();
        this.bind_button_events();
    }

    create_buttons() {
        // button configs
        let button_x = W/2;
        let button_y = H/2;
        let button_width = 100;
        let button_height = 30;
        let button_space = 50;

        // button sprites
        this.play_button = new Sprite();
        this.apply_button_style(this.play_button, button_x, button_y + (button_space * 0), button_width, button_height, "Play");

        this.deck_button = new Sprite();
        this.apply_button_style(this.deck_button, button_x, button_y + (button_space * 1), button_width, button_height, "Deck");

        this.config_button = new Sprite();
        this.apply_button_style(this.config_button, button_x, button_y + (button_space * 2), button_width, button_height, "Config");

        this.exit_button = new Sprite();
        this.apply_button_style(this.exit_button, button_x, button_y + (button_space * 3), button_width, button_height, "Exit");
    }

    bind_button_events() {
        if (this.play_button.mouse.presses()) {
            current_screen = GAME;
            this.disable_menu_buttons();
        }
        if (this.deck_button.mouse.presses()) {
            console.log("Deck, Under Construction!");
        }
        if (this.config_button.mouse.presses()) {
            console.log("Config, Under Construction!")
            // current_screen = CONFIG;
            // this.disable_menu_buttons();
        }
        if (this.exit_button.mouse.presses()) {
            console.log("Exit, Under Construction!");
        }
    }

    enable_menu_buttons() {
        let buttons = [this.play_button, this.deck_button, this.config_button, this.exit_button];
        for (let button of buttons) {
            button.visible = true;
            button.collider = 'k';
        }
    }

    disable_menu_buttons() {
        let buttons = [this.play_button, this.deck_button, this.config_button, this.exit_button];
        for (let button of buttons) {
            button.visible = false;
            button.collider = 'n';
        }
    }

    apply_button_style(button, x, y, w, h, label) {
        button.x = x;
        button.y = y;
        button.w = w;
        button.h = h;
        button.draw = () => {
            let hoverEffect = 0;
            if (button.mouse.hovering()) {
                hoverEffect = -3;
            } else {
                hoverEffect = 0;
            }

            // button background
            fill("gray");
            rect(hoverEffect, hoverEffect, w, h);

            // button label
            fill("dark");
            textSize(20);
            textAlign(CENTER, CENTER);
            text(label, hoverEffect, hoverEffect);
        }
        button.visible = false;
        button.collider = 'n';
    }
}