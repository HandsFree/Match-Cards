
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// Photo dimensions
const wdt = 300;
const ht = 200;

// center text
var w = canvas.width / 2;

// main screen
var gameSc = false;

// initial screen
var MCsplashSc = true;

var gameIns=false;

var n = 1; // Question Count

// main screen
var MCgameSc1 = false;
var MCgameSc2 = false;
var MCgameSc3 = false;
var MCgameSc4 = false;
var MCgameSc5 = false;
var MCgameSc6 = false;
var MCgameSc7 = false;
var MCgameSc8 = false;
var MCgameSc9 = false;
var MCgameSc10 = false;
var finalScreen = false;

var cor1 = false;
var cor2 = false;
var cor3 = false;
var cor4 = false;
var cor5 = false;
var cor6 = false;
var cor7 = false;
var cor8 = false;
var cor9 = false;
var cor10 = false;
var incor = false;



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

const clickHere = new Image();
clickHere.src = "images/clickHere.png";

const soundBox = new Image();
soundBox.src = "images/soundBox.png";

const settings = new Image();
settings.src = "images/settings.png";

// Settings Menu
const mBack = new Image();
mBack.src = "images/menuAssets/backGr1.png";

const mus = new Image();
mus.src = "images/menuAssets/music.png";

const background = new Image();
background.src = "images/menuAssets/background.png";

const speechEff = new Image();
speechEff.src = "images/menuAssets/speech.png";

const tick = new Image();
tick.src = "images/menuAssets/tick.png";

const unticked = new Image();
unticked.src = "images/menuAssets/unticked.png";

//////////////////////////////////////////////////////////
const tickMus = new Image();
tickMus.src = "images/menuAssets/tickMus.png";

const untickedMus = new Image();
untickedMus.src = "images/menuAssets/untickedMus.png";
/////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
const tickSp = new Image();
tickSp.src = "images/menuAssets/tickSp.png";

const untickedSp = new Image();
untickedSp.src = "images/menuAssets/untickedSp.png";
/////////////////////////////////////////////////////////////


// Green
const Q4 = new Image();
Q4.src = "images/menuAssets/Q4T.png";

const Q8 = new Image();
Q8.src = "images/menuAssets/Q8T.png";

const Q12 = new Image();
Q12.src = "images/menuAssets/Q12T.png";

// Red
const Q4S = new Image();
Q4S.src = "images/menuAssets/Q4TS.png";

const Q8S = new Image();
Q8S.src = "images/menuAssets/Q8TS.png";

const Q12S = new Image();
Q12S.src = "images/menuAssets/Q12TS.png";


const noQs = new Image();
noQs.src = "images/menuAssets/noQuestions.png";

const cross = new Image();
cross.src = "images/menuAssets/cross.png";

const cross1 = new Image();
cross1.src = "images/menuAssets/cross1.png";

const insMouse = new Image();
insMouse.src = "images/menuAssets/gi.png";

// media for game
// Pictures
const amb = new Image();
amb.src = "images/ambulance.jpg";

const lam = new Image();
lam.src = "images/lamb.jpg";

const micro = new Image();
micro.src = "images/microwave.jpg";

const cow = new Image();
cow.src = "images/cow.jpg";

const oldPhn = new Image();
oldPhn.src = "images/old_phone.jpg";

const fireEn = new Image();
fireEn.src = "images/fire_eng.jpg";

const bell = new Image();
bell.src = "images/doorbel.jpg";

const pigeon = new Image();
pigeon.src = "images/pigeon.jpg";

const polac = new Image();
polac.src = "images/polacanthus.jpg";

const rook = new Image();
rook.src = "images/rook.jpg";

const Rugby = new Image();
Rugby.src = "images/Rugby.jpg";


// Sound Effects
var splashAud = new Audio("sounds/splash-screen1.mp3");

var gameInsSpeech = new Audio("sounds/gameInsSpeech.mp3");

var music = new Audio("sounds/ragtime.mp3");

var sir = new Audio("sounds/siren1.mp3");
var cow1 = new Audio("sounds/cow.mp3");
var lamb = new Audio("sounds/lamb.mp3");
var oldPhone = new Audio("sounds/old-phone.mp3");
var fireEng = new Audio("sounds/fire-eng.mp3");
var microSound = new Audio("sounds/microwave.mp3");
var bellSound = new Audio("sounds/DoorbellSound.mp3");
var pigeonSdEff = new Audio("sounds/pigeon.mp3");
var roarEff = new Audio("sounds/Roar.mp3");
var rookEff = new Audio("sounds/rook_song.mp3");
var rugbyEff  = new Audio("sounds/rugby.mp3");

// Voices
var wrongVoice = new Audio("sounds/wrong-v.mp3");

var ambVoice = new Audio("sounds/amb-v1.mp3");
var cowVoice = new Audio("sounds/cow-v1.mp3");
var lambVoice = new Audio("sounds/lamb-v1.mp3");
var telVoice = new Audio("sounds/old-phone-v1.mp3");
var fEngVoice = new Audio("sounds/fire-en-v1.mp3");
var microVoice = new Audio("sounds/micro-v1.mp3");
var doorbell = new Audio("sounds/doorbell-v1.mp3");

var polyEff = new Audio("sounds/polyEff.mp3");
var pigEff = new Audio("sounds/pigEff.mp3");
var rugEff = new Audio("sounds/rugEff.mp3");

var wellDoneVoice = new Audio("sounds/well-done-v.mp3");












function locked() {
    incor = false;
    cor1=false;
    cor2=false;
    cor3=false;
    cor4=false;
    cor5=false;
    cor6=false;
    cor7=false;
    cor8=false;
    cor9=false;
    cor10=false;
}














/***********For Menu************/

// Close menu
var setMenu=false;

// Background Music
// On
var bkMus = true;
// Off
var bkMus1 = false;

// Set Background
// Colorful
var back = true;
// White
var back1 = false;

// Set Speech
// On
var togSpeech = true;
// Off
var togSpeech1 = false;

/************end****************/

// End Mouse Menu and return to game //
function endMenu(e) {
    if (ctx.isPointInPath(cross.path, e.offsetX, e.offsetY)) {
        locked();
        setMenu=false;
        canvas.removeEventListener("click", endMenu);
    }
}
////////////////////End of Mouse Close//////////////////////





// Instructions //
function gameInsMouse(e) {
    if (ctx.isPointInPath(insMouse.path, e.offsetX, e.offsetY)) {
        gameIns=true;
        locked();
        canvas.removeEventListener("click", gameInsMouse);
    }
}







////// music change ///////////////////
function togMus(e) {
    if (ctx.isPointInPath(tickMus.path, e.offsetX, e.offsetY)) {
        bkMus=true;
        ctx.drawImage(untickedMus, 62, 190, 50, 50);
        console.log(bkMus);
        canvas.removeEventListener("click", togback);
    }
}

function togMus1(e) {
    if (ctx.isPointInPath(untickedMus.path, e.offsetX, e.offsetY)) {
        bkMus = !bkMus;
        ctx.drawImage(tickMus, 62, 190, 50, 50);
        //console.log(bkMus);
        canvas.removeEventListener("click", togback1);
    }
}

function togMusG(e) {
    if (ctx.isPointInPath(untickedMus.path, e.offsetX, e.offsetY)) {
        bkMus1 = !bkMus1;
        console.log(bkMus1);
        ctx.drawImage(tickMus, 62, 245, 50, 50);
        canvas.removeEventListener("click", togbackG);
    }
}

function togMusG1(e) {
    if (ctx.isPointInPath(tickMus.path, e.offsetX, e.offsetY)) {
        bkMus1=false;
        console.log(bkMus1);
        ctx.drawImage(untickedMus, 62, 245, 50, 50);
        canvas.removeEventListener("click", togbackG1);
    }
}
/////End of Mouse music Change///////////////////








////// Background change ///////////////////
function togback(e) {
    if (ctx.isPointInPath(tick.path, e.offsetX, e.offsetY)) {
        back=true;
        ctx.drawImage(unticked, 410, 190, 50, 50);
        //console.log(back);
        canvas.removeEventListener("click", togback);
    }
}

function togback1(e) {
    if (ctx.isPointInPath(unticked.path, e.offsetX, e.offsetY)) {
        back = !back;
        ctx.drawImage(tick, 410, 190, 50, 50);
        //console.log(back);
        canvas.removeEventListener("click", togback1);
    }
}

function togbackG(e) {
    if (ctx.isPointInPath(unticked.path, e.offsetX, e.offsetY)) {
        back1 = !back1;
        ctx.drawImage(tick, 410, 245, 50, 50);
        canvas.removeEventListener("click", togbackG);
    }
}

function togbackG1(e) {
    if (ctx.isPointInPath(tick.path, e.offsetX, e.offsetY)) {
        back1=false;
        //console.log(back1);
        ctx.drawImage(unticked, 410, 245, 50, 50);
        canvas.removeEventListener("click", togbackG1);
    }
}
/////End of Mouse Background Change///////////////////



////// Speech change ///////////////////
function togSp(e) {
    if (ctx.isPointInPath(tickSp.path, e.offsetX, e.offsetY)) {
        togSpeech=true;
        //console.log(togSpeech);
        ctx.drawImage(untickedSp, 62, 190, 50, 50);
        canvas.removeEventListener("click", togback);
    }
}

function togSp1(e) {
    if (ctx.isPointInPath(untickedSp.path, e.offsetX, e.offsetY)) {
        togSpeech = !togSpeech;
        console.log(togSpeech);
        ctx.drawImage(tickSp, 62, 190, 50, 50);
        canvas.removeEventListener("click", togback1);
    }
}

function togSpG(e) {
    if (ctx.isPointInPath(untickedSp.path, e.offsetX, e.offsetY)) {
        togSpeech1 = !togSpeech1;
        ctx.drawImage(tickSp, 62, 245, 50, 50);
        canvas.removeEventListener("click", togbackG);
    }
}

function togSpG1(e) {
    if (ctx.isPointInPath(tickSp.path, e.offsetX, e.offsetY)) {
        togSpeech1=false;
        ctx.drawImage(untickedSp, 62, 245, 50, 50);
        canvas.removeEventListener("click", togbackG1);
    }
}
/////End of Mouse Speech Change///////////////////








function showMenu() {

    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.9;

    if (!gameIns) {
    ctx.drawImage(mBack, 0, 0, canvas.width, canvas.height);
    }

    ctx.globalAlpha = 1.0; 
    ctx.textAlign = "center"; 
	ctx.font = "100 80px Impact, fantasy";
    ctx.fillText("Settings", w, 100);
    ctx.textAlign = "left";

    // Toggle Music
    ctx.drawImage(mus, 62, 130, 250, 50);

    if (bkMus) {
        ctx.drawImage(tickMus, 62, 190, 50, 50);
        tickMus.path = new Path2D();
        tickMus.path.rect(62, 130, 50, 50);
    }

    if (!bkMus) {
        ctx.drawImage(untickedMus, 62, 190, 50, 50);
        untickedMus.path = new Path2D();
        untickedMus.path.rect(62, 130, 50, 50);
    }

        ctx.font = "700 30px Arial";
        ctx.fillText("On", 120, 230);


    if (!bkMus1) {    
        ctx.drawImage(untickedMus, 62, 245, 50, 50);
        untickedMus.path = new Path2D();
        untickedMus.path.rect(62, 245, 50, 50);
    }

    if (bkMus1) {
        ctx.drawImage(tickMus, 62, 245, 50, 50);
        tickMus.path = new Path2D();
        tickMus.path.rect(62, 245, 50, 50);
    }

        ctx.fillText("Off", 120, 282);

  

    // Toggle Background
    ctx.drawImage(background, 410, 130, 250, 50);


    if (back) {
        ctx.drawImage(tick, 410, 190, 50, 50);
        tick.path = new Path2D();
        tick.path.rect(410, 190, 50, 50);
    }

    if (!back) {
       ctx.drawImage(unticked, 410, 190, 50, 50);
       unticked.path = new Path2D();
       unticked.path.rect(410, 190, 50, 50);
    }

    ctx.font = "700 30px Arial";
    ctx.fillText("Colourful", 470, 230);

    if (!back1) {
        ctx.drawImage(unticked, 410, 245, 50, 50);
        unticked.path = new Path2D();
        unticked.path.rect(410, 245, 50, 50);
    }
   
    if (back1) {
        ctx.drawImage(tick, 410, 245, 50, 50);
        tick.path = new Path2D();
        tick.path.rect(410, 245, 50, 50);
    } 

    ctx.fillText("White", 470, 282);





    // Toggle Speech
    ctx.drawImage(speechEff, 62, 310, 250, 50);

    if (togSpeech) {
        ctx.drawImage(tickSp, 62, 370, 50, 50);
        tickSp.path = new Path2D();
        tickSp.path.rect(62, 370, 50, 50);
    }

    if (!togSpeech) {
        ctx.drawImage(untickedSp, 62, 370, 50, 50);
        untickedSp.path = new Path2D();
        untickedSp.path.rect(62, 370, 50, 50);
    }

    ctx.font = "700 30px Arial";
    ctx.fillText("On", 120, 410);

    if (!togSpeech1) {
        ctx.drawImage(untickedSp, 62, 425, 50, 50);
        untickedSp.path = new Path2D();
        untickedSp.path.rect(62, 425, 50, 50);
    }

    if (togSpeech1) {
        ctx.drawImage(tickSp, 62, 425, 50, 50);
        tickSp.path = new Path2D();
        tickSp.path.rect(62, 425, 50, 50);
    }



    ctx.fillText("Off", 120, 461);

    // Toggle Number of Questions
    ctx.drawImage(noQs, 410, 310, 250, 50);
    ctx.drawImage(Q4, 422, 370, 70, 70);
    ctx.drawImage(Q8, 497, 370, 70, 70);
    ctx.drawImage(Q12S, 575, 370, 70, 70);

    // Match Cards Instructions
    ctx.textAlign = "center"; 
    ctx.drawImage(insMouse, w-266/2, 480, 266, 133);
    insMouse.path = new Path2D();
    insMouse.path.rect(w-266/2, 470, 266, 133);

    // Close Menu
    ctx.textAlign = "center"; 
    ctx.drawImage(cross, w-30, 640, 50, 50);
    cross.path = new Path2D();
    cross.path.rect(w-30, 640, 50, 50);


    // Music //
    canvas.addEventListener("click", togMus);
    canvas.addEventListener("click", togMus1);
    canvas.addEventListener("click", togMusG);
    canvas.addEventListener("click", togMusG1);


    // Background // 
    canvas.addEventListener("click", togback);
    canvas.addEventListener("click", togback1);
    canvas.addEventListener("click", togbackG);
    canvas.addEventListener("click", togbackG1);

    // Speech //
    canvas.addEventListener("click", togSp);
    canvas.addEventListener("click", togSp1);
    canvas.addEventListener("click", togSpG);
    canvas.addEventListener("click", togSpG1);

    canvas.addEventListener("click", gameInsMouse);

    canvas.addEventListener("click", endMenu);
}







// End Splash Screen
function closeSplash(e) {
    if (ctx.isPointInPath(clickHere.path, e.offsetX, e.offsetY)) {
        incor = false;
        splashAud.pause();
        splashAud.currentTime = 0;
        MCsplashSc = false;
        MCgameSc1 = true;
        gameIns = true;
        canvas.removeEventListener("click", closeSplash);
    }
}

// Speech code for Mouse
function speechMouse(e) {
    if (ctx.isPointInPath(speech.path, e.offsetX, e.offsetY)) {
  
        if (togSpeech) {
            splashAud.play();
        }
    
        if (!togSpeech) {
            splashAud.pause();
            splashAud.currentTime = 0;
        }

        canvas.removeEventListener("click", speechMouse);
    }
}

// Settings Menu mouse controls
function settingMouse1(e) {
    if (settings.path && ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        setMenu=true;
        canvas.removeEventListener("click", settingMouse1);
    }
}

function splash() {
    ctx.drawImage(mcSplash, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 400, 715, 235);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "navy";

    ctx.drawImage(clickHere, 162, 410, 394, 90);
    clickHere.path = new Path2D();
    clickHere.path.rect(162, 410, 394, 90);

    ctx.fillText("or press the Spacebar", w, 535);
    ctx.fillText("or use your switch", w, 572);
    ctx.fillText("to play!", w, 610);
    ctx.fillStyle = "white";

    // Speech code //
    ctx.drawImage(soundBox, 25, 409, 110, 130);
    ctx.drawImage(speech, 55, 435, 55, 55);
    speech.path = new Path2D();
    speech.path.rect(25, 409, 55, 55);
    ctx.font = "bold 15px arial";
    ctx.fillStyle = "black";
    ctx.fillText("_", 73, 512);
    ctx.fillText("speech", 77, 510);
    // End of Speech Code //

    // Settings code //
    ctx.drawImage(soundBox, 580, 409, 110, 130);
    ctx.drawImage(settings, 594, 420, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(580, 409, 110, 130); 
    ctx.font = "bold 15px arial";
    ctx.fillStyle = "black";
    ctx.fillText("_", 611, 512);
    ctx.fillText("settings", 635, 510);
    // End of Settings Code

    if (keys[69]) { // audio
        splashAud.play();
    }

    if (keys[83]) { // settings
        setMenu=true;
    }

    if (keys[32]) { // Go to game
        splashAud.pause();
        splashAud.currentTime = 0;
        MCsplashSc = false;
        MCgameSc1 = true;

        if (bkMus) {
        music.play();
        music.volume = 0.1;
        }

        incor = false;
    }  
    
    canvas.addEventListener("click", closeSplash);
    canvas.addEventListener("click", speechMouse);
    canvas.addEventListener("click", settingMouse1);
}



function closeSplash1(e) {
    if (ctx.isPointInPath(cross1.path, event.offsetX, event.offsetY)) {
        gameInsSpeech.pause();
        gameInsSpeech.currentTime = 0;
        locked();      
        gameIns=false;
        canvas.removeEventListener("click", closeSplash1);
    }
}

function gameInstructions() {

    if (togSpeech) {
        gameInsSpeech.play();
    }
    if (!togSpeech) {
        gameInsSpeech.pause();
        gameInsSpeech.currentTime = 0;
    }
        
        ctx.fillStyle = "white";
        //ctx.globalAlpha = 0.85;
        ctx.fillRect(20, 20, 675, 680);
        ctx.globalAlpha = 1.0;
        ctx.textAlign = "center";
        ctx.fillStyle = "Red";
        ctx.font = "110px Comic Sans MS";
        ctx.fillText("Match Cards", w, 150);
        ctx.fillStyle = "Green";
        ctx.font = "45px Comic Sans MS";
        ctx.fillText("Match the sound to the picture", w, 240);
	    ctx.fillText("using the keyboard numbers", w, 295);
        ctx.fillText("on the picture - 1,2,3,4", w, 350);
        ctx.fillStyle = "Purple";
        ctx.font = "60px Comic Sans MS";
	    ctx.fillText("OR", w, 415);
        ctx.fillStyle = "Green";
        ctx.font = "45px Comic Sans MS";
        ctx.fillText("by left clicking on the picture", w, 470);
        ctx.font = "35px Comic Sans MS";
        ctx.fillStyle = "blue";

        // Close Menu
        ctx.fillText("Click below", w, 550);
        ctx.textAlign = "center"; 
        ctx.drawImage(cross1, w-30, 560, 50, 50);
        cross1.path = new Path2D();
        cross1.path.rect(w-30, 560, 50, 50);

        ctx.fillText("OR", w, 645);
        ctx.fillText("Press the spacebar", w, 680);

        canvas.addEventListener("click", closeSplash1);
        /*
        if (keys[32]) { // Start game...
            gameIns = false;
            gameInsSpeech.pause();
            gameInsSpeech.currentTime = 0;
        } */
    }



function firstQus() {
    ctx.strokeRect(50, 150, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(55, 155, 42, 50);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("1", 75, 200);
}

function secQus() {
    ctx.strokeRect(370, 150, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(375, 155, 42, 50);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("2", 395, 200);
}

function thQus() {
    ctx.strokeRect(50, 380, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(55, 385, 42, 50);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("3", 75, 430);
}

function foQus() {
    ctx.strokeRect(370, 380, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(375, 385, 42, 50);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("4", 395, 430);
}

function instructions() {
    ctx.fillStyle = "blue";
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("Match the sound to the picture", w, 625);
	ctx.fillText("using the keyboard numbers - 1,2,3,4", w, 655);
	ctx.fillText("or left click on the picture", w, 685);
}

// Setting Menu mouse controls
function settingMouse(e) {
    if (settings.path && ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        setMenu=true;
        canvas.removeEventListener("click", settingMouse);
    }
}

function cardSetUp() {
    // settings
    ctx.drawImage(settings, 0, 0, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(0, 0, 80, 80);

    canvas.addEventListener("click", settingMouse, false);

    // Keyboard Settings
    if (keys[83]) { // settings
        setMenu=true;
    }

    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("settings", 40, 90);

    // text
    ctx.font = "80px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Match Cards", w, 77);
    ctx.font = "40px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Question " + n, w, 125);
    // white rectangle
    ctx.fillStyle = "white";
    // border
    ctx.lineWidth = 4;
    ctx.strokeStyle = "blue";
}

///////////////////////////////////
////part of right awnser text//////
function rightAnsText() {
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    ctx.fillText("for the next question!", w, 610);
}

////// Q1 Mouse Controls ////////////////////////

//// Keyboard
function gameStartKeys(e) {
    gameIns = false;
    gameInsSpeech.pause();
    gameInsSpeech.currentTime = 0;
    window.removeEventListener("keyup", gameStartKeys);
}

//// Mouse
function gameStart(e) {
    gameIns = false;
    gameInsSpeech.pause();
    gameInsSpeech.currentTime = 0;
    removeEventListener("click", gameStart);
}

function Q1checkClick1(e) {
	if (ctx.isPointInPath(amb.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = false;
        cor1 = true;
        canvas.removeEventListener("click", Q1checkClick1);
    }
}


function Q1checkClick2(e) {
    if (ctx.isPointInPath(lam.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick2);
    }
}

function Q1checkClick3(e) {
    if (ctx.isPointInPath(micro.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick3);
    }
}

function Q1checkClick4(e) {
    if (ctx.isPointInPath(cow.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick4);
    }
}

/////////// end of Q1 Mouse Controls ////////////////////////////////

/////////  Question 1 //////////////////

function quest1() {

    // Question 1 
    if (!gameIns && !setMenu) {
        console.log(setMenu + "RRRRRR");
        sir.play();
    }
    
    ////// Not Working ///////////////////
    if (setMenu) {
        console.log(setMenu + "RRRRRR");
        sir.pause();
        sir.currentTime = 0;
    }

    if (!gameIns) {
    cardSetUp();
    }

    ctx.drawImage(amb, 50, 150, wdt, ht);
	amb.path = new Path2D();
    amb.path.rect(50, 150, wdt, ht);
    firstQus();
  
    ctx.drawImage(lam, 370, 150, wdt, ht);
    lam.path = new Path2D();
    lam.path.rect(370, 150, wdt, ht);
    secQus();

    ctx.drawImage(micro, 50, 380, wdt, ht);
    micro.path = new Path2D();
    micro.path.rect(50, 380, wdt, ht);
    thQus();

    ctx.drawImage(cow, 370, 380, wdt, ht);
    cow.path = new Path2D();
    cow.path.rect(370, 380, wdt, ht);
    foQus();

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        window.addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images
    canvas.addEventListener("click", Q1checkClick1);
    canvas.addEventListener("click", Q1checkClick2);
    canvas.addEventListener("click", Q1checkClick3);
    canvas.addEventListener("click", Q1checkClick4);
    

    // keyboard controls for images
    if (keys[49]) { // Correct
        sir.pause();
        sir.currentTime = 0;
        cor1 = true;
    }

    if (keys[50]) { // Incorrect
        sir.pause();
        sir.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        sir.pause();
        sir.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        sir.pause();
        sir.currentTime = 0;
        incor = true;
    }

    }// Locked if gameIns = true

}


////////// End of Question 1 ////////////////////

///////// Q2 Mouse Controls ////////////////////////

function Q2checkClick1(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q2checkClick1, false);
    }
}

function Q2checkClick2(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {    
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q2checkClick2, false);
    }
}

function Q2checkClick3(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {    
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q2checkClick3, false);
    }
}

function Q2checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = true;
        canvas.removeEventListener("click", Q2checkClick4, false);
    }
}

/////////// end of Q2 Mouse Controls ////////////////////////////////



/////////  Question 2 //////////////////
function quest2() {

    // Question 2    

    if (!setMenu) {
        cow1.play();
    }
    if (setMenu) {
        cow1.pause();
        cow1.currentTime = 0;
    }

    cardSetUp();
    ctx.drawImage(amb, 50, 150, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(micro, 370, 150, 300, 200);
    micro.path = new Path2D();
    micro.path.rect(370, 150, 300, 200);
    secQus();


    ctx.drawImage(lam, 50, 380, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(cow, 370, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q2checkClick1);
    canvas.addEventListener("click", Q2checkClick2);
    canvas.addEventListener("click", Q2checkClick3);
    canvas.addEventListener("click", Q2checkClick4);

    if (keys[49]) { // Incorrect
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
    }

    if (keys[50]) { // Incorrect
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Correct
        cow1.pause();
        cow1.currentTime = 0;
        cor2 = true;
    }

}

////////// End of Question 2 ////////////////////

///////// Q3 Mouse Controls ////////////////////////

function Q3checkClick1(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = false;
        cor3 = true;
        canvas.removeEventListener("click", Q3checkClick1, false);
    }
}

function Q3checkClick2(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q3checkClick2, false);
    }
}

function Q3checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q3checkClick3, false);
    }
}

function Q3checkClick4(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q3checkClick4, false);
    }
}

/////////// end of Q3 Mouse Controls ////////////////////////////////

/////////  Question 3 //////////////////
function quest3() {

    // Question 3    

    if (!setMenu) {
        lamb.play();
    }

    if (setMenu) {
        lamb.pause();
        lamb.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(lam, 50, 150, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(micro, 370, 150, 300, 200);
    micro.path = new Path2D();
    micro.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(cow, 50, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(amb, 370, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q3checkClick1, false);
    canvas.addEventListener("click", Q3checkClick2, false);
    canvas.addEventListener("click", Q3checkClick3, false);
    canvas.addEventListener("click", Q3checkClick4, false);

    if (keys[49]) {
        lamb.pause();
        lamb.currentTime = 0;
        cor3 = true;
    }


    if (keys[50]) { // Incorrect
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
    }

}

////////// End of Question 3 ////////////////////

///////// Q4 Mouse Controls ////////////////////////

function Q4checkClick1(e) {
    if (oldPhn.path && ctx.isPointInPath(oldPhn.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = false;
        cor3 = false;
        cor4 = true;
        canvas.removeEventListener("click", Q4checkClick1);
    }
}

function Q4checkClick2(e) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q4checkClick2);
    }
}


function Q4checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q4checkClick3);
    }
}

function Q4checkClick4(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q4checkClick4);
    }
}

/////////// end of Q4 Mouse Controls ////////////////////////////////

/////////  Question 4 //////////////////
function quest4() {

    // Question 4    

    if (!setMenu) {
        oldPhone.play();
    }
    if (setMenu) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(oldPhn, 50, 150, 300, 200);
    oldPhn.path = new Path2D();
    oldPhn.path.rect(50, 150, 300, 200);
    firstQus();

    ctx.drawImage(bell, 370, 150, 300, 200);
    bell.path = new Path2D();
    bell.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(fireEn, 50, 380, 300, 200);
    micro.path = new Path2D();
    micro.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(amb, 370, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q4checkClick1);
    canvas.addEventListener("click", Q4checkClick2);
    canvas.addEventListener("click", Q4checkClick3);
    canvas.addEventListener("click", Q4checkClick4);

    if (keys[49]) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = false;
        cor4 = true;
    }

    if (keys[50]) { // Incorrect
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
    }

}

////////// End of Question 4 ////////////////////

///////// Q5 Mouse Controls ////////////////////////

function Q5checkClick1(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q5checkClick1, false);
    }
}

function Q5checkClick2(e) {
    if (fireEn.path && ctx.isPointInPath(fireEn.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = false;
        cor3 = false;
        cor4 = false;
        cor5 = true;
        canvas.removeEventListener("click", Q5checkClick2, false);
    }
}

function Q5checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q5checkClick3, false);
    }
}

function Q5checkClick4(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q5checkClick4, false);
    }
}

/////////// end of Q5 Mouse Controls ////////////////////////////////

/////////  Question 5 //////////////////
function quest5() {  
    
    if (!setMenu) {
        fireEng.play();
    }
    if (setMenu) {
        fireEng.pause();
        fireEng.currentTime = 0;
    }

    cardSetUp();


    ctx.drawImage(micro, 50, 150, 300, 200);
    micro.path = new Path2D();
    micro.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(fireEn, 370, 150, 300, 200);
    fireEn.path = new Path2D();
    fireEn.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(cow, 50, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(amb, 370, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q5checkClick1);
    canvas.addEventListener("click", Q5checkClick2);
    canvas.addEventListener("click", Q5checkClick3);
    canvas.addEventListener("click", Q5checkClick4);

    if (keys[49]) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
    }

    if (keys[50]) { // Correct
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = false;
        cor5 = true;
    }

    if (keys[51]) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
    }

}

////////// End of Question 5 ////////////////////


////// Q6 Mouse Controls ////////////////////////

function Q6checkClick1(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = false;
        cor6 = true;
        canvas.removeEventListener("click", Q6checkClick1);
    }
}

function Q6checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q6checkClick2);
    }
}

function Q6checkClick3(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q6checkClick3);
    }
}

function Q6checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q6checkClick4);
    }
}

/////////// end of Q6 Mouse Controls ////////////////////////////////




/////////  Question 6 //////////////////

function quest6() {

    if (!setMenu) {
        microSound.play();
    }
    if (setMenu) {
        microSound.pause();
        microSound.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(micro, 50, 150, 300, 200);
    micro.path = new Path2D();
    micro.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 370, 150, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(amb, 50, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(cow, 370, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q6checkClick1);
    canvas.addEventListener("click", Q6checkClick2);
    canvas.addEventListener("click", Q6checkClick3);
    canvas.addEventListener("click", Q6checkClick4);

    if (keys[49]) { // Correct
        microSound.pause();
        microSound.currentTime = 0;
        incor = false;
        cor6 = true;
    }

    if (keys[50]) { // Incorrect
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
    }

}
////////// End of Question 6 ////////////////////


////// Q7 Mouse Controls ////////////////////////

function Q7checkClick1(e) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = false;
        cor7 = true;
        canvas.removeEventListener("click", Q7checkClick1);
    }
}

function Q7checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q7checkClick2);
    }
}

function Q7checkClick3(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q7checkClick3);
    }
}

function Q7checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q7checkClick4);
    }
}

/////////// end of Q7 Mouse Controls ////////////////////////////////

/////////  Question 7 //////////////////

function quest7() {

    if (!setMenu) {
        bellSound.play();
    }
    if (setMenu) {
        bellSound.pause();
        bellSound.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(bell, 50, 150, 300, 200);
    bell.path = new Path2D();
    bell.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 370, 150, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(amb, 50, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(cow, 370, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q7checkClick1);
    canvas.addEventListener("click", Q7checkClick2);
    canvas.addEventListener("click", Q7checkClick3);
    canvas.addEventListener("click", Q7checkClick4);

    if (keys[49]) { // Correct
        bellSound.pause();
        bellSound.currentTime = 0;
        //incor = false;
        cor7 = true;
    }

    if (keys[50]) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
    }

}
////////// End of Question 7 ////////////////////





////// Q8 Mouse Controls ////////////////////////

function Q8checkClick1(e) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q8checkClick1);
    }
}

function Q8checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q8checkClick2);
    }
}

function Q8checkClick3(e) {
    if (polac.path && ctx.isPointInPath(polac.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = false;
        cor8 = true;
        canvas.removeEventListener("click", Q8checkClick3);
    }
}

function Q8checkClick4(e) {
    
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q8checkClick4);
    }
}

/////////// end of Q8 Mouse Controls ////////////////////////////////



/////////  Question 8 //////////////////

function quest8() {

    if (!setMenu) {
        roarEff.play();
    }
    if (setMenu) {
        roarEff.pause();
        roarEff.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(bell, 50, 150, 300, 200);
    bell.path = new Path2D();
    bell.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 370, 150, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(polac, 50, 380, 300, 200);
    polac.path = new Path2D();
    polac.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(amb, 370, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q8checkClick1);
    canvas.addEventListener("click", Q8checkClick2);
    canvas.addEventListener("click", Q8checkClick3);
    canvas.addEventListener("click", Q8checkClick4);

    if (keys[49]) { // Correct
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
    }

    if (keys[50]) { // Incorrect
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        roarEff.pause();
        roarEff.currentTime = 0;
        cor8 = true;
    }

    if (keys[52]) { // Incorrect
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
    }

}
////////// End of Question 8 ////////////////////




////// Q9 Mouse Controls ////////////////////////

function Q9checkClick1(e) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q9checkClick1);
    }
}

function Q9checkClick2(e) {
    if (pigeon.path && ctx.isPointInPath(pigeon.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = false;
        cor9 = true;
        canvas.removeEventListener("click", Q9checkClick2);
    }
}

function Q9checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q9checkClick3);
    }
}

function Q9checkClick4(e) {
    
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q9checkClick4);
    }
}

/////////// end of Q9 Mouse Controls ////////////////////////////////



/////////  Question 9 //////////////////

function quest9() {

    if (!setMenu) {
        pigeonSdEff.play();
    }
    if (setMenu) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(bell, 50, 150, 300, 200);
    bell.path = new Path2D();
    bell.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(pigeon, 370, 150, 300, 200);
    pigeon.path = new Path2D();
    pigeon.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(cow, 50, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(amb, 370, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q9checkClick1);
    canvas.addEventListener("click", Q9checkClick2);
    canvas.addEventListener("click", Q9checkClick3);
    canvas.addEventListener("click", Q9checkClick4);

    if (keys[49]) { // Correct
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
    }

    if (keys[50]) { // Incorrect
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        cor9 = true;
    }

    if (keys[51]) { // Incorrect
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
    }

}
////////// End of Question 9 ////////////////////






////// Q10 Mouse Controls ////////////////////////

function Q10checkClick1(e) {
    if (rook.path && ctx.isPointInPath(rook.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q10checkClick1);
    }
}

function Q10checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q10checkClick2);
    }
}

function Q10checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q10checkClick3);
    }
}

function Q10checkClick4(e) {   
    if (Rugby.path && ctx.isPointInPath(Rugby.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = false;
        cor10 = true;
        canvas.removeEventListener("click", Q10checkClick4);
    }
}

/////////// end of Q10 Mouse Controls ////////////////////////////////



/////////  Question 10 //////////////////

function quest10() {

    if (!setMenu) {
        rugbyEff.play();
    }
    if (setMenu) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(rook, 50, 150, 300, 200);
    rook.path = new Path2D();
    rook.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 370, 150, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(cow, 50, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(Rugby, 370, 380, 300, 200);
    Rugby.path = new Path2D();
    Rugby.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    canvas.addEventListener("click", Q10checkClick1);
    canvas.addEventListener("click", Q10checkClick2);
    canvas.addEventListener("click", Q10checkClick3);
    canvas.addEventListener("click", Q10checkClick4);

    if (keys[49]) { // Correct
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
    }

    if (keys[50]) { // Incorrect
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true; 
    }

    if (keys[51]) { // Incorrect
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
    }

    if (keys[52]) { // Incorrect
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        cor10 = true;   
    }

}
////////// End of Question 10 ////////////////////








//// Answers ///////////////////////

// mouse controls right Answer 1 //
function rightClick1() {
    ambVoice.pause();
    ambVoice.currentTime = 0;
    incor = false;
    cor1 = false;
    MCgameSc1 = false;
    MCgameSc2 = true;
    removeEventListener("click", rightClick1);
}
// End mouse controls right Answer //

/////////  Right Answer 1 //////////////////

    function rightAns1() {

        

        if (togSpeech) {
            ambVoice.play();
        }
        if (!togSpeech) {
            ambVoice.pause();
            ambVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("The sound was an ambulance!", w, 290);
        ctx.font = "30px Comic Sans MS";
        rightAnsText();

        if (keys[32]) { // Go to Q2
            MCgameSc1 = false;
            MCgameSc2 = true;
            cor1 = false;
            ambVoice.pause();
            ambVoice.currentTime = 0;
        }

        addEventListener("click", rightClick1);
    }

    // mouse controls right Answer 2 //
    function rightClick2() {
        incor = false;
        cor2 = false;
        MCgameSc2 = false;
        //finalScreen = true;
        MCgameSc3 = true;
        cowVoice.pause();
        cowVoice.currentTime = 0;
        removeEventListener("click", rightClick2);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 2 //////////////////
    function rightAns2() {
        
        if (togSpeech) {
            cowVoice.play();
        }
        if (!togSpeech) {
            cowVoice.pause();
            cowVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was a cow!", w, 290);
        ctx.font = "50px Comic Sans MS";
        rightAnsText();

        if (keys[32]) { // Go to Q3
            MCgameSc2 = false;
            //finalScreen = true;
            MCgameSc3 = true;
            cowVoice.pause();
            cowVoice.currentTime = 0;
            cor2 = false;
        }

        addEventListener("click", rightClick2);
    }

       // mouse controls right Answer 3 //
       function rightClick3() {
        incor = false;
        cor3 = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = true;
        lambVoice.pause();
        lambVoice.currentTime = 0;
        removeEventListener("click", rightClick3);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 3 //////////////////
    function rightAns3() {
        
        if (togSpeech) {
            lambVoice.play();
        }
        if (!togSpeech) {
            lambVoice.pause();
            lambVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was a lamb!", w, 290);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("Left click on your mouse", w, 400);
        ctx.fillText("OR", w, 465);
        ctx.fillText("Press the Spacebar", w, 520);
        ctx.fillText("for the next question!", w, 610);

        if (keys[32]) { // Go to Q4
            cor3 = false;
            lambVoice.pause();
            lambVoice.currentTime = 0;
            MCgameSc3 = false;
            MCgameSc4 = true;
        }
        addEventListener("click", rightClick3);
    }

    // mouse controls right Answer 4 //
    function rightClick4() {
        telVoice.pause();
        cor4 = false;
        telVoice.currentTime = 0;
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = false;
        //finalScreen = true;
        MCgameSc5 = true;
        removeEventListener("click", rightClick4);
    }
    // End mouse controls right Answer //

     /////////  Right Answer 4 //////////////////
     function rightAns4() {
        
        if (togSpeech) {
            telVoice.play();
        }
        if (!togSpeech) {
            telVoice.pause();
            telVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "39px Comic Sans MS";
        ctx.fillText("The sound was an old telephone!", w, 290);
        ctx.font = "35px Comic Sans MS";
        rightAnsText();

        if (keys[32]) { // Go to Q5
            cor4 = false;
            telVoice.pause();
            telVoice.currentTime = 0;
            MCgameSc4 = false;
            MCgameSc5 = true;
        }
        addEventListener("click", rightClick4);
    }

    // mouse controls right Answer 5 //
    function rightClick5() {
        cor5 = false;
        fEngVoice.pause();
        fEngVoice.currentTime = 0;
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = false;
        MCgameSc5 = false;
        //finalScreen = true;
        MCgameSc6 = true;
        removeEventListener("click", rightClick5);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 5 //////////////////
    function rightAns5() {

        if (togSpeech) {
            fEngVoice.play();
        }

        if (!togSpeech) {
            fEngVoice.pause();
            fEngVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("The sound was a Fire Engine!", w, 290);
        ctx.font = "50px Comic Sans MS";
        rightAnsText();

        if (keys[32]) { // Go to Q6
            cor5 = false;
            fEngVoice.pause();
            fEngVoice.currentTime = 0;
            MCgameSc5 = false;
            MCgameSc6 = true;
        }
        addEventListener("click", rightClick5);
    }

      // mouse controls right Answer 6 //
      function rightClick6() {
      cor6 = false;
      microVoice.pause();
      microVoice.currentTime = 0;
      incor = false;
      MCgameSc6 = false;
      //finalScreen = true;
      MCgameSc7 = true;
      removeEventListener("click", rightClick6);
    }
// End mouse controls right Answer //

    /////////  Right Answer 6 //////////////////
    function rightAns6() {
        
        if (togSpeech) {
            microVoice.play();
        }

        if (!togSpeech) {
            microVoice.pause();
            microVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("The sound was a Microwave!", w, 290);
        ctx.font = "40px Comic Sans MS";
        rightAnsText();

        if (keys[32]) { // Go to Final Screen
            microVoice.pause();
            microVoice.currentTime = 0;
            cor6 = false;
            MCgameSc6 = false;
            MCgameSc7 = true;
            //finalScreen = true;
        }

        addEventListener("click", rightClick6);
    }


    // mouse controls right Answer 7 //
    function rightClick7() {
        cor7 = false;
        doorbell.pause();
        doorbell.currentTime = 0;
        incor = false;
        MCgameSc7 = false;
        MCgameSc8 = true;
        //finalScreen = true;
        removeEventListener("click", rightClick7);
      }
  // End mouse controls right Answer //

     /////////  Right Answer 7 //////////////////
     function rightAns7() {

        if (togSpeech) {
            doorbell.play();
        }

        if (!togSpeech) {
            doorbell.pause();
            doorbell.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("The sound was a Door Bell!", w, 290);
        ctx.font = "40px Comic Sans MS";
        ctx.fillText("Left click on your mouse", w, 400);
        ctx.fillText("OR", w, 465);
        ctx.fillText("Press the Spacebar", w, 520);
        ctx.fillText("for the next question!", w, 610);

        if (keys[32]) { // Go to Final Screen
            cor7 = false;
            doorbell.pause();
            doorbell.currentTime = 0;
            MCgameSc7 = false;
            //finalScreen = true;
            MCgameSc8 = true;
        }

        addEventListener("click", rightClick7);
    }

       // mouse controls right Answer 8 //
       function rightClick8() {
        cor8 = false;
        polyEff.pause();
        polyEff.currentTime = 0;
        incor = false;
        MCgameSc8 = false;
        MCgameSc9 = true;
        removeEventListener("click", rightClick8);
      }
  // End mouse controls right Answer //

     /////////  Right Answer 8 //////////////////
     function rightAns8() {

        if (togSpeech) {
            polyEff.play();
        }

        if (!togSpeech) {
            polyEff.pause();
            polyEff.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "35px Comic Sans MS";
        ctx.fillText("The sound was a Polacanthus Dinosaur", w, 290);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("Left click on your mouse", w, 400);
        ctx.fillText("OR", w, 465);
        ctx.fillText("Press the Spacebar", w, 520);
        ctx.fillText("for the next question!", w, 610);

        if (keys[32]) { // Go to Final Screen
            cor8 = false;
            polyEff.pause();
            polyEff.currentTime = 0;
            MCgameSc8 = false;
            MCgameSc9 = true;
        }

        addEventListener("click", rightClick8);
    }





// mouse controls right Answer 9 //
function rightClick9() {
    cor9 = false;
    pigEff.pause();
    pigEff.currentTime = 0;
    incor = false;
    MCgameSc9 = false;
    MCgameSc10 = true;
    removeEventListener("click", rightClick9);
  }
// End mouse controls right Answer //

 /////////  Right Answer 9 //////////////////
 function rightAns9() {

    if (togSpeech) {
        pigEff.play();
    }

    if (!togSpeech) {
        pigEff.pause();
        pigEff.currentTime = 0;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(15, 40, 687, 650);
    ctx.strokeStyle = "green";
    ctx.strokeRect(15, 40, 687, 650);
    ctx.fillStyle = "green";
    ctx.textAlign = "center"; 
    ctx.font = "100px Comic Sans MS";
    ctx.fillText("Well Done!", w, 180);
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("The sound was a Pigeon!", w, 290);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    ctx.fillText("for the next question!", w, 610);

    if (keys[32]) { // Go to Final Screen
        cor9 = false;
        pigEff.pause();
        pigEff.currentTime = 0;
        MCgameSc9 = false;
        MCgameSc10 = true;
    }

    addEventListener("click", rightClick9);
}






// mouse controls right Answer 10 //
function rightClick10() {
    cor10 = false;
    rugEff.pause();
    rugEff.currentTime = 0;
    incor = false;
    MCgameSc10 = false;
    //MCgameSc10 = true;
    finalScreen = true;
    removeEventListener("click", rightClick10);
  }
// End mouse controls right Answer //

 /////////  Right Answer 10 //////////////////
 function rightAns10() {

    if (togSpeech) {
        rugEff.play();
    }

    if (!togSpeech) {
        rugEff.pause();
        rugEff.currentTime = 0;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(15, 40, 687, 650);
    ctx.strokeStyle = "green";
    ctx.strokeRect(15, 40, 687, 650);
    ctx.fillStyle = "green";
    ctx.textAlign = "center"; 
    ctx.font = "100px Comic Sans MS";
    ctx.fillText("Well Done!", w, 180);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("The sound was a game of Rugby!", w, 290);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    //ctx.fillText("for the next question!", w, 610);

    if (keys[32]) { // Go to Final Screen
        cor10 = false;
        rugEff.pause();
        rugEff.currentTime = 0;
        MCgameSc10 = false;
        finalScreen = true;
    }

    addEventListener("click", rightClick10);
}


    // mouse controls Wrong Answer //
    function clickWrong() {
        play = true;
        wrongVoice.pause();
        wrongVoice.currentTime = 0;
        cor1 = false;
        cor2 = false;
        cor3 = false;
        cor4 = false;
        cor5 = false;
        cor6 = false;
        cor7 = false;
        cor8 = false;
        cor9 = false;
        cor10 = false;
        incor = false;
        removeEventListener("click", clickWrong);
    }

    /////////  Wrong Awnser //////////////////
    function wrong() {  
       
        play = false;

        if (togSpeech) {
            wrongVoice.play();
        }
    
        if (!togSpeech) {
            wrongVoice.pause();
            wrongVoice.currentTime = 0;
        }

        ctx.fillStyle = "white";
        ctx.fillRect(30, 40, 655, 650);
        ctx.strokeStyle = "red";
        ctx.strokeRect(30, 40, 655, 650);
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "120px Comic Sans MS";
        ctx.fillText("Oh No!", w, 170);
        ctx.font = "70px Comic Sans MS";
        ctx.fillText("that's not right!", w, 270);
        ctx.fillStyle = "blue";
        ctx.fillText("Why not try Again?", w, 380);
        ctx.fillStyle = "red";
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("Left Click on your mouse", w, 500);
        ctx.fillText("OR", w, 555);
        ctx.fillText("Press the Spacebar", w, 600);
        ctx.fillText("to continue!", w, 655);

        addEventListener("click", clickWrong);

        if (keys[32]) { // Go to return to game
            incor = false;
            wrongVoice.pause();
            wrongVoice.currentTime = 0;
            play = true;
        }
    }


function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (setMenu) {
        showMenu();
    }

    if (gameIns) {
        gameInstructions();
    }

    if (!setMenu) {

    if (MCsplashSc) {
        splash();
    }    

    ///////// Question 1 //////////////////
    if (MCgameSc1) {

        if (back) {
            ctx.fillStyle = "#FFA500";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height); 

        if (!cor1) {
           quest1();
        }

        if (incor) {
            cor1 = false;
            wrong();
        }

        if (cor1) {
           rightAns1();
           n = 2;
        }
    }

     ///////////// Question 2 ////////////////////
     if (MCgameSc2) {

        if (back) {
            ctx.fillStyle = "#45c345";
        }
        
        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor2) {
          quest2();
        }

        if (incor) {
            cor2 = false;
            wrong();
        }

        if (cor2) {
          rightAns2();
          n = 3;
        }
    }

    ///////////// Question 3 ////////////////////
    if (MCgameSc3) {

        if (back) {
            ctx.fillStyle = "#77a9de";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor3) {
            quest3();
        }

        if (incor) {
            cor3 = false;
            wrong();
        }

        if (cor3) {
           rightAns3();
           n = 4;
        }
    }

    ///////////// Question 4 ////////////////////
    if (MCgameSc4) {

        if (back) {
            ctx.fillStyle = "#8fb58f";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor4) {
            quest4();
        }

        if (incor) {
            cor4 = false;
            wrong();
        }

        if (cor4) {
            rightAns4();
            n = 5;
        }
    }

    ///////////// Question 5 ////////////////////
    if (MCgameSc5) {

        if (back) {
            ctx.fillStyle = "#bca3cf";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor5) {
            quest5();
        }

        if (incor) {
            cor5 = false;
            wrong();
        }

        if (cor5) {
            rightAns5();
            n = 6;
        }
    }

    ///////////// Question 6 ////////////////////
    if (MCgameSc6) {

        if (back) {
            ctx.fillStyle = "pink";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor6) {
          quest6();
        }

        if (incor) {
            cor6 = false;
            wrong();
        }

        if (cor6) {
          rightAns6();
          n = 7;
        }
    }

    ///////////// Question 7 ////////////////////
    if (MCgameSc7) {

        if (back) {
            ctx.fillStyle = "yellow";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor7) {
          quest7();
        }

        if (incor) {
            cor7 = false;
            wrong();
        }

        if (cor7) {
          rightAns7();
          n = 8;
        }
    }

    ///////////// Question 8 ////////////////////
    if (MCgameSc8) {

        if (back) {
            ctx.fillStyle = "#03fcf4";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor8) {
          quest8();
        }

        if (incor) {
            cor8 = false;
            wrong();
        }

        if (cor8) {
          rightAns8();
          n = 9;
        }
    }

    ///////////// Question 9 ////////////////////
    if (MCgameSc9) {

        if (back) {
            ctx.fillStyle = "#93a832";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor9) {
          quest9();
        }

        if (incor) {
            cor9 = false;
            wrong();
        }

        if (cor9) {
          rightAns9();
          n = 10;
        }
    }

    ///////////// Question 10 ////////////////////
    if (MCgameSc10) {

        if (back) {
            ctx.fillStyle = "#f7f792";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor10) {
          quest10();
        }

        if (incor) {
            cor10 = false;
            wrong();
        }

        if (cor10) {
          rightAns10();
          //n = 11;
        }
    }


    
    ///////////// Final Screen ////////////////////

    function rightClickFS() {
        wellDoneVoice.pause();
        wellDoneVoice.currentTime = 0;
        music.pause();
        music.currentTime = 0;
        finalScreen = false;
        MCsplashSc = true;
        removeEventListener("click", rightClickFS);
      }

    if (finalScreen) {

        if (back) {
            ctx.fillStyle = "Green";
        }

        if (!back) {
            ctx.fillStyle = "white";
        }

        if (togSpeech) {
            wellDoneVoice.play();
        }
        
        if (!togSpeech) {
            wellDoneVoice.pause();
            wellDoneVoice.currentTime = 0;
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "yellow";
        ctx.textAlign = "center"; 
        ctx.font = "90px Comic Sans MS";
        ctx.fillText("Well Done", w, 200);
        ctx.font = "70px Comic Sans MS";
        ctx.fillText("for completing the", w, 300);
        ctx.fillText("Match Cards!", w, 400);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("Left click on your mouse, OR", w, 500);
        ctx.fillText("Press the Enter Key", w, 560);
        //ctx.fillText("Press the Spacebar", w, 560);
        ctx.fillText("To play again!", w, 620);
        n = 1;


        if (keys[13]) { // Go to Splash Screen
            wellDoneVoice.pause();
            wellDoneVoice.currentTime = 0;
            music.pause();
            music.currentTime = 0;
            finalScreen = false;
            MCsplashSc = true;
        }

        addEventListener("click", rightClickFS);

    }

///// End of playGame function ////////////////////  
}

} // not setMenu


function animate() {

    if (bkMus) {
        music.play();
        music.volume = 0.1;
    }

    if (!bkMus) {
        music.pause();
        music.currentTime = 0;
    }
    

    playGame();
    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);

