class Game {
    constructor() {

    }

    preload() {

    }

    setup() {
        this.top_counter = 0;
        
        this.create_buttons();
        model.spawn_sprites();
        
        this.p1_current_value_x = 200;
        this.p1_current_value_y = height / 2 + 200; // Use 'height' instead of 'H' for clarity
        
        this.p1_current_value_check = true;
    }
    
    draw() {
        background('gray');
        
        
        // model.spawn_nodes1(, , 10, this.top_counter);
        // model.spawn_nodes1(this.topRight, this.bottomRight, 4, this.top_counter);

        // add button functions
        this.enable_game_buttons();
        this.bind_button_events();

        // Middle Line
        stroke('green');
        strokeWeight(3);
        line(W / 2, 0, W / 2, H);
        stroke('black');
        strokeWeight(1);

        // Test Spawning Units
        if (kb.presses('q')) {
            let index = model.playerOne.push(factory.createMeleeGuy(mouse.x, mouse.y, 'blue', 1));
            // model.playerOne.push(factory.createRange(model.playerOne[index-1].x, model.playerOne[index-1].y, 100));
        }
        if (kb.presses('w')) {
            let index = model.playerOne.push(factory.createRangeGuy(mouse.x, mouse.y, 'blue', 1));
            // model.playerOne.push(factory.createRange(model.playerOne[index-1].x, model.playerOne[index-1].y, 100));
        }
        if (kb.presses('o')) {
            let index = model.playerTwo.push(factory.createMeleeGuy(mouse.x, mouse.y, 'red', -1));
            // model.playerOne.push(factory.createRange(model.playerOne[index-1].x, model.playerOne[index-1].y, 100));
        }
        if (kb.presses('p')) {
            let index = model.playerTwo.push(factory.createRangeGuy(mouse.x, mouse.y, 'red', -1));
            // model.playerOne.push(factory.createRange(model.playerOne[index-1].x, model.playerOne[index-1].y, 100));
        }


        stroke('green');
        strokeWeight(3);
        // line(model.playerOne[0].x + 70, model.playerOne[0].y - 20, model.playerOne[1].x + 30, model.playerOne[1].y + 30);
        // line(W / 2, 0, W / 2, H);
        // line(W / 2, 0, W / 2, H);
        // Draw trapezoid outline
        // line(this.bottomLeft.x, this.bottomLeft.y, this.topLeft.x, this.topLeft.y);
        // line(this.topLeft.x, this.topLeft.y, this.topRight.x, this.topRight.y);
        // line(this.topRight.x, this.topRight.y, this.bottomRight.x, this.bottomRight.y);
        stroke('black');
        strokeWeight(1);

        // // Check for space press and toggle behavior based on p1_current_value_check
        if (kb.presses("space")) {
            if (this.p1_current_value_check) {
                this.p1_current_value_y -= 400; // Move up
                this.p1_current_value_check = false; // Toggle state
            } else {
                this.p1_current_value_y += 400; // Move down
                this.p1_current_value_check = true; // Toggle state
            }
        }

        // if (mouse.presses('left')) {
        //     let index = model.playerOne.push(factory.createMeleeGuy(this.p1_current_value_x, this.p1_current_value_y, 'blue'));
        //     // this.playerOne.push(factory.createRange(this.playerOne[index - 1].x, this.playerOne[index - 1].y, 100));
        //     // console.log(current_value);
        // }



        // if (mouse.presses('right')) {
        //     this.playerOne.push(factory.createRangeGuy(mouse.x, mouse.y, 'blue'));
        // }
        for (let i = 3; i < model.playerOne.length; i++) {
            if (model.playerOne[i].type == 2) {
                control.apply_logic_to_units(model.playerOne[i], model.playerTwo, model.nodes);

                // model.playerOne[i+1].x = model.playerOne[i].x;
                // model.playerOne[i+1].y = model.playerOne[i].y;
                // model.playerOne[i+1].overlaps(model.playerOne);


                // for (let j = 0; j < model.playerTwo.length; j++ ) {
                //     if (model.playerOne[4].overlaps(model.playerTwo[0])) {
                //         console.log(j);
                //     //     control.movement(model.playerTwo, j, model.playerOne[i+1]);
                //     }
                // }
            }
        }

        for (let i = 3; i < model.playerTwo.length; i++) {
            if (model.playerTwo[i].type == 2) {
                control.apply_logic_to_units(model.playerTwo[i], model.playerOne, model.nodes);

                // model.playerOne[i+1].x = model.playerOne[i].x;
                // model.playerOne[i+1].y = model.playerOne[i].y;
                // model.playerOne[i+1].overlaps(model.playerOne);


                // for (let j = 0; j < model.playerTwo.length; j++ ) {
                //     if (model.playerOne[4].overlaps(model.playerTwo[0])) {
                //         console.log(j);
                //     //     control.movement(model.playerTwo, j, model.playerOne[i+1]);
                //     }
                // }
            }
        }


        control.throw();
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
            model.playerOne.remove();
            model.playerTwo.remove();
            model.nodes.remove();


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