

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


// center text
var w = canvas.width / 2;

var play = true;

// initial screen
var MCsplashSc = true;
// main screen

var MCgameSc1 = false;
var MCgameSc2 = false;
var MCgameSc3 = false;
var MCgameSc4 = false;
var MCgameSc5 = false;
var MCgameSc6 = false;
var MCgameSc7 = false;
var finalScreen = false;

var cor1 = false;
var cor2 = false;
var cor3 = false;
var cor4 = false;
var cor5 = false;
var cor6 = false;
var cor7 = false;
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
    ctx.fillText("Match Cards", w, 100);
    // white rectangle
    ctx.fillStyle = "white";
    // border
    ctx.lineWidth = 3;       
    ctx.strokeStyle = "blue";
}

////// Q1 Mouse Controls ////////////////////////

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
    if (play) {
        sir.play();
    }
    if (!play) {
        sir.pause();
        sir.currentTime = 0;
    }

    cardSetUp();

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

    instructions();

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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
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
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick2, false);
    }
}

function Q3checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick3, false);
    }
}

function Q3checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
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

    ctx.drawImage(lam, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(micro, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(cow, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(amb, 630, 400, 300, 200);
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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
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
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("click", Q4checkClick2);
    }
}


function Q4checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("click", Q4checkClick3);
    }
}

function Q4checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
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

    ctx.drawImage(oldPhn, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(micro, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(cow, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(amb, 630, 400, 300, 200);
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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick1, false);
    }
}

function Q5checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick3, false);
    }
}

function Q5checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
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

    ctx.drawImage(micro, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(fireEn, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(cow, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(amb, 630, 400, 300, 200);
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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
        //alert("Moooo");
        microSound.pause();
        microSound.currentTime = 0;
        incor = false;
        cor6 = true;
        removeEventListener("click", Q6checkClick1);
    }
}

function Q6checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q6checkClick2);
    }
}

function Q6checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        //alert("Moooo");
        removeEventListener("check", Q6checkClick3);
    }
}

function Q6checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
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

    ctx.drawImage(micro, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(amb, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(cow, 630, 400, 300, 200);
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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
        //alert("Moooo");
        bellSound.pause();
        bellSound.currentTime = 0;
        cor7 = true;
        removeEventListener("click", Q7checkClick1);
    }
}

function Q7checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("check", Q7checkClick2);
    }
}

function Q7checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        //alert("Moooo");
        removeEventListener("check", Q7checkClick3);
    }
}

function Q7checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
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

    ctx.drawImage(bell, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(amb, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(cow, 630, 400, 300, 200);
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
        ctx.fillText("Left click on your mouse", w, 400);
        ctx.fillText("OR", w, 465);
        ctx.fillText("Press the Spacebar", w, 520);
        ctx.fillText("for the next question!", w, 610);

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
        finalScreen = true;
        //MCgameSc3 = true;
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
        ctx.fillText("Left click on your mouse", w, 400);
        ctx.fillText("OR", w, 465);
        ctx.fillText("Press the Spacebar", w, 520);
        ctx.fillText("for the next question!", w, 610);

        if (keys[32]) { // Go to Q3
            MCgameSc2 = false;
            finalScreen = true;
            //MCgameSc3 = true;
            cowVoice.pause();
            cowVoice.currentTime = 0;
            cor2 = false;
        }

        addEventListener("click", rightClick2);
    }



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
        }
    }
    

    function rightClickFS() {
        wellDoneVoice.pause();
        wellDoneVoice.currentTime = 0;
        music.pause();
        music.currentTime = 0;

        //incor = false;
        finalScreen = false;
        MCsplashSc = true;
        removeEventListener("click", rightClickFS);
      }

    if (finalScreen) {
        //wellDoneVoice.play();
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

