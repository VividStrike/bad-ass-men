// const W = window.innerWidth; // 1500
// const H = window.innerHeight*0.99; // 850
const W = 1500;
const H = 850;

// for screen states
const LOADING = 0;
const MENU = 1;
const GAME = 2;
const CONFIG = 3;

// first screen state
let current_screen = GAME;

// importing classes
let factory = new Factory();
let logic = new Logic();
let game = new Game();
let loading = new Loading();
let menu = new Menu();
let config = new Setting();

function preload() {

}

function setup() {
    canvas = new Canvas(W, H);

    // setup band-aid
    game_setup = false;
    loading.setup();
    // menu.setup();
    config.setup();
}

function draw() {
    // switches screen states
    switch (current_screen) {
        case LOADING:
            loading.draw();
            break;
        case MENU:
            menu.draw();
            break;
        case GAME:
            draw_game();
            break;
    }
}

function draw_game() {
    // Game Setup
    if (game_setup == false) {
        game.setup(factory);
        game_setup = true;
    }

    // Import Factory
    game.factory = factory;
    game.logic = logic;

    // Game Draw
    game.draw();
}