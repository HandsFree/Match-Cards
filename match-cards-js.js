const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

// center text
var w = canvas.width / 2;

// initial screen
var splashSc = true;
// explaining screen
var instructionsSc = false;
// main screen
var gameSc = false;

const inBall = {
    bWidth: 70,
    bHeight: 100,
    x: 610,
    y: 400
};

const keys = []; // keyboard operations

//start speech
const speech = new Image();
speech.src = "images/speech.png";

//start splash screen
const bnSplash = new Image();
bnSplash.src = "images/bnSplashScn.png";





