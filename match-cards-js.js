


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.setAttribute('tabindex','1');
canvas.focus();

var langaugeMenuSettings = false;

var SetSplashKey = true;

var firstQu = true;

var playingGameMode = false;

//BackCl = false;

// Photo dimensions
const wdt = 300;
const ht = 200;

//////////////////////////////////
var mouseMode = false;
var keyboardMode = false;
//////////////////////////////////

var splashSpeech = true;
var splashSettings = true;

////////////////////////////////
/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
/////////////////////////////////


    function switchKeys1(e) {
        if ((keys[32]) && KeyGame1 && Sw1 && !mouseMode && keyboardMode) {
            KeyGame1 = false;
            KeyGame2 = true;
            KeyGame3 = false;
            KeyGame4 = false;
            Sw1 = false;
            Sw2 = true;
            removeEventListener("keydown", switchKeys1, false);
        }
    }
    
    function switchKeys2(e) {
        if ((keys[32]) && KeyGame2 && Sw2 && !mouseMode && keyboardMode) {
        KeyGame1 = false;
        KeyGame2 = false;
        KeyGame3 = true;
        KeyGame4 = false;
        Sw1 = false;
        Sw2 = false;
        Sw3 = true;
        Sw4 = false; 
        removeEventListener("keydown", switchKeys2, false);
        }
    }
    
    
    function switchKeys3(e) {
        if ((keys[32]) && KeyGame3 && Sw3 && !mouseMode && keyboardMode) {
        KeyGame1 = false;
        KeyGame2 = false;
        KeyGame3 = false;
        KeyGame4 = true;
        Sw1 = false;
        Sw2 = false;
        Sw3 = false;
        Sw4 = true;
        removeEventListener("keydown", switchKeys3, false);
        }
    }
    
    function switchKeys4(e) {
        if ((keys[32]) && KeyGame4 && Sw4 && !mouseMode && keyboardMode) {
        KeyGame1 = true;
        KeyGame2 = false;
        KeyGame3 = false;
        KeyGame4 = false;
        Sw1 = true;
        Sw2 = false;
        Sw3 = false;
        Sw4 = false;
        removeEventListener("keydown", switchKeys4, false);
        }
    }
    
    function keyboardAndswitch() {
        if (Sw1 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys1, false);
        }
    
        if (Sw2 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys2, false);
        }
        
        if (Sw3 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys3, false);
        }
        
        if (Sw4 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys4, false);
        }
    }

//Switch Controls/////////////////////////
//                                      //
//Settings Menu                         //
var KeyboardMenu = false;               //
var KeyMenu1 = true;                    // 
var KeyMenu2 = false;                   // 
var KeyMenu3 = false;                   // 
var KeyMenu4 = false;                   //
var KeyMenu5 = false;                   //
var KeyMenu6 = false;                   //
var KeyMenu7 = false;                   //
var KeyMenu8 = false;                   //
var KeyMenu9 = false;                   //
var KeyMenu10 = false; 
var KeyMenu11 = false; 
var KeyMenu12 = false; 
var KeyMenu13 = false; 
var KeyMenu14 = false; 
                                        //
var MSw1 = true;                        //
var MSw2 = false;                       //
var MSw3 = false;                       //
var MSw4 = false;                       //
var MSw5 = false;                       //
var MSw6 = false;                       //                                        
var MSw7 = false;                       // 
var MSw8 = false;                       //
var MSw9 = false;  
var MSw10 = false; 
var MSw11 = false; 
var MSw12 = false; 
var MSw13 = false; 
var MSw14 = false; 
                     //
                                        //
//Game                                  //
var KeyboardGame = false;               //
var KeyGame1 = true;                    //
var KeyGame2 = false;                   //
var KeyGame3 = false;                   //
var KeyGame4 = false;                   //
var Sw1 = true;                         //
var Sw2 = false;                        //
var Sw3 = false;                        //
var Sw4 = false;                        //
//                                      //
///End Switch Controls////////////////////





/***********For Menu************/
    

// Close menu
var setMenu=false;

// Background Music
var bkMus = true;

// Set Background
//var back = true;
var colod = true;
var white = false;

// Set Speech
var togSpeech = true;

// Questions
var togQs1 = false;

var togQs2 = false;

var togQs3 = true;


/************end****************/

// center text
var w = canvas.width / 2;


// main screen
var gameSc = false;

// initial screen
var MCsplashSc = true;

var gameIns=false;

var sEff = true;

var n = 1; // Question Count

// Questions 
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
var MCgameSc11 = false;
var MCgameSc12 = false;

var finalScreen = false;

// Answers
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
var cor11 = false;
var cor12 = false;

// Wrong Answer
var incor = false;



const keys = []; // keyboard operations

window.addEventListener("keydown", function(e){
    if (!mouseMode) {
    keys[e.keyCode] = true;
    }
});

window.addEventListener("keyup", function(e){
    if (!mouseMode) {
    delete keys[e.keyCode];
    }
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

const SettingsBox = new Image();
SettingsBox.src = "images/SettingsBox.png";

const settings = new Image();
settings.src = "images/settings.png";



// Settings Menu
const mBack = new Image();
mBack.src = "images/menuAssets/backGr1.png";

///////////////////////////////////////////////////////////
// tick image //
const rTick1 = new Image();
rTick1.src = "images/menuAssets/rTick1.png";
///////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// music images //
const mus = new Image();
mus.src = "images/menuAssets/music.png";

const BoxMus1 = new Image();
BoxMus1.src = "images/menuAssets/BoxMus1.png";

const BoxMus2 = new Image();
BoxMus2.src = "images/menuAssets/BoxMus2.png";
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// background images //
const background = new Image();
background.src = "images/menuAssets/background.png";

const BoxBack1 = new Image();
BoxBack1.src = "images/menuAssets/BoxBack1.png";

const BoxBack2 = new Image();
BoxBack2.src = "images/menuAssets/BoxBack2.png";
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Speech images // 16/4/22
const speechEff = new Image();
speechEff.src = "images/menuAssets/speech.png";

const BoxSp1 = new Image();
BoxSp1.src = "images/menuAssets/BoxSp1.png";

const BoxSp2 = new Image();
BoxSp2.src = "images/menuAssets/BoxSp2.png";
//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Questions images // 17/4/22
const noQs = new Image();
noQs.src = "images/menuAssets/noQuestions.png";

const BoxQ41 = new Image();
BoxQ41.src = "images/menuAssets/BoxQ41.png";

const BoxQ81 = new Image();
BoxQ81.src = "images/menuAssets/BoxQ81.png";

const BoxQ121 = new Image();
BoxQ121.src = "images/menuAssets/BoxQ121.png";
///////////////////////////////////////////////////////////

// Langauge Settings
const lang = new Image();
lang.src = "images/menuAssets/lang.png";

const langE = new Image();
langE.src = "images/menuAssets/langE.png";


// Close Menu
const cross = new Image();
cross.src = "images/menuAssets/cross.png";

const cross1 = new Image();
cross1.src = "images/menuAssets/cross1.png";

// Langauge Sub-Menu
const crossLang = new Image();
crossLang.src = "images/menuAssets/langCross.png";

const insMouse = new Image();
insMouse.src = "images/menuAssets/gi.png";

const le = new Image();
le.src = "images/menuAssets/le.png";

const gm1 = new Image();
gm1.src = "images/menuAssets/gm1.png";

const gk = new Image();
gk.src = "images/menuAssets/gk.png";

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


//////////////////////////////
// new
const collie = new Image();
collie.src = "images/collie.jpg";

const pCar = new Image();
pCar.src = "images/policeCar.jpg";

const tennis = new Image();
tennis.src = "images/tennis.JPG";

const tram = new Image();
tram.src = "images/tram.jpg";





/////////////////////////////////

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

var barkEff = new Audio("sounds/bark.mp3");
var tramEff  = new Audio("sounds/TramBell.mp3");

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
var rugEff = new Audio("sounds/rugbyVce.mp3");

var barkVce = new Audio("sounds/barkVce.mp3");
var tramVce = new Audio("sounds/tramVce.mp3");

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
    cor11=false;
    cor12=false;
}


function switchKeysM1(e) {
    if (keyboardMode) {
    if ((keys[32]) && KeyMenu1 && MSw1) {
        KeyMenu1 = false;
        KeyMenu2 = true;
        KeyMenu3 = false;
        KeyMenu4 = false;
        KeyMenu5 = false;
        KeyMenu6 = false;
        MSw1 = false;
        MSw2 = true;
        MSw3 = false;
        MSw4 = false;
        MSw5 = false;
        MSw6 = false;
        removeEventListener("keydown", switchKeysM1, false);
    }
    }
}

function switchKeysM2(e) {
    if (keyboardMode) {
    if ((keys[32]) && KeyMenu2 && MSw2) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = true;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    MSw1 = false;
    MSw2 = false;
    MSw3 = true;
    MSw4 = false;
    MSw5 = false; 
    MSw6 = false; 
    removeEventListener("keydown", switchKeysM2, false);
    }
    }
}


function switchKeysM3(e) {
    if (keyboardMode) {
    if ((keys[32]) && KeyMenu3 && MSw3) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = true;
    KeyMenu5 = false;
    KeyMenu6 = false;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = true;
    MSw5 = false;
    MSw6 = false;
    removeEventListener("keydown", switchKeysM3, false);
    }
}
}

function switchKeysM4(e) {
    if ((keys[32]) && KeyMenu4 && MSw4) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = true;
    KeyMenu6 = false;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = true;
    MSw6 = false;
    removeEventListener("keydown", switchKeysM4, false);
    }
}

function switchKeysM5(e) {
    if ((keys[32]) && KeyMenu5 && MSw5) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = true;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = true;
    removeEventListener("keydown", switchKeysM5, false);
    }
}

function switchKeysM6(e) {
    if ((keys[32]) && KeyMenu6 && MSw6) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    KeyMenu7 = true;
    MSw1 = true;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = false;
    MSw7 = true;
    removeEventListener("keydown", switchKeysM6, false);
    }
}

function switchKeysM7(e) {
    if ((keys[32]) && KeyMenu7 && MSw7) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    KeyMenu7 = false;
    KeyMenu8 = true;
    KeyMenu9 = false;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = false;
    MSw7 = false;
    MSw8 = true;
    MSw9 = false;
    removeEventListener("keydown", switchKeysM7, false);
    }
}

function switchKeysM8(e) {
    if ((keys[32]) && KeyMenu8 && MSw8) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    KeyMenu7 = false;
    KeyMenu8 = false;
    KeyMenu9 = true;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = false;
    MSw7 = false;
    MSw8 = false;
    MSw9 = true;
    removeEventListener("keydown", switchKeysM8, false);
    }
}

function switchKeysM9(e) {
    if ((keys[32]) && KeyMenu9 && MSw9) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    KeyMenu7 = false;
    KeyMenu8 = false;
    KeyMenu9 = false;
    KeyMenu10 = true;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = false;
    MSw7 = false;
    MSw8 = false;
    MSw9 = false;
    MSw10 = true;
    removeEventListener("keydown", switchKeysM9, false);
    }
}

function switchKeysM10(e) {
    if ((keys[32]) && KeyMenu10 && MSw10) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    KeyMenu7 = false;
    KeyMenu8 = false;
    KeyMenu9 = false;
    KeyMenu10 = false;
    KeyMenu13 = true;
    MSw1 = false;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = false;
    MSw7 = false;
    MSw8 = false;
    MSw9 = false;
    MSw10 = false;
    MSw13 = true;
    removeEventListener("keydown", switchKeysM10, false);
    }
}

function switchKeysM13(e) {
    if ((keys[32]) && KeyMenu13 && MSw13) {
    KeyMenu1 = true;
    KeyMenu2 = false;
    KeyMenu3 = false;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    KeyMenu7 = false;
    KeyMenu8 = false;
    KeyMenu9 = false;

    // big buttons
    KeyMenu10 = false;
    KeyMenu11 = false;
    KeyMenu12 = false;

    // close menu
    KeyMenu13 = false;


    MSw1 = true;
    MSw2 = false;
    MSw3 = false;
    MSw4 = false;
    MSw5 = false;
    MSw6 = false;
    MSw7 = false;
    MSw8 = false;
    MSw9 = false;

    // big buttons
    MSw10 = false;
    MSw11 = false;
    MSw12 = false;

    // close menu
    MSw13 = false;

    removeEventListener("keydown", switchKeysM13, false);
    }
}








//////////////////////////////////////////////////////

function keyboardModeOff(e) {
  if (keys[13] && KeyMenu10 && MSw10) {

  
    keyboardMode = false;
    mouseMode = true;
    KeyboardGame = false;
    KeyboardMenu = false;
    locked();  


    //console.log("keyboardMode is " + keyboardMode +  " keyboardGame is " + KeyboardGame + " mouseMode is " +  mouseMode);

    removeEventListener("keydown", keyboardModeOff, false);
   }
}
//////////////////////////////////////////////////////////////










// End Mouse Menu and return to game //
function endMenu(e) {
    if (setMenu && !keyboardMode && !langaugeMenuSettings) {
        if (ctx.isPointInPath(cross.path, e.offsetX, e.offsetY)) {
    

            locked();
            sEff = true;
            //KeyboardGame=false;

            if (splashSpeech) {
                gameIns=true;
            }

            setMenu=false;

            canvas.removeEventListener("click", endMenu);
        }
    }
}
////////////////////End of Mouse Close//////////////////////






// Game Instructions open
function gameInsMouse(e) {
    if (setMenu && !keyboardMode && !langaugeMenuSettings) {
        if (ctx.isPointInPath(insMouse.path, e.offsetX, e.offsetY)) {
            gameIns=true;
            locked();
            canvas.removeEventListener("click", gameInsMouse);
        }
    }
}






////// music change ///////////////////
///////////////////////////////////////

function MustickT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus1.path, e.offsetX, e.offsetY)) {
            bkMus=true;
            //togKey=true;
            canvas.removeEventListener("click", MustickT);
        }
    } // setMenu
}

function MustickF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus2.path, e.offsetX, e.offsetY)) {
            bkMus=false;
            //togKey=false;
            canvas.removeEventListener("click", MustickF);
        }
    } // setMenu
}

/////End of Mouse music Change///////////////////
/////////////////////////////////////////////////

////// Background change ////////////////////
/////////////////////////////////////////////


function BacktickT(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxBack1.path, e.offsetX, e.offsetY)) {
           colod = true;
           white = false;
           canvas.removeEventListener("click", BacktickT);
        }
    } // setMenu
}

function BacktickF(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxBack2.path, e.offsetX, e.offsetY)) {
           colod = false;
           white = true;
           canvas.removeEventListener("click", BacktickF);
        }
    } // setMenu
}



/////End of Mouse background Change///////////////////
/////////////////////////////////////////////////

////// Speech change ////////////////////
/////////////////////////////////////////////

function SptickT(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxSp1.path, e.offsetX, e.offsetY)) {
           togSpeech=true;
           canvas.removeEventListener("click", SptickT);
       }
    }
}

function SptickF(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxSp2.path, e.offsetX, e.offsetY)) {
           togSpeech=false;
           canvas.removeEventListener("click", SptickF);
       }
    }
}

/////End of Mouse Speech Change///////////////////
/////////////////////////////////////////////////

////// Qustions change ///////////////////
// Start Q4 //
function MtogQ4(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxQ41.path, e.offsetX, e.offsetY)) {
           togQs1 = true;
           togQs2 = false;
           togQs3 = false;
           canvas.removeEventListener("click", MtogQ4);
       }
    }
}
// End Q4 //


// Start Q8 //
function MtogQ8(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxQ81.path, e.offsetX, e.offsetY)) {
           togQs2 = true;
           togQs1 = false;
           togQs3 = false;
           canvas.removeEventListener("click", MtogQ8);
       }
    } // setMenu
}
// End Q8 //

// Start Q12 //
function MtogQ12(e) {
    if (setMenu) {
       if (ctx.isPointInPath(BoxQ121.path, e.offsetX, e.offsetY)) {
           togQs3 = true;
           togQs1 = false;
           togQs2 = false;
           canvas.removeEventListener("click", MtogQ12);
        }
    } // setMenu
}
// End Q12 //


// Game Mode //
function gameMode1(e) {
    if (setMenu && !langaugeMenuSettings) {
       if (mouseMode && ctx.isPointInPath(gm1.path, e.offsetX, e.offsetY)) {

           mouseMode = false;
           keyboardMode = true;
           KeyboardMenu = true;

           locked();
           canvas.removeEventListener("click", gameMode1);
        }
    } 
}

///////////////////////////////////////////////////////////////////////









// Langauge Mode //
function langaugeMenu(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(le.path, e.offsetX, e.offsetY)) {
        
           langaugeMenuSettings = true;
           locked();
           canvas.removeEventListener("click", langaugeMenu);
        }
    } 
}



// End Sub-Menu Langauge Mode //
function endMenuLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(crossLang.path, e.offsetX, e.offsetY)) {
        
           langaugeMenuSettings = false;
           locked();
           canvas.removeEventListener("click", endMenuLang);
        }
    } 
}












// Keyboard and Switch Controls
// Return to Tab 1 Picture
function returnKey() {
         KeyGame1 = true;
         KeyGame2 = false;
         KeyGame3 = false;
         KeyGame4 = false;

         Sw1 = true;
         Sw2 = false;
         Sw3 = false;
         Sw4 = false;
}




function showMenu() {
  if (setMenu) {

    if (KeyboardGame) {
    gameIns = false;
    }

    sEff=false;
    splashAud.pause();
    splashAud.currentTime = 0;

    ctx.fillStyle = "black";

    if (!gameIns) {
    ctx.drawImage(mBack, 0, 0, canvas.width, canvas.height);
    }

    ctx.globalAlpha = 1.0; 
    ctx.textAlign = "center"; 
	ctx.font = "100 80px Impact, fantasy";
    ctx.fillText("Settings", w, 100);
    ctx.textAlign = "left";


    // Toggle Music

    if (KeyboardMenu) {
    if (KeyMenu1) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(62, 190, 250, 50);
    }
}
    
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    ctx.drawImage(mus, 62, 130, 250, 50);
 
    ctx.font = "700 30px Arial";

    ctx.drawImage(BoxMus1, 62, 190, 50, 50);
    BoxMus1.path = new Path2D();
    BoxMus1.path.rect(62, 190, 50, 50);

    if (KeyboardMenu) {
    if (KeyMenu2) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(62, 245, 250, 50);
    }
}

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    if (bkMus) {
        ctx.drawImage(rTick1, 67, 192, 50, 40);
    }

    ctx.fillText("On", 120, 230);

    ctx.drawImage(BoxMus2, 62, 245, 50, 50);
    BoxMus2.path = new Path2D();
    BoxMus2.path.rect(62, 245, 50, 50);

    if (!bkMus) {
        ctx.drawImage(rTick1, 67, 247, 50, 40);
    }

    ctx.fillText("Off", 120, 282);


    canvas.addEventListener("click", MustickT);
    canvas.addEventListener("click", MustickF);
    // End of Music
    


    // Toggle Background
  
    //if (BackCl) {
    ctx.drawImage(background, 410, 130, 250, 50);

    if (KeyboardMenu) {
    if (KeyMenu3) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(410, 190, 250, 50);
    }
}

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    ctx.drawImage(BoxBack1, 410, 190, 50, 50);
    BoxBack1.path = new Path2D();
    BoxBack1.path.rect(410, 190, 50, 50);

    if (KeyboardMenu) {
    if (KeyMenu4) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(410, 245, 250, 50);
    }
}

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    //if (back) {
    if (colod) {  
        ctx.drawImage(rTick1, 417, 192, 50, 40);
    }

    ctx.fillText("Colourful", 470, 230);

    ctx.drawImage(BoxBack2, 410, 245, 50, 50);
    BoxBack2.path = new Path2D();
    BoxBack2.path.rect(410, 245, 50, 50);

    

    if (white) {
        ctx.drawImage(rTick1, 417, 247, 50, 40);
    }

    ctx.fillText("White", 470, 282);

    canvas.addEventListener("click", BacktickT);
    canvas.addEventListener("click", BacktickF);


//} // backcl

    // End of Background


    // Toggle Speech
    ctx.drawImage(speechEff, 62, 310, 250, 50);

    if (KeyboardMenu) {
        if (KeyMenu5) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(62, 370, 250, 50);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;


    ctx.drawImage(BoxSp1, 62, 370, 50, 50);
    BoxSp1.path = new Path2D();
    BoxSp1.path.rect(62, 370, 50, 50);

    if (togSpeech) {
        ctx.drawImage(rTick1, 67, 372, 50, 40);
    }

    ctx.fillText("On", 120, 407);

    if (KeyboardMenu) {
        if (KeyMenu6) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(62, 425, 250, 50);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    ctx.drawImage(BoxSp2, 62, 425, 50, 50);
    BoxSp2.path = new Path2D();
    BoxSp2.path.rect(62, 425, 50, 50);

    if (!togSpeech) {
        ctx.drawImage(rTick1, 67, 427, 50, 40);
    }

    ctx.fillText("Off", 120, 462);

    canvas.addEventListener("click", SptickT);
    canvas.addEventListener("click", SptickF);

    // End of Speech


    // Toggle Number of Questions
    ctx.drawImage(noQs, 410, 310, 250, 50);

    // Q4
    ctx.drawImage(BoxQ41, 420, 370, 60, 60);

    if (KeyboardMenu) {
        if (KeyMenu7) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(420, 370, 60, 60);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    BoxQ41.path = new Path2D();
    BoxQ41.path.rect(420, 370, 60, 60);
    ctx.fillText("4", 440, 410);

    if (togQs1) {
        ctx.drawImage(rTick1, 427, 370, 50, 50);
    }

    canvas.addEventListener("click", MtogQ4);

    // Q8
    ctx.drawImage(BoxQ81, 502, 370, 60, 60);

    
    if (KeyboardMenu) {
        if (KeyMenu8) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(502, 370, 60, 60);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    BoxQ81.path = new Path2D();
    BoxQ81.path.rect(502, 370, 60, 60);
    ctx.fillText("8", 523, 410);

    if (togQs2) {
        ctx.drawImage(rTick1, 509, 370, 50, 50);
    }

    canvas.addEventListener("click", MtogQ8);

    // Q12
    ctx.drawImage(BoxQ121, 585, 370, 60, 60);

    
    if (KeyboardMenu) {
        if (KeyMenu9) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(585, 370, 60, 60);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    BoxQ121.path = new Path2D();
    BoxQ121.path.rect(585, 370, 60, 60);
    ctx.fillText("12", 597, 410);

    if (togQs3) {
        ctx.drawImage(rTick1, 591, 370, 50, 50);
    }

    canvas.addEventListener("click", MtogQ12);

    // if LangaugeMenuSettings = false
    if (!langaugeMenuSettings) {

      
  ///////////////////////////////////////////////
  if (playingGameMode) { // Comes on if the screen is on the Splash screen  
///////////////////////////////////////////
    // Game Mode Mouse
    if (mouseMode) {
    ctx.drawImage(gm1, 65, 485, 200, 100);
    gm1.path = new Path2D();
    gm1.path.rect(65, 485, 200, 100);

    canvas.addEventListener("click", gameMode1);
    }
    /////////////////////////////////////////////

    ///////////////////////////////////////////
    // Game Mode Keyboard
    if (keyboardMode) {

        ctx.drawImage(gk, 65, 485, 200, 100);

        if (KeyboardMenu) {
            if (KeyMenu10) {
                ctx.globalAlpha = 0.3;
                ctx.fillStyle = "Blue";
                ctx.fillRect(66, 485, 195, 100);
            }
        }
        
            ctx.fillStyle = "black";
            ctx.globalAlpha = 1.0;
            gk.path = new Path2D();
            gk.path.rect(65, 485, 200, 100);
    
        //canvas.addEventListener("keydown", gameMode2);
        }
        /////////////////////////////////////////////


///////////////////////////
} // playingGameMode = true
////////////////////////////////


    // Instructions
    ctx.textAlign = "center"; 
    ctx.drawImage(insMouse, 268, 485, 200, 100);
    insMouse.path = new Path2D();
    insMouse.path.rect(268, 485, 200, 100);

    canvas.addEventListener("click", gameInsMouse);

    

    ///////////////////////////////////////////






    // Language Mode
    ctx.drawImage(le, 470, 485, 200, 100);
    le.path = new Path2D();
    le.path.rect(470, 485, 200, 100);

    } // langaugeMenuSettings = false

    if (langaugeMenuSettings) {
        ctx.drawImage(lang, 40, 500, 645, 180);
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.font = "900 28px Comic Sans MS";
        ctx.fillText("English", 100, 550);
        ctx.drawImage(langE, 80, 560, 40, 40);
        //if (togQs2) {
            ctx.drawImage(rTick1, 80, 560, 40, 40);
        //}
        ctx.fillText("German", 220, 550);
        ctx.drawImage(langE, 200, 560, 40, 40);
        ctx.fillText("Romanian", 355, 550);
        ctx.drawImage(langE, 340, 560, 40, 40);
        ctx.fillText("Bulgarian", 500, 550);
        ctx.drawImage(langE, 480, 560, 40, 40);
        ctx.fillText("Greek", 630, 550);
        ctx.drawImage(langE, 610, 560, 40, 40);


        ctx.drawImage(crossLang, w-19, 616, 45, 45);
        crossLang.path = new Path2D();
        crossLang.path.rect(w-19, 616, 45, 45);

        canvas.addEventListener("click", endMenuLang);
    }

    canvas.addEventListener("click", langaugeMenu);



    /////////////////////////////////////////////






    // Close Menu
    ctx.textAlign = "center"; 


    if (!langaugeMenuSettings) {
    ctx.drawImage(cross, w-30, 645, 50, 50);

    if (KeyboardMenu) {
        if (KeyMenu13) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(w-30, 645, 50, 50);
        }
    }



    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    cross.path = new Path2D();
    cross.path.rect(w-30, 645, 50, 50);

    canvas.addEventListener("click", endMenu);

    if (KeyboardMenu && !mouseMode) {
    ctx.textAlign = "center"; 
	ctx.font = "900 18px Comic Sans MS";
    ctx.fillText("Use the SPACEBAR to select and then", w, 610);
    ctx.fillText("use the ENTER KEY to change settings", w, 633);

    
    } // end LangaugeMenuSettings = false





    // keyboard controls for Menu

    if (!langaugeMenuSettings) {
        if (MSw1) {
        addEventListener("keydown", switchKeysM1, false);
        }
    
        if (MSw2) {
        addEventListener("keydown", switchKeysM2, false);
        }
        
        if (MSw3) {
        addEventListener("keydown", switchKeysM3, false);
        }
        
        if (MSw4) {
        addEventListener("keydown", switchKeysM4, false);
        }

        if (MSw5) {
        addEventListener("keydown", switchKeysM5, false);
        }

        if (MSw6) {
        addEventListener("keydown", switchKeysM6, false);
        }

        if (MSw7) {
        addEventListener("keydown", switchKeysM7, false);
        }

        if (MSw8) {
        addEventListener("keydown", switchKeysM8, false);
        }
                
        if (MSw9) {
        addEventListener("keydown", switchKeysM9, false);
        }

        // Change from Keyboard Mode to Mouse Mode
        if (MSw10) {
        addEventListener("keydown", switchKeysM10, false);
        }

        // Game Instructions
        if (MSw11) {
        addEventListener("keydown", switchKeysM11, false);
        }

        // Langauge Menu
        if (MSw12) {
        addEventListener("keydown", switchKeysM12, false);
        }

        /////////////////////////////////////////////////////
        // close Settings Menu
        if (MSw13) {
        addEventListener("keydown", switchKeysM13, false);
        }
        /////////////////////////////////////////////////////


    


    if (setMenu) {
        if (keys[13] && KeyMenu1 && MSw1) {
            bkMus=true;
        }

        if (keys[13] && KeyMenu2 && MSw2) {
            bkMus=false;
        }

        if (keys[13] && KeyMenu3 && MSw3) {
            colod = true;
            white = false;
        }

        if (keys[13] && KeyMenu4 && MSw4) {
            colod = false;
            white = true;
        }

        if (keys[13] && KeyMenu5 && MSw5) {
            togSpeech=true;
        }

        if (keys[13] && KeyMenu6 && MSw6) {
            togSpeech=false;
        }

        if (keys[13] && KeyMenu7 && MSw7) {
            togQs1 = true;
            togQs2 = false;
            togQs3 = false;
        }

        if (keys[13] && KeyMenu8 && MSw8) {
            togQs2 = true;
            togQs1 = false;
            togQs3 = false;
        }

        if (keys[13] && KeyMenu9 && MSw9) {
            togQs3 = true;
            togQs1 = false;
            togQs2 = false;
        }







        // Game Mode

        if (keyboardMode) {
            addEventListener("keydown", keyboardModeOff);
            }

        












//////////////////////////////////////////////////////////
// Close Menu Key
        if (keys[13] && KeyMenu13 && MSw13) {

            setMenu=false;
            sEff=true;
            mouseMode=false;
            gameIns = true;
            MCsplashSc = true;
            KeyboardGame=true;
            locked();
            returnKey();

        }
////////////////////////////////////////////////////////////

    } // langaugeMenuSettings = false


    }//setMenu








    } // KeyboardMenu

} // setMenu

}


// End Splash Screen
function closeSplash(e) {
  if (!setMenu) {

    if (ctx.isPointInPath(clickHere.path, e.offsetX, e.offsetY)) { 
        
        KeyboardGame = false;
        
        locked();
        splashAud.pause();
        splashAud.currentTime = 0;

        MCsplashSc = false;

        splashSpeech = false;
        splashSettings = false;

        mouseMode = true;
        keyboardMode = false;

        MCgameSc1 = true;
        gameIns = true;

        canvas.removeEventListener("click", closeSplash);
    }
  }
}

// Speech code for Mouse
function speechMouse(e) {
    if (!setMenu) {
        if (splashSpeech && splashSettings && ctx.isPointInPath(soundBox.path, e.offsetX, e.offsetY)) {
  
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
}

// Settings Menu mouse controls

function settingMouse1(e) {
    if (!setMenu) {
        if (splashSpeech && splashSettings && ctx.isPointInPath(SettingsBox.path, e.offsetX, e.offsetY)) {

            playingGameMode = true;

            mouseMode = true;

            setMenu=true;

            //BackCl=true;
            canvas.removeEventListener("click", settingMouse1);
        }
    }
}














function gameStKey(e) {
if (keys[32]) { // Go to Instructions
    splashAud.pause();
    splashAud.currentTime = 0;
    MCsplashSc = false;

    //gameIns = false;
    gameIns = true;
    KeyboardGame = true;

    splashSpeech = false;
    splashSettings = false;

    MCgameSc1 = true;

    if (bkMus) {
    music.play();
    music.volume = 0.1;
    }

    incor = false;

    SetSplashKey = false;

    mouseMode = false;
    keyboardMode = true;

    removeEventListener("keydown", gameStKey, false);
}
}

function settingsKey(e) {
    if (keys[13] && SetSplashKey) { // settings
        KeyboardMenu = true;
        keyboardMode = true;
        setMenu=true;
        gameIns = false;
        removeEventListener("keydown", settingsKey, false);
    }
}

















function splash() {
  if (!setMenu) {


    ctx.drawImage(mcSplash, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 400, 715, 235);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "navy";

    if (mouseMode) {
    ctx.drawImage(clickHere, 162, 410, 394, 90);
    clickHere.path = new Path2D();
    clickHere.path.rect(162, 410, 394, 90);
    }

    if (keyboardMode) {
    ctx.fillText("Press the Spacebar", w, 535);
    ctx.fillText("or use your switch", w, 572);
    ctx.fillText("to play!", w, 610);
    ctx.fillStyle = "white";
    }

    if (!keyboardMode && !mouseMode) {
        ctx.drawImage(clickHere, 162, 410, 394, 90);
        clickHere.path = new Path2D();
        clickHere.path.rect(162, 410, 394, 90);
        ctx.fillText("or press the Spacebar", w, 535);
        ctx.fillText("or use your switch", w, 572);
        ctx.fillText("to play!", w, 610);
        ctx.fillStyle = "white";
    }


    // Speech code //


    ctx.drawImage(soundBox, 25, 409, 110, 180); 
    soundBox.path = new Path2D();
    soundBox.path.rect(25, 409, 110, 180);

    ctx.drawImage(speech, 55, 435, 55, 55);

    ctx.font = "900 12px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Speech", 77, 520);
    ctx.fillText("S Key", 77, 540);
    // End of Speech Code //

    // Settings code //
    ctx.drawImage(SettingsBox, 580, 409, 110, 180);
    SettingsBox.path = new Path2D();
    SettingsBox.path.rect(580, 409, 110, 180);

    ctx.drawImage(settings, 594, 420, 80, 80);

    ctx.font = "900 12px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Settings", 635, 510);
    ctx.fillText("ENTER Key", 635, 530);
    ctx.fillText("OR", 635, 545);
    ctx.fillText("Switch", 635, 560);
    // End of Settings Code


    if (keys[83]) { // audio
        splashAud.play();
    }

    










    








    addEventListener("keydown", gameStKey, false);
    addEventListener("keydown", settingsKey, false);
    
    

    canvas.addEventListener("click", closeSplash);
    canvas.addEventListener("click", speechMouse);
    canvas.addEventListener("click", settingMouse1);

  }

}



function closeSplash1(e) {
    if (setMenu && mouseMode && !keyboardMode) {
        if (ctx.isPointInPath(cross1.path, event.offsetX, event.offsetY)) {
           gameInsSpeech.pause();
           gameInsSpeech.currentTime = 0;
           locked();
           incor=false;
           setMenu=true;
           gameIns=false;
           canvas.removeEventListener("click", closeSplash1);
        }
    }
}


//// Mouse
function gameStart(e) {
    if (!setMenu && mouseMode && !keyboardMode) {
        if (!setMenu && !keyboardMode && ctx.isPointInPath(cross1.path, event.offsetX, event.offsetY)) {
            gameIns = false;
            gameInsSpeech.pause();
            gameInsSpeech.currentTime = 0;
            canvas.removeEventListener("click", gameStart);
        }
    }
}

//// Keyboard
function gameStartkey(e) {
    if (!setMenu && keyboardMode && !mouseMode) {
        if (keys[13]) {
            gameIns = false;
            gameInsSpeech.pause();
            gameInsSpeech.currentTime = 0;
            canvas.removeEventListener("keydown", gameStartkey, false);      
        }
    }
}


function gameInstructions() {

    console.log("gameIns is " + gameIns);

    if (togSpeech) {
        //gameInsSpeech.play();
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
        ctx.fillStyle = "Blue";
        ctx.font = "600 65px Comic Sans MS";
        ctx.fillText("Match the sound", w, 240);
        ctx.fillText("to the picture!", w, 300);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "Purple";

        if (KeyboardGame) {
            ctx.fillText("Press the SPACEBAR to tab", w, 380);
            ctx.fillText("between the pictures", w, 430);
            ctx.fillText("and press the ENTER KEY to select one", w, 480);
            ctx.fillStyle = "Green";
            ctx.font = "600 26px Comic Sans MS";
            ctx.fillText("OR use your Switch - you need two Switches", w, 540);
        }

        if (!KeyboardGame) { 
	    ctx.fillText("Using your Mouse to", w, 380);
        ctx.fillText("Left Click on the picture", w, 440);
        }

        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "Red";
        

        if (KeyboardGame) {
            ctx.textAlign = "center"; 
            ctx.fillText("Let's Go!", w, 620);
            ctx.fillText("Press the SPACEBAR to start!", w, 660);
        }

        if (!KeyboardGame) { 
        ctx.textAlign = "center"; 
        ctx.fillText("Let's Go!", w, 550);
        ctx.drawImage(cross1, w-30, 560, 50, 50);
        cross1.path = new Path2D();
        cross1.path.rect(w-30, 560, 50, 50);
        }

    
        

        incor=false;
        locked();

        if (setMenu && mouseMode && !keyboardMode) {
            canvas.addEventListener("click", closeSplash1);
        }

        if (!setMenu && mouseMode && !keyboardMode) {
            splashSpeech = false;
            splashSettings = false;
            canvas.addEventListener("click", gameStart);  
        }  
        
        if (!setMenu && keyboardMode && !mouseMode) {
            splashSpeech = false;
            splashSettings = false;
            addEventListener("keydown", gameStartkey);  
        }  

        firstQu=false;

    }




function firstQus() {

    //console.log("gameIns is " + gameIns);

    //console.log("setMenu is " + setMenu);

        //console.log("keyboardMode is " + keyboardMode);
        if (!mouseMode && KeyboardGame && KeyGame1) {
        //console.log("KeyGame1 is " + KeyGame1);
        ctx.strokeStyle = "red";
        } else {
        ctx.strokeStyle = "blue";
        }

    ctx.strokeRect(50, 150, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(55, 155, 42, 50);

    if (!mouseMode && KeyboardGame && KeyGame1) {
        ctx.fillStyle = "red";
        } else {
        ctx.fillStyle = "blue";
    }

    ctx.font = "50px Comic Sans MS";
    ctx.fillText("1", 75, 200);
}

function secQus() {
    if (!mouseMode && KeyboardGame && KeyGame2) {
        ctx.strokeStyle = "red";
        } else {
        ctx.strokeStyle = "blue";
    }
    ctx.strokeRect(370, 150, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(375, 155, 42, 50);

    if (!mouseMode && KeyboardGame && KeyGame2) {
        ctx.fillStyle = "red";
        } else {
        ctx.fillStyle = "blue";
    }

    ctx.font = "50px Comic Sans MS";
    ctx.fillText("2", 395, 200);
}

function thQus() {

    if (!mouseMode && KeyboardGame && KeyGame3) {
        ctx.strokeStyle = "red";
        } else {
        ctx.strokeStyle = "blue";
    }

    ctx.strokeRect(50, 380, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(55, 385, 42, 50);

    if (!mouseMode && KeyboardGame && KeyGame3) {
        ctx.fillStyle = "red";
        } else {
        ctx.fillStyle = "blue";
    }

    ctx.font = "50px Comic Sans MS";
    ctx.fillText("3", 75, 430);
}

function foQus() {

    if (!mouseMode && KeyboardGame && KeyGame4) {
        ctx.strokeStyle = "red";
        //console.log("KeyGame4 is " + KeyGame4);
        } else {
        ctx.strokeStyle = "blue";
    }

    ctx.strokeRect(370, 380, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillRect(375, 385, 42, 50);

    if (!mouseMode && KeyboardGame && KeyGame4) {
        ctx.fillStyle = "red";
        } else {
        ctx.fillStyle = "blue";
    }

    ctx.font = "50px Comic Sans MS";
    ctx.fillText("4", 395, 430);

    
}

function instructions() {

    //console.log("mouseMode is " + mouseMode);
    //console.log("keyboardMode is " + keyboardMode);

    if (KeyboardGame && !mouseMode) {
        ctx.font = "900 24px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Match the sound to the picture", w, 615);
    }
    if (!KeyboardGame) {
        ctx.font = "35px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("Match the sound to the picture", w, 625);
    }

    if (KeyboardGame) {
    ctx.fillStyle = "blue";
    ctx.font = "22px Comic Sans MS";
	ctx.fillText("using the SPACEBAR to tab between pictures", w, 645);
    ctx.fillStyle = "red";
    ctx.fillText("and then", w, 671);
    ctx.fillStyle = "blue";
    ctx.fillText("press the ENTER KEY to select one", w, 700);
    }

    if (!KeyboardGame) {
	ctx.fillText("Left Click on the picture", w, 680);
    }
}

// Setting Menu mouse controls
function settingMouse(e) {
  if (!keyboardMode) {
    if (ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        //BackCl=true;
        setMenu=true;
        canvas.removeEventListener("click", settingMouse);
    }
  }
}

function cardSetUp() {
    // settings
    ctx.drawImage(settings, 0, 0, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(0, 0, 80, 80);

    canvas.addEventListener("click", settingMouse);

    // Keyboard Settings
if (keyboardMode) {
    if (keys[83]) { // settings
        setMenu=true;
        KeyboardMenu=true;
    }
}

    ctx.font = "700 13px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Settings", 40, 90);

    if (mouseMode) {
        ctx.fillText("Left Click", 40, 106);
    }
    if (keyboardMode) {
        ctx.fillText("Press S", 40, 106);
    }

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
    //ctx.strokeStyle = "blue";
}


///////////////////////////////////
////part of right awnser text//////
function rightAnsText() {
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    ctx.fillText("for the next question!", w, 610);
}

////// Q1 Keyboard Controls ////////////////////////









//// Keyboard
function gameStartKeys(e) {
    gameIns = false;
    gameInsSpeech.pause();
    gameInsSpeech.currentTime = 0;
    window.removeEventListener("keyup", gameStartKeys);
}



////// Q1 Mouse Controls ////////////////////////



function Q1checkClick1(e) {
    if (!setMenu) {
	if (ctx.isPointInPath(amb.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = false;
        cor1 = true;
        canvas.removeEventListener("click", Q1checkClick1);
    }
    }
}


function Q1checkClick2(e) {
    if (!setMenu) {
    if (ctx.isPointInPath(lam.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick2);
    }
    }
}

function Q1checkClick3(e) {
    if (!setMenu) {
    if (ctx.isPointInPath(micro.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick3);
    }
    }
}

function Q1checkClick4(e) {
    if (!setMenu) {
    if (ctx.isPointInPath(cow.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick4);
    }
    }
}


function Q1selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Correct
        sir.pause();
        sir.currentTime = 0;
        incor = false;
        cor1 = true;
        removeEventListener("keydown", Q1selectKeys1);
    }
    }
}

function Q1selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Correct
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q1selectKeys2);
    }
    }
}

function Q1selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Correct
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q1selectKeys3);
    }
    }
}

function Q1selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Correct
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q1selectKeys4);
    }
    }
}

/////////// end of Q1 Mouse Controls ////////////////////////////////

/////////  Question 1 //////////////////

function quest1() {

    playingGameMode = false;

    if (firstQu) {
    gameIns=true;
    }

    //console.log("gameIns is " + gameIns);

    // Question 1
    // Only runs if instuctions and settings menu are off.
    if (!gameIns && sEff) {
        //console.log(sEff + "Running");
        sir.play();
    }
    
    if (!sEff) {
        //console.log(sEff + "Paused");
        sir.pause();
        sir.currentTime = 0;
    }

    if (!gameIns) {
    cardSetUp();
    }

    
    ctx.drawImage(amb, 50, 150, wdt, ht);
    if (!KeyboardGame) {
	amb.path = new Path2D();
    amb.path.rect(50, 150, wdt, ht);
    }
    firstQus();


  
    ctx.drawImage(lam, 370, 150, wdt, ht);
    if (!KeyboardGame) {
    lam.path = new Path2D();
    lam.path.rect(370, 150, wdt, ht);
    }
    secQus();

    ctx.drawImage(micro, 50, 380, wdt, ht);
    if (!KeyboardGame) {
    micro.path = new Path2D();
    micro.path.rect(50, 380, wdt, ht);
    }
    thQus();

    ctx.drawImage(cow, 370, 380, wdt, ht);
    if (!KeyboardGame) {
    cow.path = new Path2D();
    cow.path.rect(370, 380, wdt, ht);
    }
    foQus();

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame && !keyboardMode && mouseMode && !setMenu) {
    canvas.addEventListener("click", Q1checkClick1);
    canvas.addEventListener("click", Q1checkClick2);
    canvas.addEventListener("click", Q1checkClick3);
    canvas.addEventListener("click", Q1checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
    addEventListener("keydown", Q1selectKeys1);
    addEventListener("keydown", Q1selectKeys2);
    addEventListener("keydown", Q1selectKeys3);
    addEventListener("keydown", Q1selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
    keyboardAndswitch();
    } // keyboard game is true

    
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

 // Q2 keyboard controls for images

 function Q2selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Incorrect
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q2selectKeys1);
    }
    }
}

function Q2selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Incorrect
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q2selectKeys2);
    }
    }
}

function Q2selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Incorrect
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q2selectKeys3);
    }
    }
}

function Q2selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Correct
        cow1.pause();
        cow1.currentTime = 0;
        incor = false;
        cor2 = true;
        removeEventListener("keydown", Q2selectKeys4);
    }
    }
}
    
//////////////////////////////////////////



/////////  Question 2 //////////////////
function quest2() {

    console.log("incor is " + incor +  " cor2 is " + cor2);

    // Question 2    

    if (sEff) {
        cow1.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (mouseMode && !keyboardMode) {
    canvas.addEventListener("click", Q2checkClick1);
    canvas.addEventListener("click", Q2checkClick2);
    canvas.addEventListener("click", Q2checkClick3);
    canvas.addEventListener("click", Q2checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q2selectKeys1);
        addEventListener("keydown", Q2selectKeys2);
        addEventListener("keydown", Q2selectKeys3);
        addEventListener("keydown", Q2selectKeys4);
    }

        // Keyboard and Switch Controls
        if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
            keyboardAndswitch();
        } // keyboard game is true
    
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

// keyboard controls for images

function Q3selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Correct
        lamb.pause();
        lamb.currentTime = 0;
        incor = false;
        cor3 = true;
        removeEventListener("keydown", Q3selectKeys1);
    }
    }
}

function Q3selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Correct
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q3selectKeys2);
    }
    }
}

function Q3selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Correct
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q3selectKeys3);
    }
    }
}

function Q3selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Correct
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q3selectKeys4);
    }
    }
}


//////////////////////////////////////////

/////////  Question 3 //////////////////
function quest3() {

    // Question 3    

    if (sEff) {
        lamb.play();
    }

    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q3checkClick1, false);
    canvas.addEventListener("click", Q3checkClick2, false);
    canvas.addEventListener("click", Q3checkClick3, false);
    canvas.addEventListener("click", Q3checkClick4, false);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q3selectKeys1);
        addEventListener("keydown", Q3selectKeys2);
        addEventListener("keydown", Q3selectKeys3);
        addEventListener("keydown", Q3selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
    
    
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


// keyboard controls for images

function Q4selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Correct
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = false;
        cor4 = true;
        removeEventListener("keydown", Q4selectKeys1);
    }
    }
}

function Q4selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Correct
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q4selectKeys2);
    }
    }
}

function Q4selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Correct
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q4selectKeys3);
    }
    }
}

function Q4selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Correct
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q4selectKeys4);
    }
    }
}
     
 
//////////////////////////////////////////

/////////  Question 4 //////////////////
function quest4() {

    // Question 4    

    if (sEff) {
        oldPhone.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q4checkClick1);
    canvas.addEventListener("click", Q4checkClick2);
    canvas.addEventListener("click", Q4checkClick3);
    canvas.addEventListener("click", Q4checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q4selectKeys1);
        addEventListener("keydown", Q4selectKeys2);
        addEventListener("keydown", Q4selectKeys3);
        addEventListener("keydown", Q4selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
     } // keyboard game is true
    
    
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

// keyboard controls for images

function Q5selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q5selectKeys1);
    }
    }
}

function Q5selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Correct
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = false;
        cor5 = true;
        removeEventListener("keydown", Q5selectKeys2);
    }
    }
}

function Q5selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q5selectKeys3);
    }
    }
}

function Q5selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Incorrect
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q5selectKeys4);
    }
    }
}


//////////////////////////////////////////

/////////  Question 5 //////////////////
function quest5() {  
    
    if (sEff) {
        fireEng.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q5checkClick1);
    canvas.addEventListener("click", Q5checkClick2);
    canvas.addEventListener("click", Q5checkClick3);
    canvas.addEventListener("click", Q5checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q5selectKeys1);
        addEventListener("keydown", Q5selectKeys2);
        addEventListener("keydown", Q5selectKeys3);
        addEventListener("keydown", Q5selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
    
    
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

 // keyboard controls for images

 function Q6selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Correct
        microSound.pause();
        microSound.currentTime = 0;
        incor = false;
        cor6 = true;
        removeEventListener("keydown", Q6selectKeys1);
    }
    }
}

function Q6selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Incorrect
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q6selectKeys2);
    }
    }
}

function Q6selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Incorrect
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q6selectKeys3);
    }
    }
}        

function Q6selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Incorrect
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q6selectKeys4);
    }
    }
}        
 

//////////////////////////////////////////




/////////  Question 6 //////////////////

function quest6() {

    if (sEff) {
        microSound.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q6checkClick1);
    canvas.addEventListener("click", Q6checkClick2);
    canvas.addEventListener("click", Q6checkClick3);
    canvas.addEventListener("click", Q6checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q6selectKeys1);
        addEventListener("keydown", Q6selectKeys2);
        addEventListener("keydown", Q6selectKeys3);
        addEventListener("keydown", Q6selectKeys4);
    }

       // Keyboard and Switch Controls
        if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
            keyboardAndswitch();
        } // keyboard game is true
    
    
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

// keyboard controls for images

function Q7selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Correct
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = false;
        cor7 = true;
        removeEventListener("keydown", Q7selectKeys1);
    }
    }
}

function Q7selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q7selectKeys2);
    }
    }
}

function Q7selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q7selectKeys3);
    }
    }
}

function Q7selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Incorrect
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q7selectKeys4);
    }
    }
}


//////////////////////////////////////////

/////////  Question 7 //////////////////

function quest7() {

    if (sEff) {
        bellSound.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q7checkClick1);
    canvas.addEventListener("click", Q7checkClick2);
    canvas.addEventListener("click", Q7checkClick3);
    canvas.addEventListener("click", Q7checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q7selectKeys1);
        addEventListener("keydown", Q7selectKeys2);
        addEventListener("keydown", Q7selectKeys3);
        addEventListener("keydown", Q7selectKeys4);
    }

        // Keyboard and Switch Controls
        if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
            keyboardAndswitch();
        } // keyboard game is true
    
    
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

// keyboard controls for images

function Q8selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) { // Correct
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q8selectKeys1);
    }
    }
}

function Q8selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Correct
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q8selectKeys2);
    }
    }
}

function Q8selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) { // Correct
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = false;
        cor8 = true;
        removeEventListener("keydown", Q7selectKeys3);
    }
    }
}

function Q8selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) { // Correct
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q8selectKeys4);
    }
    }
}

//////////////////////////////////////////


/////////  Question 8 //////////////////

function quest8() {

    if (sEff) {
        roarEff.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q8checkClick1);
    canvas.addEventListener("click", Q8checkClick2);
    canvas.addEventListener("click", Q8checkClick3);
    canvas.addEventListener("click", Q8checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q8selectKeys1);
        addEventListener("keydown", Q8selectKeys2);
        addEventListener("keydown", Q8selectKeys3);
        addEventListener("keydown", Q8selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true

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

// keyboard controls for images

function Q9selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q8selectKeys1);
    }
    }
}

function Q9selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) { // Correct
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = false;
        cor9 = true;
        removeEventListener("keydown", Q9selectKeys2);
    }
    }
}

function Q9selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q9selectKeys3);
    }
    }
}

function Q9selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q9selectKeys4);
    }
    }
}

//////////////////////////////////////////



/////////  Question 9 //////////////////

function quest9() {

    if (sEff) {
        pigeonSdEff.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images


    if (!KeyboardGame) {
    canvas.addEventListener("click", Q9checkClick1);
    canvas.addEventListener("click", Q9checkClick2);
    canvas.addEventListener("click", Q9checkClick3);
    canvas.addEventListener("click", Q9checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q9selectKeys1);
        addEventListener("keydown", Q9selectKeys2);
        addEventListener("keydown", Q9selectKeys3);
        addEventListener("keydown", Q9selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
    
    
    
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

 // keyboard controls for images

 function Q10selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q10selectKeys1);
    }
    }
}

function Q10selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q10selectKeys2);
    }
    }
}

function Q10selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q10selectKeys3);
    }
    }
}

function Q10selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = false;
        cor10 = true;
        removeEventListener("keydown", Q10selectKeys4);
    }
    }
}
    
 

//////////////////////////////////////////



/////////  Question 10 //////////////////

function quest10() {

    if (sEff) {
        rugbyEff.play();
    }
    if (!sEff) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q10checkClick1);
    canvas.addEventListener("click", Q10checkClick2);
    canvas.addEventListener("click", Q10checkClick3);
    canvas.addEventListener("click", Q10checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q10selectKeys1);
        addEventListener("keydown", Q10selectKeys2);
        addEventListener("keydown", Q10selectKeys3);
        addEventListener("keydown", Q10selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
    
}
   

}
////////// End of Question 10 ////////////////////







////// Q11 Mouse Controls ////////////////////////

function Q11checkClick1(e) {
    if (rook.path && ctx.isPointInPath(rook.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q11checkClick1);
    }
}

function Q11checkClick2(e) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q11checkClick2);
    }
}

function Q11checkClick3(e) {
    if (collie.path && ctx.isPointInPath(collie.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = false;
        cor11 = true;       
        canvas.removeEventListener("click", Q11checkClick3);
    }
}

function Q11checkClick4(e) {   
    if (pCar.path && ctx.isPointInPath(pCar.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q11checkClick4);
    }
}

/////////// end of Q11 Mouse Controls ////////////////////////////////

// keyboard controls for images

function Q11selectKeys1(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame1 && Sw1 && !mouseMode) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q11selectKeys1);
    }
    }
}

function Q11selectKeys2(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame2 && Sw2 && !mouseMode) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q11selectKeys2);
    }
    }
}

function Q11selectKeys3(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame3 && Sw3 && !mouseMode) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = false;
        cor11 = true;    
        removeEventListener("keydown", Q11selectKeys3);
    }
    }
}

function Q11selectKeys4(e) {
    if (!setMenu) {
    if (keys[13] && KeyGame4 && Sw4 && !mouseMode) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        removeEventListener("keydown", Q11selectKeys4);
    }
    }
}
    

//////////////////////////////////////////


/////////  Question 11 //////////////////

function quest11() {

    if (sEff) {
        barkEff.play();
    }
    if (!sEff) {
        barkEff.pause();
        barkEff.currentTime = 0;
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

    ctx.drawImage(collie, 50, 380, 300, 200);
    collie.path = new Path2D();
    collie.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(pCar, 370, 380, 300, 200);
    pCar.path = new Path2D();
    pCar.path.rect(370, 380, 300, 200);
    foQus();

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys, false);
        addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images


    if (!KeyboardGame) {
    canvas.addEventListener("click", Q11checkClick1);
    canvas.addEventListener("click", Q11checkClick2);
    canvas.addEventListener("click", Q11checkClick3);
    canvas.addEventListener("click", Q11checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q11selectKeys1);
        addEventListener("keydown", Q11selectKeys2);
        addEventListener("keydown", Q11selectKeys3);
        addEventListener("keydown", Q11selectKeys4);
    }

    // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
}  
    
    
}
////////// End of Question 11 ////////////////////










////// Q12 Mouse Controls ////////////////////////

function Q12checkClick1(e) {
    if (rook.path && ctx.isPointInPath(rook.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q12checkClick1);
    }
}

function Q12checkClick2(e) {
    if (tennis.path && ctx.isPointInPath(tennis.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q12checkClick2);
    }
}

function Q12checkClick3(e) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q12checkClick3);
    }
}

function Q12checkClick4(e) {   
    if (tram.path && ctx.isPointInPath(tram.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = false;
        cor12 = true;
        //console.log(cor12);
        canvas.removeEventListener("click", Q12checkClick4);
    }
}

/////////// end of Q12 Mouse Controls ////////////////////////////////



/////////  Question 12 //////////////////

function quest12() {

    if (sEff) {
        tramEff.play();
    }
    if (!sEff) {
        tramEff.pause();
        tramEff.currentTime = 0;
    }

    cardSetUp();

    ctx.drawImage(rook, 50, 150, 300, 200);
    rook.path = new Path2D();
    rook.path.rect(50, 150, 300, 200);
    firstQus();
  
    ctx.drawImage(tennis, 370, 150, 300, 200);
    tennis.path = new Path2D();
    tennis.path.rect(370, 150, 300, 200);
    secQus();

    ctx.drawImage(cow, 50, 380, 300, 200);
    cow.path = new Path2D();
    cow.path.rect(50, 380, 300, 200);
    thQus();

    ctx.drawImage(tram, 370, 380, 300, 200);
    tram.path = new Path2D();
    tram.path.rect(370, 380, 300, 200);
    foQus();

    instructions();

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q12checkClick1);
    canvas.addEventListener("click", Q12checkClick2);
    canvas.addEventListener("click", Q12checkClick3);
    canvas.addEventListener("click", Q12checkClick4);
    }

        // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
    
    
        // keyboard controls for images
        
            if (keys[13] && KeyGame1 && Sw1) { // Correct
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = true;
            }
        
            if (keys[13] && KeyGame2 && Sw2) { // Correct
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = true;
            }
        
            if (keys[13] && KeyGame3 && Sw3) { // Correct
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = true;
            }
        
            if (keys[13] && KeyGame4 && Sw4) { // Correct
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = false;
                cor12 = true;
            }
        
        //////////////////////////////////////////

}
////////// End of Question 12 ////////////////////












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

        returnKey();

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

        returnKey();
        
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

        returnKey();
        
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
       
        if (!togQs1) {
            MCgameSc5 = true;
        }

        if (togQs1) {
            finalScreen = true;
        }

        removeEventListener("click", rightClick4);
    }
    // End mouse controls right Answer //

     /////////  Right Answer 4 //////////////////
     function rightAns4() {

        returnKey();
        
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
            if (!togQs1) {
                MCgameSc5 = true;
            }
    
            if (togQs1) {
                finalScreen = true;
            }
            cor4 = false;
            telVoice.pause();
            telVoice.currentTime = 0;
            MCgameSc4 = false;
            //MCgameSc5 = true;
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

        returnKey();

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

        returnKey();
        
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

        returnKey();

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

        if (!togQs2) {
            MCgameSc9 = true;
        }

        if (togQs2) {
            finalScreen = true;
        }     

        removeEventListener("click", rightClick8);

      }
  // End mouse controls right Answer //

     /////////  Right Answer 8 //////////////////
     function rightAns8() {

        returnKey();

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

            if (!togQs2) {
                MCgameSc9 = true;
            }
    
            if (togQs2) {
                finalScreen = true;
            }  

            cor8 = false;
            polyEff.pause();
            polyEff.currentTime = 0;
            MCgameSc8 = false;
            //MCgameSc9 = true;
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

    returnKey();

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
    MCgameSc11 = true;
    //finalScreen = true;
    removeEventListener("click", rightClick10);
  }
// End mouse controls right Answer //

 /////////  Right Answer 10 //////////////////
 function rightAns10() {

    returnKey();

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
    ctx.fillText("for the next question!", w, 610);

    if (keys[32]) { // Go to Final Screen
        cor10 = false;
        rugEff.pause();
        rugEff.currentTime = 0;
        MCgameSc10 = false;
        MCgameSc11 = true;
        //finalScreen = true;
    }

    addEventListener("click", rightClick10);
}


// mouse controls right Answer 11 //

function rightClick11() {
    cor11 = false;
    barkVce.pause();
    barkVce.currentTime = 0;
    incor = false;
    MCgameSc11 = false;
    MCgameSc12 = true;
    //finalScreen = true;
    removeEventListener("click", rightClick11);
  }
// End mouse controls right Answer //

 /////////  Right Answer 11 //////////////////
 function rightAns11() {

    returnKey();

    if (togSpeech) {
        barkVce.play();
    }

    if (!togSpeech) {
        barkVce.pause();
        barkVce.currentTime = 0;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(15, 40, 687, 650);
    ctx.strokeStyle = "green";
    ctx.strokeRect(15, 40, 687, 650);
    ctx.fillStyle = "green";
    ctx.textAlign = "center"; 
    ctx.font = "100px Comic Sans MS";
    ctx.fillText("Amazing!", w, 180);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("The sound was a Collie Dog!", w, 290);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    ctx.fillText("for the next question!", w, 610);

    if (keys[32]) { // Go to Final Screen
        cor11 = false;
        barkVce.pause();
        barkVce.currentTime = 0;
        MCgameSc11 = false;
        MCgameSc12 = true;
        //finalScreen = true;
    }

    addEventListener("click", rightClick11);
}
// End of 11 ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////








// 12 //
// mouse controls right Answer 12 //
function rightClick12() {
    cor12 = false;
    tramVce.pause();
    tramVce.currentTime = 0;
    incor = false;
    MCgameSc12 = false;
    finalScreen = true;

    if (!togQs3) {
        finalScreen = true;
    }

    if (togQs3) {
        finalScreen = true;
    }

    removeEventListener("click", rightClick12);
  }
// End mouse controls right Answer //

 /////////  Right Answer 12 //////////////////
 function rightAns12() {

    returnKey();

    if (togSpeech) {
        tramVce.play();
    }

    if (!togSpeech) {
        tramVce.pause();
        tramVce.currentTime = 0;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(15, 40, 687, 650);
    ctx.strokeStyle = "green";
    ctx.strokeRect(15, 40, 687, 650);
    ctx.fillStyle = "green";
    ctx.textAlign = "center"; 
    ctx.font = "90px Comic Sans MS";
    ctx.fillText("Excellent work!", w, 180);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("The sound was a Tram!", w, 290);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Left click on your mouse", w, 400);
    ctx.fillText("OR", w, 465);
    ctx.fillText("Press the Spacebar", w, 520);
    //ctx.fillText("for the next question!", w, 610);

    if (keys[32]) { // Go to Final Screen
        cor12 = false;
        tramVce.pause();
        tramVce.currentTime = 0;
        MCgameSc12 = false;
        finalScreen = true;
    }
    addEventListener("click", rightClick12);
}

// End of 12 //



////////////////////////////////////////////////////////////////////////////////////////////////


    // mouse controls Wrong Answer //
    function clickWrong() {
        if (!setMenu) {
        sEff = true;
        wrongVoice.pause();
        wrongVoice.currentTime = 0;
        locked();
        removeEventListener("click", clickWrong);
        }
    }

// keyboard controls Wrong Answer
function keyWrong() {
    if (keys[32]) { // Go to return to game
        wrongVoice.pause();
        wrongVoice.currentTime = 0;
        sEff = true;
        locked();
        returnKey();
        removeEventListener("keydown", keyWrong);
    }
}

    /////////  Wrong Awnser //////////////////
    function wrong() {


        sEff = false;

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

        if (mouseMode && !keyboardMode) {
        addEventListener("click", clickWrong);
        }


        if (keyboardMode && !mouseMode) {
        addEventListener("keydown", keyWrong);
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


        if (colod) {
            ctx.fillStyle = "#FFA500";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#45c345";
        }
        
        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#77a9de";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#8fb58f";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#bca3cf";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "pink";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "yellow";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#03fcf4";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#93a832";
        }

        if (white) {
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

        if (colod) {
            ctx.fillStyle = "#f7f792";
        }

        if (white) {
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
          n = 11;
        }
    }



    ///////////// Question 11 ////////////////////
    if (MCgameSc11) {

        if (colod) {
            ctx.fillStyle = "#42f5a4";
        }

        if (white) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor11) {
          quest11();
        }

        if (incor) {
            cor11 = false;
            wrong();
        }

        if (cor11) {
          rightAns11();
          n = 12;
        }
    }



    ///////////// Question 12 ////////////////////
    if (MCgameSc12) {

        if (colod) {
            ctx.fillStyle = "#edb4e5";
        }

        if (white) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cor12) {
          quest12();
        }

        if (incor) {
            cor12 = false;
            wrong();
        }

        if (cor12) {
          rightAns12();
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

        if (colod) {
            ctx.fillStyle = "#c5f542";
        }

        if (white) {
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
        ctx.fillStyle = "blue";
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

        KeyboardGame = false;
        n = 1;

        splashSpeech = true;
        splashSettings = true;
        playingGameMode = true;

        if (keys[13]) { // Go to Splash Screen
            wellDoneVoice.pause();
            wellDoneVoice.currentTime = 0;
            music.pause();
            music.currentTime = 0;
            finalScreen = false;
            SetSplashKey = true;
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
