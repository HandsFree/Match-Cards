const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

// center text
var w = canvas.width / 2;

//var score = 0;

// initial screen
var MCsplashSc = true;
// main screen
var MCgameSc1 = false;
var MCgameSc2 = false;
var MCgameSc3 = false;
var MCgameSc4 = false;
var MCgameSc5 = false;
var MCgameSc6 = false;
var finalScreen = false;

var cor1 = false;
var cor2 = false;
var cor3 = false;
var cor4 = false;
var cor5 = false;
var cor6 = false;
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

var sir = new Audio("sounds/siren1.mp3");
var cow1 = new Audio("sounds/cow.mp3");
var lamb = new Audio("sounds/lamb.mp3");
var oldPhone = new Audio("sounds/old-phone.mp3");
var fireEng = new Audio("sounds/fire-eng.mp3");
var microSound = new Audio("sounds/microwave.mp3");


function closeSplash() {
    MCsplashSc = false;
    MCgameSc1 = true;
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
        MCgameSc1 = true;
    }  
    
    window.addEventListener("click", closeSplash);
}

function firstQus() {
    ctx.strokeRect(300, 170, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(305, 175, 42, 68);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("1", 325, 230);
}

function secQus() {
    ctx.strokeRect(630, 170, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(635, 175, 42, 68);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("2", 655, 230);
}

function thQus() {
    ctx.strokeRect(300, 400, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(305, 406, 42, 68);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("3", 325, 458);
}

function foQus() {
    ctx.strokeRect(630, 400, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(635, 406, 42, 68);
    ctx.fillStyle = "blue";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText("4", 655, 458);
}

function instructions() {
    ctx.fillStyle = "blue";
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("Match the sound to the picture using the keyboard numbers - 1,2,3,4", w, 675);
    ctx.fillText("or left click on the picture", w, 710);
}
 
function cardSetUp() {
    // text
    ctx.font = "70px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Match Cards", w, 85);
    //- Score " + score
    // white rectangle
    ctx.fillStyle = "white";
    // border
    ctx.lineWidth = 3;
    ctx.strokeRect(250, 130, 730, 500);        
    ctx.fillRect(250, 130, 730, 500);
    ctx.strokeStyle = "blue";
}

////// Q1 Mouse Controls ////////////////////////

function Q1checkClick1(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
        //alert("Moooo");
        sir.pause();
        sir.currentTime = 0;
        cor1 = true;
        removeEventListener("click", Q1checkClick1);
    }
}

function Q1checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("check", Q1checkClick2);
    }
}

function Q1checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        //alert("Moooo");
        removeEventListener("check", Q1checkClick3);
    }
}

function Q1checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
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
    sir.play();

    cardSetUp();

    ctx.drawImage(amb, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(lam, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(micro, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(cow, 630, 400, 300, 200);
    foQus();

    instructions();

    addEventListener("click", Q1checkClick1);
    addEventListener("click", Q1checkClick2);
    addEventListener("click", Q1checkClick3);
    addEventListener("click", Q1checkClick4);

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
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 245 && e.screenY < 450) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("click", Q2checkClick1);
    }
}

function Q2checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("click", Q2checkClick2);
    }
}

function Q2checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("click", Q2checkClick3);
    }
}

function Q2checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
        cow1.pause();
        cow1.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = true;
        removeEventListener("click", Q2checkClick4);
    }
}

/////////// end of Q2 Mouse Controls ////////////////////////////////



/////////  Question 2 //////////////////
function quest2() {

    // Question 2    
    cow1.play();

    cardSetUp();

    ctx.drawImage(amb, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(micro, 630, 170, 300, 200);
    secQus();

    ctx.drawImage(lam, 300, 400, 300, 200);
    thQus();

    ctx.drawImage(cow, 630, 400, 300, 200);
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
        removeEventListener("click", Q3checkClick1);
    }
}

function Q3checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick2);
    }
}

function Q3checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick3);
    }
}

function Q3checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("click", Q3checkClick4);
    }
}

/////////// end of Q3 Mouse Controls ////////////////////////////////

/////////  Question 3 //////////////////
function quest3() {

    // Question 3    
    lamb.play();

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

    addEventListener("click", Q3checkClick1);
    addEventListener("click", Q3checkClick2);
    addEventListener("click", Q3checkClick3);
    addEventListener("click", Q3checkClick4);

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
    oldPhone.play();

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
        incor = false;
        cor1 = false;
        cor2 = false;
        cor3 = false;
        cor4 = false;
        cor5 = true;
        removeEventListener("click", Q5checkClick1);
    }
}

function Q5checkClick2(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 245 && e.screenY < 450) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick2);
    }
}

function Q5checkClick3(e) {
    if (e.screenX > 460 && e.screenX < 770 && e.screenY > 470 && e.screenY < 680) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick3);
    }
}

function Q5checkClick4(e) {
    if (e.screenX > 795 && e.screenX < 1100 && e.screenY > 470 && e.screenY < 680) {
        //alert("Roerrrr");
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("click", Q5checkClick4);
    }
}

/////////// end of Q5 Mouse Controls ////////////////////////////////

/////////  Question 5 //////////////////
function quest5() {

    // Question 4    
    fireEng.play();

    cardSetUp();

    ctx.drawImage(fireEn, 300, 170, 300, 200);
    firstQus();
  
    ctx.drawImage(micro, 630, 170, 300, 200);
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

    if (keys[49]) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = false;
        cor5 = true;
    }

    if (keys[50]) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
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
    
    microSound.play();

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







//// Answers ///////////////////////

// mouse controls right Answer 1 //
function rightClick1() {
    incor = false;
    MCgameSc1 = false;
    MCgameSc2 = true;
    window.removeEventListener("click", rightClick1);
}
// End mouse controls right Answer //

/////////  Right Answer 1 //////////////////
    function rightAns1() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was an ambulance!", w, 300);
        ctx.fillText("Press the Spacebar", w, 400);
        ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q2
            MCgameSc1 = false;
            MCgameSc2 = true;
        }

        addEventListener("click", rightClick1);
    }

    // mouse controls right Answer 2 //
    function rightClick2() {
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = true;
        window.removeEventListener("click", rightClick2);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 2 //////////////////
    function rightAns2() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was a cow!", w, 300);
        ctx.fillText("Press the Spacebar", w, 400);
        ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q3
            MCgameSc2 = false;
            MCgameSc3 = true;
        }

        addEventListener("click", rightClick2);
    }

    // mouse controls right Answer 3 //
    function rightClick3() {
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = true;
        removeEventListener("click", rightClick3);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 3 //////////////////
    function rightAns3() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was a lamb!", w, 300);
        ctx.fillText("Press the Spacebar", w, 400);
        ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q3
            MCgameSc3 = false;
            MCgameSc4 = true;
        }
        addEventListener("click", rightClick3);
    }

    // mouse controls right Answer 4 //
    function rightClick4() {
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = false;
        MCgameSc5 = true;
        removeEventListener("click", rightClick4);
    }
    // End mouse controls right Answer //

     /////////  Right Answer 4 //////////////////
     function rightAns4() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was an old telephone!", w, 300);
        ctx.fillText("Press the Spacebar", w, 400);
        ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q4
            MCgameSc4 = false;
            MCgameSc5 = true;
        }
        addEventListener("click", rightClick4);
    }

    // mouse controls right Answer 5 //
    function rightClick5() {
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = false;
        MCgameSc5 = false;
        MCgameSc6 = true;
        //finalScreen = true;
        removeEventListener("click", rightClick5);
    }
    // End mouse controls right Answer //

    /////////  Right Answer 5 //////////////////
    function rightAns5() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was a Fire Engine!", w, 300);
        ctx.fillText("Press the Spacebar", w, 400);
        ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q5
            MCgameSc5 = false;
            MCgameSc6 = true;
            //finalScreen = true;
        }
        addEventListener("click", rightClick5);
    }

      // mouse controls right Answer 6 //
      function rightClick6() {
      incor = false;
      MCgameSc6 = false;
      finalScreen = true;
      removeEventListener("click", rightClick6);
    }
// End mouse controls right Answer //

    /////////  Right Answer 6 //////////////////
    function rightAns6() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "green";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "green";
        ctx.textAlign = "center"; 
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("The sound was a microwave!", w, 300);
        ctx.fillText("Press the Spacebar", w, 400);
        //ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q2
            MCgameSc6 = false;
            finalScreen = true;
        }

        addEventListener("click", rightClick6);
    }

    function clickWrong() {
        incor = false;
        removeEventListener("click", clickWrong);
    }

    /////////  Wrong Awnser //////////////////
    function wrong() {
        ctx.fillStyle = "white";
        ctx.fillRect(120, 40, 950, 650);
        ctx.strokeStyle = "red";
        ctx.strokeRect(120, 40, 950, 650);
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "120px Comic Sans MS";
        ctx.fillText("Oh No!", w, 170);
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("that's not right!", w, 270);
        ctx.fillStyle = "blue";
        ctx.fillText("Why not try Again?", w, 400);
        ctx.fillStyle = "red";
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("Press the Spacebar", w, 570);
        ctx.fillText("to continue!", w, 640);

        addEventListener("click", clickWrong);

        if (keys[32]) { // Go to return to game
            incor = false;
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
           //score=score+1;
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
          //score=score+1;
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
          //score=score+1;
        }
    }

    ///////////// Final Screen ////////////////////
    if (finalScreen) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        ctx.font = "90px Comic Sans MS";
        ctx.fillText("Well Done", w, 200);
        ctx.font = "70px Comic Sans MS";
        ctx.fillText("for completing the", w, 300);
        ctx.fillText("Match Cards!", w, 400);      
    }

///// End of playGame function ////////////////////  
}


function animate() {
    playGame();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

