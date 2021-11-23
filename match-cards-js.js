const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

// center text
var w = canvas.width / 2;

// initial screen
var MCsplashSc = true;
// explaining screen
//var MCinstructionsSc = false;
// main screen
//var MCgameSc = false;

const MCimage = {
    bWidth: 70,
    bHeight: 100,
    x: 610,
    y: 400
};

const keys = []; // keyboard operations

//Splash
const mcSplash = new Image();
mcSplash.src = "images/match-Cards.png";

const speech = new Image();
speech.src = "images/speech.png";

function splash() {
    //if (picOn) {
    ctx.drawImage(mcSplash, 0, 0, canvas.width, canvas.height);
    //}
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;

    ctx.fillRect(95, 400, 1010, 300);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Click the left mouse button", w, 460);
    ctx.fillStyle = "red";
    ctx.fillText("or press the Enter Key", w, 525);
    ctx.fillStyle = "blue";
    ctx.fillText("or use your switch", w, 590);
    ctx.fillStyle = "purple";
    ctx.font='900 50px Comic Sans MS';
    ctx.fillText("for the instructions!", w, 660);
    ctx.fillStyle = "white";
    ctx.fillRect(105, 410, 150, 140);
    ctx.drawImage(speech, 155, 420, 50, 50);
    ctx.font = "bold 15px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Press A", 175, 490);
    ctx.fillText("on your Keyboard", 180, 512);
    ctx.fillText("for Speech", 175, 535);


    /*if (keys[13]) { // next page
        splashSc = false;
        instructionsSc = true;
        splashAud.pause();
        splashAud.currentTime = 0;
    }*/
    
}


function game() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (MCsplashSc) {
        splash();
    }

    /*if (instructionsSc) {
        instructions();
    }

    if (gameSc) {

        if (picOn) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
        }
    }*/

    requestAnimationFrame(game);
    console.log("Mooo");
}

requestAnimationFrame(game);