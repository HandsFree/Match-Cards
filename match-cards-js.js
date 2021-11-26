const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

// center text
var w = canvas.width / 2;

// initial screen
var MCsplashSc = true;
// main screen
var MCgameSc = false;

const MCimage = {
    bWidth: 70,
    bHeight: 100,
    x: 610,
    y: 400
};

const keys = []; // keyboard operations

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
});

//Splash
const mcSplash = new Image();
mcSplash.src = "images/match-Cards.png";

const speech = new Image();
speech.src = "images/speech.png";

const amb = new Image();
amb.src = "images/ambulance.jpg";

const lam = new Image();
lam.src = "images/lamb.jpg";

const micro = new Image();
micro.src = "images/microwave.jpg";

const cow = new Image();
cow.src = "images/cow.jpg";

var sir = new Audio("sounds/siren1.mp3");

function closeSplash() {
    MCsplashSc = false;
    MCgameSc = true;
    window.removeEventListener("click", closeSplash);
}

function splash() {
    ctx.drawImage(mcSplash, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(95, 400, 1010, 300);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Click the left mouse button", w, 460);
    ctx.fillStyle = "red";
    ctx.fillText("or press the Spacebar", w, 525);
    ctx.fillStyle = "blue";
    ctx.fillText("or use your switch", w, 590);
    ctx.fillStyle = "purple";
    ctx.font='900 50px Comic Sans MS';
    ctx.fillText("to play!", w, 660);
    ctx.fillStyle = "white";
    ctx.fillRect(105, 410, 150, 140);
    ctx.drawImage(speech, 155, 420, 50, 50);
    ctx.font = "bold 15px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Press A", 175, 490);
    ctx.fillText("on your Keyboard", 180, 512);
    ctx.fillText("for Speech", 175, 535);

    if (keys[32]) { // Go to game
        MCsplashSc = false;
        MCgameSc = true;
    }  
    
    window.addEventListener("click", closeSplash);
}

function game() {

    sir.play();

    ctx.fillStyle = "#FFA500";
    
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "70px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Match Cards", w, 85);

    // white rectangle
    ctx.fillStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(250, 130, 730, 500);        
    ctx.fillRect(250, 130, 730, 500);

    ctx.strokeStyle = "blue";
    ctx.drawImage(amb, 300, 170, 300, 200);
    ctx.strokeRect(300, 170, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(305, 175, 42, 68);
    ctx.fillStyle = "blue";
    ctx.fillText("1", 325, 235);

    ctx.drawImage(lam, 630, 170, 300, 200);
    ctx.strokeRect(630, 170, 300, 200);

    ctx.drawImage(micro, 300, 400, 300, 200);
    ctx.strokeRect(300, 400, 300, 200);


    ctx.drawImage(cow, 630, 400, 300, 200);
    ctx.strokeRect(630, 400, 300, 200);        
    }

function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (MCsplashSc) {
        splash();
    }

    if (MCgameSc) {
        game();
    }

    requestAnimationFrame(playGame);
}

requestAnimationFrame(playGame);  

