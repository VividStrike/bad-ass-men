// import * as VAR from './variables.js';
// const W = window.innerWidth; //1500
// const H = window.innerHeight*0.99; //850
const W = 1500; //1500
const H = 850; //850

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
let config = new Config();
let control = new Control();

// check if game is already setup or not
let game_setup = false;


function preload() {
    game.preload();
    menu.preload();
    loading.preload();
    config.preload();
    factory.preload();
}

function setup() {
    canvas = new Canvas(W, H);
    // setup band-aid
    menu.setup();
    loading.setup();
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
        case CONFIG:
            config.draw();
            break;
    }
}

function draw_game() {
    // Game Setup
    if (game_setup == false) {
        game.setup();
        game_setup = true;
    }

    // Game Draw
    game.draw();
}