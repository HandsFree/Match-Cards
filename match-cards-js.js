
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// center text
var w = canvas.width / 2;

var play = true;

// initial screen
var MCsplashSc = true;

var gameIns = true;

var n = 1;

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

// Voices
var wrongVoice = new Audio("sounds/wrong-v.mp3");

var ambVoice = new Audio("sounds/amb-v1.mp3");
var cowVoice = new Audio("sounds/cow-v1.mp3");
var lambVoice = new Audio("sounds/lamb-v1.mp3");
var telVoice = new Audio("sounds/old-phone-v1.mp3");
var fEngVoice = new Audio("sounds/fire-en-v1.mp3");
var microVoice = new Audio("sounds/micro-v1.mp3");
var doorbell = new Audio("sounds/doorbell-v1.mp3");

var wellDoneVoice = new Audio("sounds/well-done-v.mp3");

function closeSplash() {
    incor = false;
    splashAud.pause();
    splashAud.currentTime = 0;
    MCsplashSc = false;
    MCgameSc1 = true;
    music.play();
    music.volume = 0.1;
    window.removeEventListener("click", closeSplash, false);
}

function splash() {
    ctx.drawImage(mcSplash, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 400, 715, 235);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "40px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Click the left mouse button", w, 460);
    ctx.fillStyle = "red";
    ctx.fillText("or press the Spacebar", w, 510);
    ctx.fillStyle = "blue";
    ctx.fillText("or use your switch", w, 560);
    ctx.fillStyle = "purple";
    ctx.fillText("to play!", w, 610);
    ctx.fillStyle = "white";
    ctx.fillRect(5, 415, 80, 100);
    ctx.drawImage(speech, 20, 420, 50, 50);
    ctx.font = "bold 15px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Press A", 45, 490);
    ctx.fillText("for Speech", 45, 510);

    if (keys[65]) { // audio
        splashAud.play();
    }

    if (keys[32]) { // Go to game
        splashAud.pause();
        splashAud.currentTime = 0;
        MCsplashSc = false;
        MCgameSc1 = true;
        music.play();
        music.volume = 0.1;
        incor = false;
    }  
    
    window.addEventListener("click", closeSplash, false);
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
 
function cardSetUp() {
    // text
    ctx.font = "80px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Match Cards" + n, w, 100);
    // white rectangle
    ctx.fillStyle = "white";
    // border
    ctx.lineWidth = 4;
    ctx.strokeStyle = "blue";
}

function rightAnsText() {
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    ctx.fillText("for the next question!", w, 610);
}

////// Q1 Mouse Controls ////////////////////////

function gameStart(e) {
    gameIns = false;
    gameInsSpeech.pause();
    gameInsSpeech.currentTime = 0;
    removeEventListener("click", gameIns);
}

function Q1checkClick1(e) {
	if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = false;
        cor1 = true;
        removeEventListener("click", Q1checkClick1);
    }
}

function Q1checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("check", Q1checkClick2);
    }
}

function Q1checkClick3(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("check", Q1checkClick3);
    }
}

function Q1checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("check", Q1checkClick4);
    }
}

/////////// end of Q1 Mouse Controls ////////////////////////////////

/////////  Question 1 //////////////////

function quest1() {

    // Question 1  
    if (play && !gameIns) {
        sir.play();
    }
    if (!play) {
        sir.pause();
        sir.currentTime = 0;
    }

    if (!gameIns) {
    cardSetUp();
    }

    ctx.drawImage(amb, 50, 150, 300, 200);
	amb.path = new Path2D();
    amb.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 370, 150, 300, 200);
    lam.path = new Path2D();
    lam.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(micro, 50, 380, 300, 200);
    micro.path = new Path2D();
    micro.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(cow, 370, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(370, 380, 300, 200);
    foQus();

    if (!gameIns) {
    instructions();
    }

    if (gameIns) {
        gameInsSpeech.play();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.85;
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
        ctx.fillText("Press the spacebar", w, 550);
        ctx.fillText("OR", w, 590);
        ctx.fillText("Left Click on your Mouse", w, 623);
        ctx.fillText("To Continue...", w, 670);

        if (keys[32]) { // Start game...
            gameIns = false;
            gameInsSpeech.pause();
            gameInsSpeech.currentTime = 0;
        } 
    }

    if (gameIns) {
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) {
    addEventListener("click", Q1checkClick1, false);
    addEventListener("click", Q1checkClick2, false);
    addEventListener("click", Q1checkClick3, false);
    addEventListener("click", Q1checkClick4, false);
    

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
        removeEventListener("click", Q2checkClick1, false);
    }
}

function Q2checkClick2(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {    
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("click", Q2checkClick2, false);
    }
}

function Q2checkClick3(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {    
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("click", Q2checkClick3, false);
    }
}

function Q2checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = true;
        removeEventListener("click", Q2checkClick4, false);
    }
}

/////////// end of Q2 Mouse Controls ////////////////////////////////



/////////  Question 2 //////////////////
function quest2() {

    // Question 2    

    if (play) {
        cow1.play();
    }
    if (!play) {
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

    addEventListener("click", Q2checkClick1);
    addEventListener("click", Q2checkClick2);
    addEventListener("click", Q2checkClick3);
    addEventListener("click", Q2checkClick4);

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
        removeEventListener("click", Q3checkClick1, false);
    }
}

function Q3checkClick2(e) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick2, false);
    }
}

function Q3checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick3, false);
    }
}

function Q3checkClick4(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick4, false);
    }
}

/////////// end of Q3 Mouse Controls ////////////////////////////////

/////////  Question 3 //////////////////
function quest3() {

    // Question 3    

    if (play) {
        lamb.play();
    }
    if (!play) {
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

    addEventListener("click", Q3checkClick1, false);
    addEventListener("click", Q3checkClick2, false);
    addEventListener("click", Q3checkClick3, false);
    addEventListener("click", Q3checkClick4, false);

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
        removeEventListener("click", Q4checkClick1);
    }
}

function Q4checkClick2(e) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("click", Q4checkClick2);
    }
}


function Q4checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("click", Q4checkClick3);
    }
}

function Q4checkClick4(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("click", Q4checkClick4);
    }
}

/////////// end of Q4 Mouse Controls ////////////////////////////////

/////////  Question 4 //////////////////
function quest4() {

    // Question 4    

    if (play) {
        oldPhone.play();
    }
    if (!play) {
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

    addEventListener("click", Q4checkClick1);
    addEventListener("click", Q4checkClick2);
    addEventListener("click", Q4checkClick3);
    addEventListener("click", Q4checkClick4);

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
        removeEventListener("click", Q5checkClick1, false);
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
        removeEventListener("click", Q5checkClick2, false);
    }
}

function Q5checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick3, false);
    }
}

function Q5checkClick4(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick4, false);
    }
}

/////////// end of Q5 Mouse Controls ////////////////////////////////

/////////  Question 5 //////////////////
function quest5() {  
    
    if (play) {
        fireEng.play();
    }
    if (!play) {
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

    addEventListener("click", Q5checkClick1);
    addEventListener("click", Q5checkClick2);
    addEventListener("click", Q5checkClick3);
    addEventListener("click", Q5checkClick4);

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
        removeEventListener("click", Q6checkClick1);
    }
}

function Q6checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q6checkClick2);
    }
}

function Q6checkClick3(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q6checkClick3);
    }
}

function Q6checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q6checkClick4);
    }
}

/////////// end of Q6 Mouse Controls ////////////////////////////////




/////////  Question 6 //////////////////

function quest6() {

    if (play) {
        microSound.play();
    }
    if (!play) {
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

    addEventListener("click", Q6checkClick1);
    addEventListener("click", Q6checkClick2);
    addEventListener("click", Q6checkClick3);
    addEventListener("click", Q6checkClick4);

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
        removeEventListener("click", Q7checkClick1);
    }
}

function Q7checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q7checkClick2);
    }
}

function Q7checkClick3(e) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q7checkClick3);
    }
}

function Q7checkClick4(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q7checkClick4);
    }
}

/////////// end of Q7 Mouse Controls ////////////////////////////////

/////////  Question 7 //////////////////

function quest7() {

    if (play) {
        bellSound.play();
    }
    if (!play) {
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

    addEventListener("click", Q7checkClick1);
    addEventListener("click", Q7checkClick2);
    addEventListener("click", Q7checkClick3);
    addEventListener("click", Q7checkClick4);

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
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("click", Q8checkClick1);
    }
}

function Q8checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("check", Q8checkClick2);
    }
}

function Q8checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = false;
        cor8 = true;
        removeEventListener("check", Q8checkClick3);
    }
}

function Q8checkClick4(e) {
    
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("check", Q8checkClick4);
    }
}

/////////// end of Q7 Mouse Controls ////////////////////////////////



/////////  Question 8 //////////////////

function quest8() {

    if (play) {
        cow1.play();
    }
    if (!play) {
        cow1.pause();
        cow1.currentTime = 0;
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

    ctx.drawImage(cow, 50, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(amb, 370, 380, 300, 200);
    amb.path = new Path2D();
    amb.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    addEventListener("click", Q8checkClick1);
    addEventListener("click", Q8checkClick2);
    addEventListener("click", Q8checkClick3);
    addEventListener("click", Q8checkClick4);

    if (keys[49]) { // Correct
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
    }

    if (keys[50]) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
    }

    if (keys[51]) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        cor8 = true;
    }

    if (keys[52]) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
    }

}
////////// End of Question 8 ////////////////////






//// Answers ///////////////////////

// mouse controls right Answer 1 //
function rightClick1() {
    ambVoice.pause();
    ambVoice.currentTime = 0;
    incor = false;
    cor1 = false;
    MCgameSc1 = false;
    MCgameSc2 = true;
    window.removeEventListener("click", rightClick1);
}
// End mouse controls right Answer //

/////////  Right Answer 1 //////////////////
    function rightAns1() {
        ambVoice.play();
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
        window.removeEventListener("click", rightClick2);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 2 //////////////////
    function rightAns2() {
        cowVoice.play();
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
        window.removeEventListener("click", rightClick3);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 3 //////////////////
    function rightAns3() {
        lambVoice.play();
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
        window.removeEventListener("click", rightClick4);
    }
    // End mouse controls right Answer //

     /////////  Right Answer 4 //////////////////
     function rightAns4() {
        telVoice.play();
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
        window.removeEventListener("click", rightClick5);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 5 //////////////////
    function rightAns5() {
        fEngVoice.play();
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
      window.removeEventListener("click", rightClick6);
    }
// End mouse controls right Answer //

    /////////  Right Answer 6 //////////////////
    function rightAns6() {
        microVoice.play();
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
        window.removeEventListener("click", rightClick7);
      }
  // End mouse controls right Answer //

     /////////  Right Answer 7 //////////////////
     function rightAns7() {
        doorbell.play();
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
        //ctx.fillText("Press the Spacebar", w, 520);
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
        cowVoice.pause();
        cowVoice.currentTime = 0;
        incor = false;
        MCgameSc8 = false;
        //MCgameSc9 = true;
        finalScreen = true;
        window.removeEventListener("click", rightClick7);
      }
  // End mouse controls right Answer //

     /////////  Right Answer 8 //////////////////
     function rightAns8() {
        cowVoice.play();
        ctx.fillStyle = "white";
        ctx.fillRect(15, 40, 687, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(15, 40, 687, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "100px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("The sound was a Cow!", w, 290);
        ctx.font = "40px Comic Sans MS";
        ctx.fillText("Left click on your mouse", w, 400);
        ctx.fillText("OR", w, 465);
        ctx.fillText("Press the Spacebar", w, 520);
        //ctx.fillText("for the next question!", w, 610);

        if (keys[32]) { // Go to Final Screen
            cor8 = false;
            cowVoice.pause();
            cowVoice.currentTime = 0;
            MCgameSc8 = false;
            //MCgameSc9 = true;
            finalScreen = true;
        }

        addEventListener("click", rightClick8);
    }



    // mouse controls Wrong Answer //
    function clickWrong() {
        play = true;
        wrongVoice.pause();
        wrongVoice.currentTime = 0;
        incor = false;
        window.removeEventListener("click", clickWrong);
    }

    /////////  Wrong Awnser //////////////////
    function wrong() {     
        play = false;
        wrongVoice.play();
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

    if (MCsplashSc) {
        splash();
    }

    ///////// Question 1 //////////////////
    if (MCgameSc1) {
        ctx.fillStyle = "#FFA500";
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
        ctx.fillStyle = "#45c345";
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
        ctx.fillStyle = "#77a9de";
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
        }
    }

    ///////////// Question 4 ////////////////////
    if (MCgameSc4) {
        ctx.fillStyle = "#8fb58f";
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
        }
    }

    ///////////// Question 5 ////////////////////
    if (MCgameSc5) {
        ctx.fillStyle = "#bca3cf";
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
        }
    }

    ///////////// Question 6 ////////////////////
    if (MCgameSc6) {
        ctx.fillStyle = "pink";
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
        }
    }

    ///////////// Question 7 ////////////////////
    if (MCgameSc7) {
        ctx.fillStyle = "yellow";
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
        }
    }

    ///////////// Question 8 ////////////////////
    if (MCgameSc8) {
        ctx.fillStyle = "#03fcf4";
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
        }
    }

    ///////////// Question 9 ////////////////////
    if (MCgameSc9) {
        ctx.fillStyle = "#f0659f";
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
        }
    }

    ///////////// Question 10 ////////////////////
    if (MCgameSc10) {
        ctx.fillStyle = "#f7f792";
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
        wellDoneVoice.play();
        ctx.fillStyle = "Green";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
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


function animate() {  
    playGame();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

