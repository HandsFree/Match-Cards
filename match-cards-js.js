const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

// center text
var w = canvas.width / 2;

// initial screen
var MCsplashSc = true;
// main screen
var MCgameSc1 = false;
var MCgameSc2 = false;
var MCgameSc3 = false;
var MCgameSc4 = false;
var finalScreen = false;

var cor1 = false;
var cor2 = false;
var cor3 = false;
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

const amb = new Image();
amb.src = "images/ambulance.jpg";

const lam = new Image();
lam.src = "images/lamb.jpg";

const micro = new Image();
micro.src = "images/microwave.jpg";

const cow = new Image();
cow.src = "images/cow.jpg";

var sir = new Audio("sounds/siren1.mp3");
var cow1 = new Audio("sounds/cow.mp3");
var lamb = new Audio("sounds/lamb.mp3");

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
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("Match the sound to the picture using the keyboard numbers - 1,2,3,4", w, 700);
}

function cardSetUp() {
    // text
    ctx.font = "70px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Match Cards", w, 85);
    // white rectangle
    ctx.fillStyle = "white";
    // border
    ctx.lineWidth = 3;
    ctx.strokeRect(250, 130, 730, 500);        
    ctx.fillRect(250, 130, 730, 500);
    ctx.strokeStyle = "blue";
}

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

    if (keys[49]) { // Correct
        sir.pause();
        sir.currentTime = 0;
        cor1 = true;
    }

    if (keys[50]) { // Incorrect
        incor = true;
    }

    if (keys[51]) { // Incorrect
        incor = true;
    }

    if (keys[52]) { // Incorrect
        incor = true;
    }

}
////////// End of Question 1 ////////////////////

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


    if (keys[49]) { // Incorrect
        incor = true;
    }

    if (keys[50]) { // Incorrect
        incor = true;
    }

    if (keys[51]) { // Incorrect
        incor = true;
    }

    if (keys[52]) { // Correct
        cow1.pause();
        cow1.currentTime = 0;
        cor2 = true;
    }

}

////////// End of Question 2 ////////////////////

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

    if (keys[49]) {
        lamb.pause();
        lamb.currentTime = 0;
        cor3 = true;
    }

    if (keys[50]) { // Incorrect
        incor = true;
    }

    if (keys[51]) { // Incorrect
        incor = true;
    }

    if (keys[52]) { // Incorrect
        incor = true;
    }

}

////////// End of Question 3 ////////////////////

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
    }

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
    }

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
        //ctx.fillText("for the next question!", w, 500);

        if (keys[32]) { // Go to Q3
            MCgameSc3 = false;
            //MCgameSc4 = true;

            // Go to the end
            finalScreen = true;
        }
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
          wrong();
        }

        if (cor2) {
          rightAns2();
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
          wrong();
        }

        if (cor3) {
          rightAns3();
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
    mId = requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

