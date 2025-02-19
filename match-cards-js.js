


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

var pausedForMenu = false;

var volDis = false;

// center text
var w = canvas.width / 2;
var dogImgWidth = 230;

var volGameOff = true;

//canvas.setAttribute('tabindex','1');
//canvas.focus();

var reStartAgain = false;

// Voiceovers ////////////
var part1 = true;
var part2 = false;
var part3 = false;
// End //////////////////

var startGame = true;

// 11/11/24
var rollBall = false;



var Run1 = true;
var Run2 = true;
var Run3 = true;
var Run4 = true;
var Run5 = true;
var Run6 = true;
var Run7 = true;
var Run8 = true;
var Run9 = true;
var Run10 = true;
var Run11 = true;
var Run12 = true;

var tapeOn = false;

var vol1 = false;
var vol2 = false;
var vol3 = true;
var vol4 = false;
var vol5 = false;

const reStartImg = new Image();
reStartImg.src = "images/reload.png"; // Cog Image - Restart Game

// vol gfx
// 1
const v1Gr = new Image();
v1Gr.src = "red_vol.png";
const v1Gb = new Image();
v1Gb.src = "black_vol.png";

// 2
const v2Gr = new Image();
v2Gr.src = "red_vol.png";
const v2Gb = new Image();
v2Gb.src = "black_vol.png";

// 3
const v3Gr = new Image();
v3Gr.src = "red_vol.png";
const v3Gb = new Image();
v3Gb.src = "black_vol.png";

// 4
const v4Gr = new Image();
v4Gr.src = "red_vol.png";
const v4Gb = new Image();
v4Gb.src = "black_vol.png";

// 5
const v5Gr = new Image();
v5Gr.src = "red_vol.png";
const v5Gb = new Image();
v5Gb.src = "black_vol.png";


const dog = new Image();
dog.src = "dog.jpg";


var SplashScreenOn = true;


var soundInstructions = false;


var langaugeMenuSettings = false;

var SetSplashKey = true;

var firstQu = true;

var playingGameMode = false;

var returnTo1 = false; // set returnKey() to false

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
var Bul = false;
var Grk = false;
var Tuk = false;
/////////////////////////////////


    function switchKeys1(e) {
        if ((keys[32]) && KeyGame1 && Sw1 && !mouseMode && keyboardMode) {
            KeyGame1 = false;
            KeyGame2 = true;
            KeyGame3 = false;
            KeyGame4 = false;
            Sw1 = false;
            Sw2 = true;
            removeEventListener("keydown", switchKeys1);
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
        removeEventListener("keydown", switchKeys2);
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
        removeEventListener("keydown", switchKeys3);
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
        removeEventListener("keydown", switchKeys4);
        }
    }
    
    function keyboardAndswitch() {
        if (Sw1 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys1);
        }
    
        if (Sw2 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys2);
        }
        
        if (Sw3 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys3);
        }
        
        if (Sw4 && !mouseMode && keyboardMode) {
        addEventListener("keydown", switchKeys4);
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


var setVoloff = false;
var blue_rib = true;
var reSet1 = false;
var splashLock = true;

var volLock = true;
var volOff = true;

var holdCountDown = false; // if vol controls are open
var holdCountDownD = false; // if vol controls are open - no digits



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

const wBg = new Image();
wBg.src = "images/white_bg.png";

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

// reSet icon on game screen
const reSet = new Image();
reSet.src = "images/reload.png";


// SettingsPic1
const settingsPic1 = new Image();
settingsPic1.src = "images/menuAssets/settingsPic1.png";

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
//const mus = new Image();
//mus.src = "images/menuAssets/music.png";

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

const langG = new Image();
langG.src = "images/menuAssets/langG.png";

const langR = new Image();
langR.src = "images/menuAssets/langR.png";

const langBul = new Image();
langBul.src = "images/menuAssets/langBul.png";

const langGrk = new Image();
langGrk.src = "images/menuAssets/langGrk.png";

const langTurk = new Image();
langTurk.src = "images/menuAssets/langTrk.png";


// Close Menu
const cross = new Image();
cross.src = "images/menuAssets/cross.png";

// Vol Close
const crossVol = new Image();
crossVol.src = "images/menuAssets/cross.png";

const cross1 = new Image();
cross1.src = "images/menuAssets/cross1.png";

// Langauge Sub-Menu
const crossLang = new Image();
crossLang.src = "images/menuAssets/langCross.png";

const insMouse = new Image();
insMouse.src = "images/menuAssets/gi.png";




const transMode = new Image();
transMode.src = "images/menuAssets/transMode.png";

const transModeKey = new Image();
transModeKey.src = "images/menuAssets/transModeKey.png";


const transIns = new Image();
transIns.src = "images/menuAssets/transIns.png";














const le = new Image();
le.src = "images/menuAssets/transLang.png";

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
micro.src = "images/microwave.png";

const cow = new Image();
cow.src = "images/cow.jpg";

const oldPhn = new Image();
oldPhn.src = "images/mobile.jpg";

const fireEn = new Image();
fireEn.src = "images/fire_eng.jpg";

const bell = new Image();
bell.src = "images/ring.png";

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

// Well Done
var  wdEn = new Audio("sounds/well_done/w-d-eng.mp3");
var  wdGer = new Audio("sounds/well_done/w-d-ger.mp3");
var  wdRom = new Audio("sounds/well_done/w-d-rom.mp3");
var  wdBul = new Audio("sounds/well_done/w-d-bul.mp3");
var  wdGrk = new Audio("sounds/well_done/w-d-Greek.mp3");
var  wdTuk = new Audio("sounds/well_done/w-d-Tuk.mp3");

// mouse
var  mseUK = new Audio("sounds/mouse/mseUK.mp3");
var  mseGER = new Audio("sounds/mouse/mseGER.mp3");
var  mseROM = new Audio("sounds/mouse/mseROM.mp3");
var  mseBUL = new Audio("sounds/mouse/mseBUL.mp3");
var  mseGRK = new Audio("sounds/mouse/mseGRK.mp3");
var  mseTUK = new Audio("sounds/mouse/mseTUK.mp3");

// keyboard
var  keyUK = new Audio("sounds/keyboard/keyUK.mp3");
var  keyGER = new Audio("sounds/keyboard/keyGER.mp3");
var  keyROM = new Audio("sounds/keyboard/keyROM.mp3");
var  keyBUL = new Audio("sounds/keyboard/keyBUL.mp3");
var  keyGRK = new Audio("sounds/keyboard/keyGRK.mp3");
var  keyTUK = new Audio("sounds/keyboard/keyTUK.mp3");


// Music
var music = new Audio("sounds/ragtime.mp3");

// Sound Effects
var sir = new Audio("sounds/siren1.mp3");
var cow1 = new Audio("sounds/cow.mp3");
var lamb = new Audio("sounds/lamb.mp3");
var oldPhone = new Audio("sounds/old-phone.mp3");
var fireEng = new Audio("sounds/fire-eng.mp3");
var microSound = new Audio("sounds/microwave.mp3");
var bellSound = new Audio("sounds/DoorbellSound.mp3");
var pigeonSdEff = new Audio("sounds/pigeon.mp3");
var roarEff = new Audio("sounds/Roar.mp3");
//var rookEff = new Audio("sounds/rook_song.mp3");
var rugbyEff  = new Audio("sounds/rugby.mp3");
var barkEff = new Audio("sounds/bark.mp3");
var tramEff  = new Audio("sounds/TramBell.mp3");


// English
var gameInsSpeech = new Audio("sounds/en/gameInsSpeech-uk.mp3"); // Game Instructions Mouse
var gameInsSpeechKey = new Audio("sounds/en/gameInsSpeechkey-uk.mp3"); // Game Instructions Keyboard

var wellDoneMse = new Audio("sounds/en/well-done-mse.mp3"); // Completion Mouse
var wellDoneKey = new Audio("sounds/en/well-done-key.mp3"); // Completion Keyboard

var wrongVoice = new Audio("sounds/en/wrong-v-mse.mp3"); // Incorrect Mouse
var wrongVoiceKey = new Audio("sounds/en/wrong-v-key.mp3"); // Incorrect Keyboard

var splashAud = new Audio("sounds/en/splash-screen1.mp3");  // Splash Screen

// English Correct Awnsers
var  VOuk1 = new Audio("sounds/en/VOuk1.mp3");
var  VOuk2 = new Audio("sounds/en/VOuk2.mp3");
var  VOuk3 = new Audio("sounds/en/VOuk3.mp3");
var  VOuk4 = new Audio("sounds/en/VOuk4.mp3");
var  VOuk5 = new Audio("sounds/en/VOuk5.mp3");
var  VOuk6 = new Audio("sounds/en/VOuk6.mp3");
var  VOuk7 = new Audio("sounds/en/VOuk7.mp3");
var  VOuk8 = new Audio("sounds/en/VOuk8.mp3");
var  VOuk9 = new Audio("sounds/en/VOuk9.mp3");
var  VOuk10 = new Audio("sounds/en/VOuk10.mp3");
var  VOuk11 = new Audio("sounds/en/VOuk11.mp3");
var  VOuk12 = new Audio("sounds/en/VOuk12.mp3");
// End of English
/////////////////////////////////////////////
/////////////////////////////////////////////

////////////////////////////////////////////
// German
var gerInstructions = new Audio("sounds/ger/instructions-ger.mp3");
var gerInstructionsKey = new Audio("sounds/ger/instructions-ger-key.mp3");

//var gerWellDone = new Audio("sounds/ger/gerWellDone.mp3"); // Completion Mouse
//var gerWellDoneKey = new Audio("sounds/ger/gerWellDoneKey.mp3"); // Completion Keyboard

var gerWrong = new Audio("sounds/ger/ger-wrong.mp3");
//var gerWrongKey = new Audio("sounds/ger/gerWrongKey.mp3"); // Incorrect Keyboard

// German Correct Awnsers
var  VOger1 = new Audio("sounds/ger/VOger1.mp3");
var  VOger2 = new Audio("sounds/ger/VOger2.mp3");
var  VOger3 = new Audio("sounds/ger/VOger3.mp3");
var  VOger4 = new Audio("sounds/ger/VOger4.mp3");
var  VOger5 = new Audio("sounds/ger/VOger5.mp3");
var  VOger6 = new Audio("sounds/ger/VOger6.mp3");
var  VOger7 = new Audio("sounds/ger/VOger7.mp3");
var  VOger8 = new Audio("sounds/ger/VOger8.mp3");
var  VOger9 = new Audio("sounds/ger/VOger9.mp3");
var  VOger10 = new Audio("sounds/ger/VOger10.mp3");
var  VOger11 = new Audio("sounds/ger/VOger11.mp3");
var  VOger12 = new Audio("sounds/ger/VOger12.mp3");
// End of German

// Romanian
var romInstructions = new Audio("sounds/rom/instructions-rom.mp3");
//var romInstructionsKey = new Audio("sounds/rom/instructions-rom.mp3");

//var romWellDone = new Audio("sounds/rom/rom/WellDone.mp3"); // Completion Mouse
//var romWellDoneKey = new Audio("sounds/rom/gerWellDoneKey.mp3"); // Completion Keyboard

var romWrong = new Audio("sounds/rom/rom-wrong.mp3");
//var romWrongKey = new Audio("sounds/rom/romWrongKey.mp3"); // Incorrect Keyboard

// Romanian Correct Awnsers
var  VOrom1 = new Audio("sounds/rom/VOrom1.mp3");
var  VOrom2 = new Audio("sounds/rom/VOrom2.mp3");
var  VOrom3 = new Audio("sounds/rom/VOrom3.mp3");
var  VOrom4 = new Audio("sounds/rom/VOrom4.mp3");
var  VOrom5 = new Audio("sounds/rom/VOrom5.mp3");
var  VOrom6 = new Audio("sounds/rom/VOrom6.mp3");
var  VOrom7 = new Audio("sounds/rom/VOrom7.mp3");
var  VOrom8 = new Audio("sounds/rom/VOrom8.mp3");
var  VOrom9 = new Audio("sounds/rom/VOrom9.mp3");
var  VOrom10 = new Audio("sounds/rom/VOrom10.mp3");
var  VOrom11 = new Audio("sounds/rom/VOrom11.mp3");
var  VOrom12 = new Audio("sounds/rom/VOrom12.mp3");
// End of Romainian

// Bulgerian
var bulInstructions = new Audio("sounds/bul/gameIns-bul-mse.mp3"); // Inst Mse
//var bulInstructionsKey = new Audio("sounds/bul/instructions-bul.mp3"); // Inst Key

//var bulWellDone = new Audio("sounds/bul/bulWellDone.mp3"); // Completion Mouse
//var bulWellDoneKey = new Audio("sounds/bul/bulWellDoneKey.mp3"); // Completion Keyboard

var bulWrong = new Audio("sounds/bul/wrongBulMouse.mp3"); // Wrong Mse
var bulWrongKey = new Audio("sounds/bul/wrongBulKey.mp3"); // Wrong Key

// Bulgerian Correct Awnsers
var  VObul1 = new Audio("sounds/bul/VObul1.mp3");
var  VObul2 = new Audio("sounds/bul/VObul2.mp3");
var  VObul3 = new Audio("sounds/bul/VObul3.mp3");
var  VObul4 = new Audio("sounds/bul/VObul4.mp3");
var  VObul5 = new Audio("sounds/bul/VObul5.mp3");
var  VObul6 = new Audio("sounds/bul/VObul6.mp3");
// End of Bulgerian

// Greek

// Turkish

///////////////////////////////////////////////////////////////////////////////////






function menuShow(e) {
    if (ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        pausedForMenu = true;
        setMenu = true;
        canvas.removeEventListener("click", menuShow);
    }
}



function endVolCont(e) {
    if (ctx.isPointInPath(!volLock && crossVol.path, e.offsetX, e.offsetY)) {

        volGameOff = true;
    holdCountDown = false;
    volLock = true;
    balloonLock = false;
    splashLock = true;
    blue_rib = true;
    canvas.removeEventListener("click", endVolCont);
    }	
}

// volume
// v1
function v1R(e) {  
    if (!volLock && ctx.isPointInPath(v1Gr.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v1R);
    }
}

function v1B(e) {
    if (!volLock && ctx.isPointInPath(v1Gb.path, e.offsetX, e.offsetY)) {
        vol1=true;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v1B);
    }
}

//v2
function v2R(e) {
    if (!volLock && ctx.isPointInPath(v2Gr.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v2R);
    }
}

function v2B(e) {
    if (!volLock && ctx.isPointInPath(v2Gb.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=true;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v2B);
    }
}

// v3
function v3R(e) {
    if (!volLock && ctx.isPointInPath(v3Gr.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v3R);
    }
}

function v3B(e) {
    if (!volLock && ctx.isPointInPath(v3Gb.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=true;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v3B);
    }
}

// v4
function v4R(e) {
    if (!volLock && ctx.isPointInPath(v4Gr.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v4R);
    }
}

function v4B(e) {
    if (!volLock && ctx.isPointInPath(v4Gb.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=true;
        vol5=false;
        canvas.removeEventListener("click", v4B);
    }
}

// v5
function v5R(e) {
    if (!volLock && ctx.isPointInPath(v5Gr.path, e.offsetX, e.offsetY)) {
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=false;
        canvas.removeEventListener("click", v5R);
    }
}

function v5B(e) {
    if (!volLock && ctx.isPointInPath(v5Gb.path, e.offsetX, e.offsetY)) {   
        vol1=false;
        vol2=false;
        vol3=false;
        vol4=false;
        vol5=true;
        canvas.removeEventListener("click", v5B);
    }
}


function wBgClick(e) {
    if (ctx.isPointInPath(wBg.path, e.offsetX, e.offsetY)) {
 
        blue_rib = false;
        volLock = false;
        splashLock = false;
        console.log("splashLock is " + splashLock);
        canvas.removeEventListener("click", wBgClick);
    }
}




function volumeSet() {

if (vol1) {
wdEn.volume = 0;
wdGer.volume = 0;
wdRom.volume = 0;
wdBul.volume = 0;
wdGrk.volume = 0;
wdTuk.volume = 0;

// mouse
mseUK.volume = 0;
mseGER.volume = 0;
mseROM.volume = 0;
mseBUL.volume = 0;
mseGRK.volume = 0;
mseTUK.volume = 0;

// keyboard
keyUK.volume = 0;
keyGER.volume = 0;
keyROM.volume = 0;
keyBUL.volume = 0;
keyGRK.volume = 0;
keyTUK.volume = 0;

// Music
music.volume = 0;

// Sound Effects
sir.volume = 0;
cow1.volume = 0;
lamb.volume = 0;
oldPhone.volume = 0;
fireEng.volume = 0;
microSound.volume = 0;
bellSound.volume = 0;
pigeonSdEff.volume = 0;
roarEff.volume = 0;
rugbyEff.volume = 0;
barkEff.volume = 0;
tramEff.volume = 0;

// English
gameInsSpeech.volume = 0;
gameInsSpeechKey.volume = 0;

wellDoneMse.volume = 0;
wellDoneKey.volume = 0;

wrongVoice.volume = 0;
wrongVoiceKey.volume = 0;

splashAud.volume = 0;

// English Correct Awnsers
VOuk1.volume = 0;
VOuk2.volume = 0;
VOuk3.volume = 0;
VOuk4.volume = 0;
VOuk5.volume = 0;
VOuk6.volume = 0;
VOuk7.volume = 0;
VOuk8.volume = 0;
VOuk9.volume = 0;
VOuk10.volume = 0;
VOuk11.volume = 0;
VOuk12.volume = 0;
// End of English
/////////////////////////////////////////////
/////////////////////////////////////////////

////////////////////////////////////////////
// German
gerInstructions.volume = 0;
gerInstructionsKey.volume = 0;

gerWrong.volume = 0;

// German Correct Awnsers
VOger1.volume = 0;
VOger2.volume = 0;
VOger3.volume = 0;
VOger4.volume = 0;
VOger5.volume = 0;
VOger6.volume = 0;
VOger7.volume = 0;
VOger8.volume = 0;
VOger9.volume = 0;
VOger10.volume = 0;
VOger11.volume = 0;
VOger12.volume = 0;
// End of German

// Romanian
romInstructions.volume = 0;

romWrong.volume = 0;

// Romanian Correct Awnsers
VOrom1.volume = 0;
VOrom2.volume = 0;
VOrom3.volume = 0;
VOrom4.volume = 0;
VOrom5.volume = 0;
VOrom6.volume = 0;
VOrom7.volume = 0;
VOrom8.volume = 0;
VOrom9.volume = 0;
VOrom10.volume = 0;
VOrom11.volume = 0;
VOrom12.volume = 0;
// End of Romainian

// Bulgerian
bulInstructions.volume = 0;
bulWrong.volume = 0;
bulWrongKey.volume = 0;

// Bulgerian Correct Awnsers
VObul1.volume = 0;
VObul2.volume = 0;
VObul3.volume = 0;
VObul4.volume = 0;
VObul5.volume = 0;
VObul6.volume = 0;
// End of Volume 1
}





if (vol2) {

    wdEn.volume = 0.2;
wdGer.volume = 0.2;
wdRom.volume = 0.2;
wdBul.volume = 0.2;
wdGrk.volume = 0.2;
wdTuk.volume = 0.2;

// mouse
mseUK.volume = 0.2;
mseGER.volume = 0.2;
mseROM.volume = 0.2;
mseBUL.volume = 0.2;
mseGRK.volume = 0.2;
mseTUK.volume = 0.2;

// keyboard
keyUK.volume = 0.2;
keyGER.volume = 0.2;
keyROM.volume = 0.2;
keyBUL.volume = 0.2;
keyGRK.volume = 0.2;
keyTUK.volume = 0.2;

// Music
music.volume = 0.05;

// Sound Effects
sir.volume = 0.2;
cow1.volume = 0.2;
lamb.volume = 0.2;
oldPhone.volume = 0.2;
fireEng.volume = 0.2;
microSound.volume = 0.2;
bellSound.volume = 0.2;
pigeonSdEff.volume = 0.2;
roarEff.volume = 0.2;
rugbyEff.volume = 0.2;
barkEff.volume = 0.2;
tramEff.volume = 0.2;

// English
gameInsSpeech.volume = 0.2;
gameInsSpeechKey.volume = 0.2;

wellDoneMse.volume = 0.2;
wellDoneKey.volume = 0.2;

wrongVoice.volume = 0.2;
wrongVoiceKey.volume = 0.2;

splashAud.volume = 0.2;

// English Correct Awnsers
VOuk1.volume = 0.2;
VOuk2.volume = 0.2;
VOuk3.volume = 0.2;
VOuk4.volume = 0.2;
VOuk5.volume = 0.2;
VOuk6.volume = 0.2;
VOuk7.volume = 0.2;
VOuk8.volume = 0.2;
VOuk9.volume = 0.2;
VOuk10.volume = 0.2;
VOuk11.volume = 0.2;
VOuk12.volume = 0.2;
// End of English
/////////////////////////////////////////////
/////////////////////////////////////////////

////////////////////////////////////////////
// German
gerInstructions.volume = 0.2;
gerInstructionsKey.volume = 0.2;

gerWrong.volume = 0.2;

// German Correct Awnsers
VOger1.volume = 0.2;
VOger2.volume = 0.2;
VOger3.volume = 0.2;
VOger4.volume = 0.2;
VOger5.volume = 0.2;
VOger6.volume = 0.2;
VOger7.volume = 0.2;
VOger8.volume = 0.2;
VOger9.volume = 0.2;
VOger10.volume = 0.2;
VOger11.volume = 0.2;
VOger12.volume = 0.2;
// End of German

// Romanian
romInstructions.volume = 0.2;

romWrong.volume = 0.2;

// Romanian Correct Awnsers
VOrom1.volume = 0.2;
VOrom2.volume = 0.2;
VOrom3.volume = 0.2;
VOrom4.volume = 0.2;
VOrom5.volume = 0.2;
VOrom6.volume = 0.2;
VOrom7.volume = 0.2;
VOrom8.volume = 0.2;
VOrom9.volume = 0.2;
VOrom10.volume = 0.2;
VOrom11.volume = 0.2;
VOrom12.volume = 0.2;
// End of Romainian

// Bulgerian
bulInstructions.volume = 0.2;
bulWrong.volume = 0.2;
bulWrongKey.volume = 0.2;

// Bulgerian Correct Awnsers
VObul1.volume = 0.2;
VObul2.volume = 0.2;
VObul3.volume = 0.2;
VObul4.volume = 0.2;
VObul5.volume = 0.2;
VObul6.volume = 0.2;
// End of Volume 2

}

if (vol3) {

    wdEn.volume = 0.5;
    wdGer.volume = 0.5;
    wdRom.volume = 0.5;
    wdBul.volume = 0.5;
    wdGrk.volume = 0.5;
    wdTuk.volume = 0.5;
    
    // mouse
    mseUK.volume = 0.5;
    mseGER.volume = 0.5;
    mseROM.volume = 0.5;
    mseBUL.volume = 0.5;
    mseGRK.volume = 0.5;
    mseTUK.volume = 0.5;
    
    // keyboard
    keyUK.volume = 0.5;
    keyGER.volume = 0.5;
    keyROM.volume = 0.5;
    keyBUL.volume = 0.5;
    keyGRK.volume = 0.5;
    keyTUK.volume = 0.5;
    
    // Music
    music.volume = 0.1;
    
    // Sound Effects
    sir.volume = 0.5;
    cow1.volume = 0.5;
    lamb.volume = 0.5;
    oldPhone.volume = 0.5;
    fireEng.volume = 0.5;
    microSound.volume = 0.5;
    bellSound.volume = 0.5;
    pigeonSdEff.volume = 0.5;
    roarEff.volume = 0.5;
    rugbyEff.volume = 0.5;
    barkEff.volume = 0.5;
    tramEff.volume = 0.5;
    
    // English
    gameInsSpeech.volume = 0.5;
    gameInsSpeechKey.volume = 0.5;
    
    wellDoneMse.volume = 0.5;
    wellDoneKey.volume = 0.5;
    
    wrongVoice.volume = 0.5;
    wrongVoiceKey.volume = 0.5;
    
    splashAud.volume = 0.5;
    
    // English Correct Awnsers
    VOuk1.volume = 0.5;
    VOuk2.volume = 0.5;
    VOuk3.volume = 0.5;
    VOuk4.volume = 0.5;
    VOuk5.volume = 0.5;
    VOuk6.volume = 0.5;
    VOuk7.volume = 0.5;
    VOuk8.volume = 0.5;
    VOuk9.volume = 0.5;
    VOuk10.volume = 0.5;
    VOuk11.volume = 0.5;
    VOuk12.volume = 0.5;
    // End of English
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    
    ////////////////////////////////////////////
    // German
    gerInstructions.volume = 0.5;
    gerInstructionsKey.volume = 0.5;
    
    gerWrong.volume = 0.5;
    
    // German Correct Awnsers
    VOger1.volume = 0.5;
    VOger2.volume = 0.5;
    VOger3.volume = 0.5;
    VOger4.volume = 0.5;
    VOger5.volume = 0.5;
    VOger6.volume = 0.5;
    VOger7.volume = 0.5;
    VOger8.volume = 0.5;
    VOger9.volume = 0.5;
    VOger10.volume = 0.5;
    VOger11.volume = 0.5;
    VOger12.volume = 0.5;
    // End of German
    
    // Romanian
    romInstructions.volume = 0.5;
    
    romWrong.volume = 0.5;
    
    // Romanian Correct Awnsers
    VOrom1.volume = 0.5;
    VOrom2.volume = 0.5;
    VOrom3.volume = 0.5;
    VOrom4.volume = 0.5;
    VOrom5.volume = 0.5;
    VOrom6.volume = 0.5;
    VOrom7.volume = 0.5;
    VOrom8.volume = 0.5;
    VOrom9.volume = 0.5;
    VOrom10.volume = 0.5;
    VOrom11.volume = 0.5;
    VOrom12.volume = 0.5;
    // End of Romainian
    
    // Bulgerian
    bulInstructions.volume = 0.5;
    bulWrong.volume = 0.5;
    bulWrongKey.volume = 0.5;
    
    // Bulgerian Correct Awnsers
    VObul1.volume = 0.5;
    VObul2.volume = 0.5;
    VObul3.volume = 0.5;
    VObul4.volume = 0.5;
    VObul5.volume = 0.5;
    VObul6.volume = 0.5;
    // End of Volume 3 

}









if (vol4) {

    wdEn.volume = 0.8;
    wdGer.volume = 0.8;
    wdRom.volume = 0.8;
    wdBul.volume = 0.8;
    wdGrk.volume = 0.8;
    wdTuk.volume = 0.8;
    
    // mouse
    mseUK.volume = 0.8;
    mseGER.volume = 0.8;
    mseROM.volume = 0.8;
    mseBUL.volume = 0.8;
    mseGRK.volume = 0.8;
    mseTUK.volume = 0.8;
    
    // keyboard
    keyUK.volume = 0.8;
    keyGER.volume = 0.8;
    keyROM.volume = 0.8;
    keyBUL.volume = 0.8;
    keyGRK.volume = 0.8;
    keyTUK.volume = 0.8;
    
    // Music
    music.volume = 0.2;
    
    // Sound Effects
    sir.volume = 0.8;
    cow1.volume = 0.8;
    lamb.volume = 0.8;
    oldPhone.volume = 0.8;
    fireEng.volume = 0.8;
    microSound.volume = 0.8;
    bellSound.volume = 0.8;
    pigeonSdEff.volume = 0.8;
    roarEff.volume = 0.8;
    rugbyEff.volume = 0.8;
    barkEff.volume = 0.8;
    tramEff.volume = 0.8;
    
    // English
    gameInsSpeech.volume = 0.8;
    gameInsSpeechKey.volume = 0.8;
    
    wellDoneMse.volume = 0.8;
    wellDoneKey.volume = 0.8;
    
    wrongVoice.volume = 0.8;
    wrongVoiceKey.volume = 0.8;
    
    splashAud.volume = 0.8;
    
    // English Correct Awnsers
    VOuk1.volume = 0.8;
    VOuk2.volume = 0.8;
    VOuk3.volume = 0.8;
    VOuk4.volume = 0.8;
    VOuk5.volume = 0.8;
    VOuk6.volume = 0.8;
    VOuk7.volume = 0.8;
    VOuk8.volume = 0.8;
    VOuk9.volume = 0.8;
    VOuk10.volume = 0.8;
    VOuk11.volume = 0.8;
    VOuk12.volume = 0.8;
    // End of English
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    
    ////////////////////////////////////////////
    // German
    gerInstructions.volume = 0.8;
    gerInstructionsKey.volume = 0.8;
    
    gerWrong.volume = 0.8;
    
    // German Correct Awnsers
    VOger1.volume = 0.8;
    VOger2.volume = 0.8;
    VOger3.volume = 0.8;
    VOger4.volume = 0.8;
    VOger5.volume = 0.8;
    VOger6.volume = 0.8;
    VOger7.volume = 0.8;
    VOger8.volume = 0.8;
    VOger9.volume = 0.8;
    VOger10.volume = 0.8;
    VOger11.volume = 0.8;
    VOger12.volume = 0.8;
    // End of German
    
    // Romanian
    romInstructions.volume = 0.8;
    
    romWrong.volume = 0.8;
    
    // Romanian Correct Awnsers
    VOrom1.volume = 0.8;
    VOrom2.volume = 0.8;
    VOrom3.volume = 0.8;
    VOrom4.volume = 0.8;
    VOrom5.volume = 0.8;
    VOrom6.volume = 0.8;
    VOrom7.volume = 0.8;
    VOrom8.volume = 0.8;
    VOrom9.volume = 0.8;
    VOrom10.volume = 0.8;
    VOrom11.volume = 0.8;
    VOrom12.volume = 0.8;
    // End of Romainian
    
    // Bulgerian
    bulInstructions.volume = 0.8;
    bulWrong.volume = 0.8;
    bulWrongKey.volume = 0.8;
    
    // Bulgerian Correct Awnsers
    VObul1.volume = 0.8;
    VObul2.volume = 0.8;
    VObul3.volume = 0.8;
    VObul4.volume = 0.8;
    VObul5.volume = 0.8;
    VObul6.volume = 0.8;
    // End of Volume 4
 
}








if (vol5) {

    wdEn.volume = 1;
wdGer.volume = 1;
wdRom.volume = 1;
wdBul.volume = 1;
wdGrk.volume = 1;
wdTuk.volume = 1;

// mouse
mseUK.volume = 1;
mseGER.volume = 1;
mseROM.volume = 1;
mseBUL.volume = 1;
mseGRK.volume = 1;
mseTUK.volume = 1;

// keyboard
keyUK.volume = 1;
keyGER.volume = 1;
keyROM.volume = 1;
keyBUL.volume = 1;
keyGRK.volume = 1;
keyTUK.volume = 1;

// Music
music.volume = 0.3;

// Sound Effects
sir.volume = 1;
cow1.volume = 1;
lamb.volume = 1;
oldPhone.volume = 1;
fireEng.volume = 1;
microSound.volume = 1;
bellSound.volume = 1;
pigeonSdEff.volume = 1;
roarEff.volume = 1;
rugbyEff.volume = 1;
barkEff.volume = 1;
tramEff.volume = 1;

// English
gameInsSpeech.volume = 1;
gameInsSpeechKey.volume = 1;

wellDoneMse.volume = 1;
wellDoneKey.volume = 1;

wrongVoice.volume = 1;
wrongVoiceKey.volume = 1;

splashAud.volume = 1;

// English Correct Awnsers
VOuk1.volume = 1;
VOuk2.volume = 1;
VOuk3.volume = 1;
VOuk4.volume = 1;
VOuk5.volume = 1;
VOuk6.volume = 1;
VOuk7.volume = 1;
VOuk8.volume = 1;
VOuk9.volume = 1;
VOuk10.volume = 1;
VOuk11.volume = 1;
VOuk12.volume = 1;
// End of English
/////////////////////////////////////////////
/////////////////////////////////////////////

////////////////////////////////////////////
// German
gerInstructions.volume = 1;
gerInstructionsKey.volume = 1;

gerWrong.volume = 1;

// German Correct Awnsers
VOger1.volume = 1;
VOger2.volume = 1;
VOger3.volume = 1;
VOger4.volume = 1;
VOger5.volume = 1;
VOger6.volume = 1;
VOger7.volume = 1;
VOger8.volume = 1;
VOger9.volume = 1;
VOger10.volume = 1;
VOger11.volume = 1;
VOger12.volume = 1;
// End of German

// Romanian
romInstructions.volume = 1;

romWrong.volume = 1;

// Romanian Correct Awnsers
VOrom1.volume = 1;
VOrom2.volume = 1;
VOrom3.volume = 1;
VOrom4.volume = 1;
VOrom5.volume = 1;
VOrom6.volume = 1;
VOrom7.volume = 1;
VOrom8.volume = 1;
VOrom9.volume = 1;
VOrom10.volume = 1;
VOrom11.volume = 1;
VOrom12.volume = 1;
// End of Romainian

// Bulgerian
bulInstructions.volume = 1;
bulWrong.volume = 1;
bulWrongKey.volume = 1;

// Bulgerian Correct Awnsers
VObul1.volume = 1;
VObul2.volume = 1;
VObul3.volume = 1;
VObul4.volume = 1;
VObul5.volume = 1;
VObul6.volume = 1;
// End of Volume 5
  
}

}

// vol controls 24.10.24 /////////////////////////////////////////////////////////

function volControls(e) {

    if (!rollBall) {

    if (!setVoloff) {

    if (blue_rib) {
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 800, 60);


    //Restart Game
 
     ctx.drawImage(reStartImg, 15, 2, 40, 40);
     reStartImg.path = new Path2D();
     reStartImg.path.rect(15, 2, 40, 40);
 
     ctx.font = "500 15px arial";
     ctx.fillStyle = "white";
     ctx.fillText("Restart", 35, 55);

     canvas.addEventListener("click", reStart);

    //settings
  
    ctx.drawImage(settings, 650, 0, 47, 47);
    settings.path = new Path2D();
    settings.path.rect(650, 0, 80, 80);

    notGame = true;

    ctx.textAlign = "center";
    ctx.font='500 15px Arial';
    ctx.fillStyle = "white";

    
    if (En) {
        ctx.fillText("Settings", 675, 55);
    }
    if (Ger) {
        ctx.fillText("Einstellungen", 640, 85);
    }
    if (Rom) {
        ctx.fillText("Setări", 640, 85);
    }
    if (Bul) {
        ctx.fillText("Настройки", 640, 85);
    }
    if (Grk) {
        ctx.fillText("Ρυθμίσεις", 640, 85);
    }
    if (Tuk) {
        ctx.fillText("Ayarlar", 640, 85);
    }

    canvas.addEventListener("click", menuShow);


    }// end of blue rib



    ctx.globalAlpha = 1.0;

    if (volLock && volOff) {
        ctx.drawImage(wBg, w-160, 0, 350, 60);
        wBg.path = new Path2D();
        wBg.path.rect(w-160, 0, 350, 60);
        ctx.fillStyle = "black";
        ctx.font='900 35px Comic Sans MS';
        ctx.fillText("Set Volume", w+10, 42);
        canvas.addEventListener("click", wBgClick);
        }

    }// rollBall

if (!volLock && volOff) {

    volGameOff = false;
    holdCountDown = true;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, 100);

            ctx.font = "700 35px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText("Min", w-110, 47);
            
            // v1
            if (vol1) {
                ctx.drawImage(v1Gr, w-60, 17, 10, 35);
                v1Gr.path = new Path2D();
                v1Gr.path.rect(w-60, 20, 10, 45);
            }
            if (!vol1) {
                ctx.drawImage(v1Gb, w-60, 17, 10, 35);
                v1Gb.path = new Path2D();
                v1Gb.path.rect(w-60, 20, 10, 45);
            }
                canvas.addEventListener("click", v1R);
                canvas.addEventListener("click", v1B);
            
            // v2
            if (vol2) {
                ctx.drawImage(v2Gr, w-30, 17, 10, 35);
                v2Gr.path = new Path2D();
                v2Gr.path.rect(w-30, 17, 10, 45);
            }
            if (!vol2) {
                ctx.drawImage(v2Gb, w-30, 17, 10, 35);
                v2Gb.path = new Path2D();
                v2Gb.path.rect(w-30, 17, 10, 45);
            }
                canvas.addEventListener("click", v2R);
                canvas.addEventListener("click", v2B);
            
            //v3
            if (vol3) {
                ctx.drawImage(v3Gr, w, 17, 10, 35);
                v3Gr.path = new Path2D();
                v3Gr.path.rect(w, 17, 10, 35);
            }
            if (!vol3) {
                ctx.drawImage(v3Gb, w, 17, 10, 35);
                v3Gb.path = new Path2D();
                v3Gb.path.rect(w, 17, 10, 35);
            }
                canvas.addEventListener("click", v3R);
                canvas.addEventListener("click", v3B);
            
            // v4
            if (vol4) {
                ctx.drawImage(v4Gr, w+30, 17, 10, 35);
                v4Gr.path = new Path2D();
                v4Gr.path.rect(w+30, 17, 10, 35);
            }
            if (!vol4) {
                ctx.drawImage(v4Gb, w+30, 17, 10, 35);
                v4Gb.path = new Path2D();
                v4Gb.path.rect(w+30, 17, 10, 35);
            }
                canvas.addEventListener("click", v4R);
                canvas.addEventListener("click", v4B);
            
            
            // v5
            if (vol5) {
                ctx.drawImage(v5Gr, w+60, 17, 10, 35);
                v5Gr.path = new Path2D();
                v5Gr.path.rect(w+60, 17, 10, 45);
            }
            if (!vol5) {
                ctx.drawImage(v5Gb, w+60, 17, 10, 35);
                v5Gb.path = new Path2D();
                v5Gb.path.rect(w+60, 17, 10, 45);
            }
                canvas.addEventListener("click", v5R);
                canvas.addEventListener("click", v5B);
            
            ctx.font = "700 35px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText("Max", w+125, 47);
            
            
            ctx.font = "700 15px Comic Sans MS";
            //ctx.fillText("Volume", w+5, 70);
            ctx.drawImage(crossVol, w-12, 60, 35, 35);
            crossVol.path = new Path2D();
            crossVol.path.rect(w-12, 60, 35, 35);
            
            }  // lockoff  

            if (!volLock) {
                canvas.addEventListener("click", endVolCont);
            }

        }//setVolOff
            

        }









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


function rightAnsClear() {

    // well done!
    wdEn.pause();
    wdEn.currentTime = 0;
    wdGer.pause();
    wdGer.currentTime = 0;
    wdRom.pause();
    wdRom.currentTime = 0;
    wdBul.pause();
    wdBul.currentTime = 0;

    // uk
    VOuk1.pause();
    VOuk1.currentTime = 0;
    VOuk2.pause();
    VOuk2.currentTime = 0;
    VOuk3.pause();
    VOuk3.currentTime = 0;
    VOuk4.pause();
    VOuk4.currentTime = 0;
    VOuk5.pause();
    VOuk5.currentTime = 0;
    VOuk6.pause();
    VOuk6.currentTime = 0;
    VOuk7.pause();
    VOuk7.currentTime = 0;
    VOuk8.pause();
    VOuk8.currentTime = 0;
    VOuk9.pause();
    VOuk9.currentTime = 0;
    VOuk10.pause();
    VOuk10.currentTime = 0;
    VOuk11.pause();
    VOuk11.currentTime = 0;
    VOuk12.pause();
    VOuk12.currentTime = 0;
    // end of UK voice overs //

    // ger
    VOger1.pause();
    VOger1.currentTime = 0;
    VOger2.pause();
    VOger2.currentTime = 0;
    VOger3.pause();
    VOger3.currentTime = 0;
    VOger4.pause();
    VOger4.currentTime = 0;
    VOger5.pause();
    VOger5.currentTime = 0;
    VOger6.pause();
    VOger6.currentTime = 0;
    VOger7.pause();
    VOger7.currentTime = 0;
    VOger8.pause();
    VOger8.currentTime = 0;
    VOger9.pause();
    VOger9.currentTime = 0;
    VOger10.pause();
    VOger10.currentTime = 0;
    VOger11.pause();
    VOger11.currentTime = 0;
    VOger12.pause();
    VOger12.currentTime = 0;
    // end of German voice overs //

    // rom
    VOrom1.pause();
    VOrom1.currentTime = 0;
    VOrom2.pause();
    VOrom2.currentTime = 0;
    VOrom3.pause();
    VOrom3.currentTime = 0;
    VOrom4.pause();
    VOrom4.currentTime = 0;
    VOrom5.pause();
    VOrom5.currentTime = 0;
    VOrom6.pause();
    VOrom6.currentTime = 0;
    VOrom7.pause();
    VOrom7.currentTime = 0;
    VOrom8.pause();
    VOrom8.currentTime = 0;
    VOrom9.pause();
    VOrom9.currentTime = 0;
    VOrom10.pause();
    VOrom10.currentTime = 0;
    VOrom11.pause();
    VOrom11.currentTime = 0;
    VOrom12.pause();
    VOrom12.currentTime = 0;
    // end of Romanian voice overs //

    // bul
    VObul1.pause();
    VObul1.currentTime = 0;
    VObul2.pause();
    VObul2.currentTime = 0;
    VObul3.pause();
    VObul3.currentTime = 0;
    VObul4.pause();
    VObul4.currentTime = 0;
    VObul5.pause();
    VObul5.currentTime = 0;
    VObul6.pause();
    VObul6.currentTime = 0;
    // end of Bulgarian voice overs //

    // click and keyboard next question //
    mseUK.pause();
    mseUK.currentTime = 0;
    keyUK.pause();
    keyUK.currentTime = 0;

    mseGER.pause();
    mseGER.currentTime = 0;
    keyGER.pause();
    keyGER.currentTime = 0;

    mseROM.pause();
    mseROM.currentTime = 0;
    keyROM.pause();
    keyROM.currentTime = 0;
    // end //


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
    KeyMenu11 = true;
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
    MSw11 = true;
    removeEventListener("keydown", switchKeysM10, false);
    }
}

function switchKeysM11(e) {
    if ((keys[32]) && KeyMenu11 && MSw11) {
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
    KeyMenu11 = false;
    KeyMenu12 = true;
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
    MSw11 = false;
    MSw12 = true;
    removeEventListener("keydown", switchKeysM11, false);
    }
}

function switchKeysM12(e) {
    if ((keys[32]) && KeyMenu12 && MSw12) {
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
    KeyMenu11 = false;
    KeyMenu12 = false;
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
    MSw11 = false;
    MSw12 = false;
    MSw13 = true;
    removeEventListener("keydown", switchKeysM12, false);
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

    removeEventListener("keydown", keyboardModeOff, false);
   }
}
//////////////////////////////////////////////////////////////


function Question() {
    
    ctx.font = "80px Comic Sans MS";
    ctx.fillStyle = "blue";

    if (En) {
        //ctx.fillText("Match Cards", w, 77);
    }
    if (Ger) {
        ctx.fillText("Spielkarten", w, 77);
    }
    if (Rom) {
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("Cărți de meci", w, 77);
    }
    if (Bul) {
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("Карти за мачове", w, 77);
    }
    if (Grk) {
        ctx.fillText("Κάρτες αγώνα", w, 77);
    }
    if (Tuk) {
        ctx.fillText("Maç Kartları", w, 77);
    }
    

    ctx.font = "900 55px Comic Sans MS";
    ctx.fillStyle = "blue";

    if (En) {
        ctx.fillText("Question " + n, w, 120);
    }
    if (Ger) {
        ctx.fillText("Frage " + n, w, 125);
    }
    if (Rom) {
        ctx.fillText("Întrebare " + n, w, 125);
    }
    if (Bul) {
        ctx.fillText("Въпрос " + n, w, 125);
    }
    if (Grk) {
        ctx.fillText("Ερώτηση " + n, w, 125);
    }
    if (Tuk) {
        ctx.fillText("Soru " + n, w, 125);
    }
}






// End Mouse Menu and return to game //
function endMenu(e) {
    if (setMenu && !keyboardMode && !langaugeMenuSettings) {
        if (ctx.isPointInPath(cross.path, e.offsetX, e.offsetY)) {

            volDis = false;
    
            pausedForMenu = false;

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

// Game Instructions keyboard open
/*function gameInsKeyboard(e) {
        if (keys[13] && KeyMenu11 && MSw11) {
            gameIns=true;
            locked();
            console.log("test");
            removeEventListener("keydown", gameInsKeyboard);
        }
}*/















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
       if (mouseMode && ctx.isPointInPath(transMode.path, e.offsetX, e.offsetY)) {

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




/////////////////////////////////////////////////////////////////////////////////////////////////
// Langauge Translator
function engLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(langE.path, e.offsetX, e.offsetY)) {
           En = true;
           Ger = false;
           Rom = false;
           Bul = false;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", engLang);
        }
    } 
}

function gerLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(langG.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = true;
           Rom = false;
           Bul = false;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", gerLang);
        }
    } 
}

function romLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(langR.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = true;
           Bul = false;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", romLang);
        }
    } 
}

function bulLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(langBul.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = false;
           Bul = true;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", bulLang);
        }
    } 
}

function grkLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(langGrk.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = false;
           Bul = false;
           Grk = true;
           Tuk = false;
           canvas.removeEventListener("click", grkLang);
        }
    } 
}

function trkLang(e) {
    if (setMenu) {
       if (mouseMode && ctx.isPointInPath(langTurk.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = false;
           Bul = false;
           Grk = false;
           Tuk = true;
           canvas.removeEventListener("click", trkLang);
        }
    } 
}



////////////////////////////////////////////////////////////////////////////////////////////////




















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








function keyboardClose(e) {
    if (keys[13] && KeyMenu13 && MSw13) {
        setMenu=false;
        sEff=true;
        mouseMode=false;

        //soundInstructions = true;
   
        if (splashSpeech) {
            gameIns=true;
        }
        MCsplashSc = true;
        KeyboardGame=true;
        locked();
        returnKey();
        removeEventListener("keydown", keyboardClose);
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

    volDis = true;

    if (KeyboardGame) {
    gameIns = false;
    }

    sEff=false;
    splashAud.pause();
    splashAud.currentTime = 0;

    ctx.fillStyle = "black";

    //if (!gameIns) {
    ctx.drawImage(mBack, 0, 0, canvas.width, canvas.height);
    //}

    ctx.globalAlpha = 1.0; 
    ctx.textAlign = "center"; 
	ctx.font = "100 80px Impact, fantasy";

    if (En) {
        ctx.fillText("Settings", w, 100);
    }
    if (Ger) {
        ctx.fillText("Einstellungen", w, 100);
    }
    if (Rom) {
        ctx.fillText("Setări", w, 100);
    }
    if (Bul) {
        ctx.fillText("Настройки", w, 100);
    }
    if (Grk) {
        ctx.fillText("Ρυθμίσεις", w, 100);
    }
    if (Tuk) {
        ctx.fillText("Ayarlar", w, 100);
    }

    ctx.textAlign = "left";


    // Toggle Music

    if (KeyboardMenu) {
    if (KeyMenu1) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(62, 190, 250, 50);
    }
}
    
    
    ctx.globalAlpha = 1.0;

    ctx.drawImage(settingsPic1, 62, 130, 250, 50);

    ctx.fillStyle = "white";
    ctx.font = "700 21px Arial"; 
    
    if (En) {
        ctx.fillText("Music", 149, 162);
    }

    if (Ger) {
        ctx.fillText("Musik", 149, 162);
    }

    if (Rom) {
        ctx.fillText("Muzică", 149, 162);
    }

    if (Bul) {
        ctx.fillText("Музика", 149, 162);
    }

    if (Grk) {
        ctx.fillText("ΜΟΥΣΙΚΗ", 149, 162);
    }

    if (Tuk) {
        ctx.fillText("Müzik", 149, 162);
    }
    
    ctx.fillStyle = "black";
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

    
    if (En) {
        ctx.fillText("On", 120, 230);
    }
    if (Ger) {
        ctx.fillText("An", 120, 230);
    }
    if (Rom) {
        ctx.fillText("Pe", 120, 230);
    }
    if (Bul) {
        ctx.fillText("Ha", 120, 230);
    }
    if (Grk) {
        ctx.fillText("Επί", 120, 230);
    }
    if (Tuk) {
        ctx.fillText("Açık", 120, 230);
    }

    ctx.drawImage(BoxMus2, 62, 245, 50, 50);
    BoxMus2.path = new Path2D();
    BoxMus2.path.rect(62, 245, 50, 50);

    if (!bkMus) {
        ctx.drawImage(rTick1, 67, 247, 50, 40);
    }

    

    if (En) {
        ctx.fillText("Off", 120, 282);
    }
    if (Ger) {
        ctx.fillText("Aus", 120, 282);
    }
    if (Rom) {
        ctx.fillText("Oprit", 120, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 120, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 120, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 120, 282);
    }


    canvas.addEventListener("click", MustickT);
    canvas.addEventListener("click", MustickF);
    // End of Music
    


    // Toggle Background
  


    ctx.drawImage(settingsPic1, 410, 130, 250, 50);

    ctx.fillStyle = "white";
    ctx.font = "700 21px Arial"; 
    
    if (En) {
        ctx.fillText("Background", 474, 162);
    }

    if (Ger) {
        ctx.fillText("Hintergrund", 475, 162);
    }

    if (Rom) {
        ctx.fillText("fundal", 500, 162);
    } 
    if (Bul) {
        ctx.fillText("Заден план", 475, 162);
    }
    
    if (Grk) {
        ctx.fillText("Ιστορικό", 500, 162);
    } 
    if (Tuk) {
        ctx.fillText("Arka fon", 475, 162);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 30px Arial";



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


    if (En) {
        ctx.fillText("Colourful", 470, 230);
    }
    if (Ger) {
        ctx.fillText("Bunt", 470, 230);
    }
    if (Rom) {
        ctx.fillText("Colorat", 470, 230);
    }
    if (Bul) {
        ctx.fillText("Цветен", 470, 230);
    }
    if (Grk) {
        ctx.fillText("Πολύχρωμα", 470, 230);
    }
    if (Tuk) {
        ctx.fillText("Renkli", 470, 230);
    }

    ctx.drawImage(BoxBack2, 410, 245, 50, 50);
    BoxBack2.path = new Path2D();
    BoxBack2.path.rect(410, 245, 50, 50);

    

    if (white) {
        ctx.drawImage(rTick1, 417, 247, 50, 40);
    }


    if (En) {
        ctx.fillText("White", 470, 282);
    }
    if (Ger) {
        ctx.fillText("Weiß", 470, 282);
    }
    if (Rom) {
        ctx.fillText("alb", 470, 282);
    }
    if (Bul) {
        ctx.fillText("Бяла", 470, 282);
    }
    if (Grk) {
        ctx.fillText("άσπρο", 470, 282);
    }
    if (Tuk) {
        ctx.fillText("Beyaz", 470, 282);
    }

    canvas.addEventListener("click", BacktickT);
    canvas.addEventListener("click", BacktickF);

    // End of Background


    // Toggle Speech

    ctx.drawImage(settingsPic1, 62, 310, 250, 50);

    ctx.fillStyle = "white";
    ctx.font = "700 21px Arial"; 
    
    if (En) {
        ctx.fillText("Speech", 150, 342);
    }

    if (Ger) {
        ctx.fillText("Rede", 154, 342);
    }

    if (Rom) {
        ctx.fillText("Vorbire", 150, 342);
    }

    if (Bul) {
        ctx.fillText("Реч", 167, 342);
    }

    if (Grk) {
        ctx.fillText("Ομιλία", 150, 342);
    }
    if (Tuk) {
        ctx.fillText("Konuşma", 137, 342);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 30px Arial";

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

    

    if (En) {
        ctx.fillText("On", 120, 407);
    }
    if (Ger) {
        ctx.fillText("An", 120, 407);
    }
    if (Rom) {
        ctx.fillText("Pe", 120, 407);
    }
    if (Bul) {
        ctx.fillText("Ha", 120, 407);
    }
    if (Grk) {
        ctx.fillText("Επί", 120, 407);
    }
    if (Tuk) {
        ctx.fillText("Açık", 120, 407);
    }

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


    if (En) {
        ctx.fillText("Off", 120, 462);
    }
    if (Ger) {
        ctx.fillText("Aus", 120, 462);
    }
    if (Rom) {
        ctx.fillText("Oprit", 120, 462);
    }
    if (Bul) {
        ctx.fillText("Изключено", 120, 462);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 120, 462);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 120, 462);
    }

    canvas.addEventListener("click", SptickT);
    canvas.addEventListener("click", SptickF);

    // End of Speech


    // Toggle Number of Questions
    //ctx.drawImage(noQs, 410, 310, 250, 50);
    ctx.drawImage(settingsPic1, 410, 310, 250, 50);

    ctx.fillStyle = "white";
    ctx.font = "700 21px Arial"; 
    
    if (En) {
        ctx.fillText("Number of Questions", 427, 342);
    }

    if (Ger) {
        ctx.fillText("Anzahl der Fragen", 442, 342);
    }

    if (Rom) {
        ctx.fillText("Numărul de întrebări", 430, 342);
    }

    if (Bul) {
        ctx.fillText("Брой въпроси", 462, 342);
    }

    if (Grk) {
        ctx.fillText("Αριθμός Ερωτήσεων", 430, 342);
    }

    if (Tuk) {
        ctx.fillText("soru sayısı", 472, 342);
    }
    
    ctx.fillStyle = "black";
    ctx.font = "700 30px Arial";

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


  //if (playingGameMode) { // Comes on if the screen is on the Splash screen 
  
  
///////////////////////////////////////////

    ctx.fillStyle = "white";
    ctx.font = "700 21px Arial"; 

    // Game Mode Mouse
    if (mouseMode) {
    ctx.drawImage(transMode, 65, 485, 200, 100);
    
    if (En) {
        ctx.fillText("Game Mode", 105, 530);
    }

    if (Ger) {
        ctx.fillText("Spielmodus", 105, 530);
    }

    if (Rom) {
        ctx.fillText("Mod de joc", 105, 530);
    }

    if (Bul) {
        ctx.fillText("Режим на игра", 88, 530);
    }

    if (Grk) {
        ctx.font = "700 14px Arial"; 
        ctx.fillText("Λειτουργία παιχνιδιού", 89, 530);
    }

    if (Tuk) {
        ctx.fillText("Oyun modu", 100, 530);
    }


    /////////////////////////////////////////


    if (En) {
        ctx.fillText("Mouse", 125, 553);
    }

    if (Ger) {
        ctx.fillText("Maus", 140, 553);
    }

    if (Rom) {
        ctx.fillText("Mouse", 125, 553);
    }

    if (Bul) {
        ctx.fillText("Мишка", 125, 553);
    }

    if (Grk) {
        ctx.fillText("Ποντίκι", 135, 553);
    }

    if (Tuk) {
        ctx.fillText("Fare", 135, 553);
    }

    transMode.path = new Path2D();
    transMode.path.rect(65, 485, 200, 100);

    canvas.addEventListener("click", gameMode1);
    }
    /////////////////////////////////////////////

    ///////////////////////////////////////////
    // Game Mode Keyboard
    if (keyboardMode) {

        ctx.drawImage(transModeKey, 65, 485, 200, 100);

        if (En) {
            ctx.fillText("Game Mode", 105, 530);
        }
    
        if (Ger) {
            ctx.fillText("Spielmodus", 105, 530);
        }
    
        if (Rom) {
            ctx.fillText("Mod de joc", 105, 530);
        }
    
        if (Bul) {
            ctx.fillText("Режим на игра", 88, 530);
        }

        if (Grk) {
            ctx.fillText("Λειτουργία παιχνιδιού", 105, 530);
        }
    
        if (Tuk) {
            ctx.fillText("Oyun modu", 105, 530);
        }
    
        /////////////////////////////////////////

        if (En) {
            ctx.fillText("Keyboard", 116, 553);
        }
    
        if (Ger) {
            ctx.fillText("eingeben", 140, 553);
        }
    
        if (Rom) {
            ctx.fillText("", 125, 553);
        }
    
        if (Bul) {
            ctx.fillText("", 125, 553);
        }

        if (KeyboardMenu) {
            if (KeyMenu10) {
                ctx.globalAlpha = 0.3;
                ctx.fillStyle = "Blue";
                ctx.fillRect(66, 485, 195, 100);
            }
        }
        
            ctx.fillStyle = "black";
            ctx.globalAlpha = 1.0;
            transModeKey.path = new Path2D();
            transModeKey.path.rect(65, 485, 200, 100);


        }
        /////////////////////////////////////////////


///////////////////////////


//} // playingGameMode = true


////////////////////////////////


    // Instructions
   
    ctx.textAlign = "center";
    /*ctx.drawImage(transIns, 268, 485, 200, 100);

    ctx.fillStyle = "white";
    ctx.font = "600 22px Arial"; 

    if (En) {
        ctx.fillText("Game", 368, 530);
        ctx.fillText("Instructions", 368, 555);
    }

    if (Ger) {
        ctx.font = "600 21px Arial"; 
        ctx.fillText("Spielanleitung", 368, 540);
    }

    if (Rom) {
        ctx.fillText("Instrucțiuni", 368, 530);
        ctx.fillText("de joc", 368, 555);
    }

    if (Bul) {
        ctx.fillText("Инструкции", 368, 530);
        ctx.fillText("за игра", 368, 555);
    }

    if (Grk) {
        ctx.fillText("Παιχνίδι", 368, 530);
        ctx.fillText("Οδηγίες", 368, 555);
    }

    if (Tuk) {
        ctx.fillText("oyun", 368, 530);
        ctx.fillText("Talimatlar", 368, 555);
    }

    if (KeyboardMenu) {
        if (KeyMenu11) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(269, 486, 195, 100);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;
    transIns.path = new Path2D();
    transIns.path.rect(268, 485, 200, 100);

    if (mouseMode) {
    canvas.addEventListener("click", gameInsMouse);
    }

    if (keyboardMode) {
    addEventListener("keydown", gameInsKeyboard);
    }*/

    
    

    ///////////////////////////////////////////

    ///////////////////////////////////////////










    // Language Mode
    ctx.drawImage(le, 470, 485, 200, 100);

    ctx.fillStyle = "white";
    ctx.font = "600 22px Arial"; 

    if (En) {
        ctx.fillText("Language", 567, 530);
        ctx.fillText("English", 567, 555);
    }

    if (Ger) {
        ctx.fillText("Sprache", 567, 530);
        ctx.fillText("Deutsch", 567, 555);
    }

    if (Rom) {
        ctx.fillText("Limba", 567, 530);
        ctx.fillText("rumänisch", 567, 555);
    }

    if (Bul) {
        ctx.fillText("език", 567, 530);
        ctx.fillText("български", 567, 555);
    }

    if (Grk) {
        ctx.fillText("Γλώσσα", 567, 530);
        ctx.fillText("Ελληνικά", 567, 555);
    }

    if (Tuk) {
        ctx.fillText("Dil", 567, 530);
        ctx.fillText("Türk", 567, 555);
    }

    if (KeyboardMenu) {
        if (KeyMenu12) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(472, 486, 193, 100);
        }
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    le.path = new Path2D();
    le.path.rect(470, 485, 200, 100);

    } // langaugeMenuSettings = false

    if (langaugeMenuSettings) {


        ctx.drawImage(lang, 80, 480, 560, 230);



        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.font = "900 24px Comic Sans MS";

        ctx.fillText("English", 200, 525);
        ctx.drawImage(langE, 180, 535, 40, 40);
        langE.path = new Path2D();
        langE.path.rect(180, 535, 40, 40);
        if (En) {
            ctx.drawImage(rTick1, 180, 535, 40, 40);
        }

        ctx.fillText("German", 344, 525);
        ctx.drawImage(langG, 330, 535, 40, 40);
        langG.path = new Path2D();
        langG.path.rect(330, 535, 40, 40);
        if (Ger) {
            ctx.drawImage(rTick1, 330, 535, 40, 40);
        }

        ctx.fillText("Romanian", 500, 525);
        ctx.drawImage(langR, 480, 535, 40, 40);
        langR.path = new Path2D();
        langR.path.rect(480, 535, 40, 40);
        if (Rom) {
            ctx.drawImage(rTick1, 480, 535, 40, 40);
        }

        ctx.fillText("Bulgarian", 200, 600);
        ctx.drawImage(langBul, 180, 607, 40, 40);
        langBul.path = new Path2D();
        langBul.path.rect(180, 607, 40, 40);
        if (Bul) {
            ctx.drawImage(rTick1, 180, 607, 40, 40);
        }

        ctx.fillText("Greek", 346, 600);
        ctx.drawImage(langGrk, 330, 607, 40, 40);
        langGrk.path = new Path2D();
        langGrk.path.rect(330, 607, 40, 40);
        if (Grk) {
            ctx.drawImage(rTick1, 330, 607, 40, 40);
        }

        ctx.fillText("Turkish", 500, 600);
        ctx.drawImage(langTurk, 480, 607, 40, 40);
        langTurk.path = new Path2D();
        langTurk.path.rect(480, 607, 40, 40);
        if (Tuk) {
            ctx.drawImage(rTick1, 480, 607, 40, 40);
        }



        canvas.addEventListener("click", engLang);
        canvas.addEventListener("click", gerLang);
        canvas.addEventListener("click", romLang);
        canvas.addEventListener("click", bulLang);
        canvas.addEventListener("click", grkLang);
        canvas.addEventListener("click", trkLang);






        ctx.drawImage(crossLang, w-27, 658, 40, 40);
        crossLang.path = new Path2D();
        crossLang.path.rect(w-27, 658, 40, 40);

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

    if (En) {
    ctx.fillText("Use the SPACEBAR to select and then", w, 610);
    ctx.fillText("use the ENTER KEY to change settings", w, 633);
    }
    
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

        // Game Instructions
        if (keys[13] && KeyMenu11 && MSw11) {  
            if (setMenu && !mouseMode && keyboardMode && !langaugeMenuSettings) { 
            gameIns=true;
            locked();
            }
        }

        // Translations
        if (keys[13] && KeyMenu12 && MSw12) {
            langaugeMenuSettings = true;
            locked();
        }


   



//////////////////////////////////////////////////////////
// Close Menu Key

addEventListener("keydown", keyboardClose);
       
////////////////////////////////////////////////////////////

    } // langaugeMenuSettings = false


    }//setMenu

    } // KeyboardMenu

} // setMenu

}


// End Splash Screen
function closeSplash(e) {

  if (!setMenu) {
    
    


    if (ctx.isPointInPath(SplashScreenOn && clickHere.path, e.offsetX, e.offsetY) && volLock) {
        
        

























        if (reStartAgain) {
            //console.log("Been here before too!");
            n = 1; // Question Count
            gameSc = true;

            MCgameSc1 = true;
            MCgameSc2 = false;
            MCgameSc3 = false;
            MCgameSc4 = false;
            MCgameSc5 = false;
            MCgameSc6 = false;
            MCgameSc7 = false;
            MCgameSc8 = false;
            MCgameSc9 = false;
            MCgameSc10 = false;
            MCgameSc11 = false;
            MCgameSc12 = false;
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
            cor11 = false;
            cor12 = false;
            gameIns = true;
            startGame = true;


        }

        soundInstructions = true;
      
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


function splashAudKey(e) {
if (keys[83]) { // audio
    splashAud.play();
    removeEventListener("keydown", splashAudKey);
}
}










function gameStKey(e) {
if (keys[32]) { // Go to Instructions

    soundInstructions=true;

    
    splashAud.pause();
    splashAud.currentTime = 0;
    MCsplashSc = false;


    gameIns = true;
    KeyboardGame = true;

    splashSpeech = false;
    splashSettings = false;

    MCgameSc1 = true;

    if (bkMus) {
    music.play();
    //music.volume = 0.1;
    }

    incor = false;

    SetSplashKey = false;

    mouseMode = false;
    keyboardMode = true;
    
    removeEventListener("keydown", gameStKey);
}
}


function settingsKey(e) {
    if (keys[13] && SetSplashKey) { // settings
        KeyboardMenu = true;
        keyboardMode = true;
        setMenu=true;
        gameIns = false;
        removeEventListener("keydown", settingsKey);
    }
}




function translate1() {
    ctx.fillStyle = "white";
    ctx.fillRect(15, 65, 687, 600);
    ctx.strokeStyle = "green";
    ctx.strokeRect(15, 65, 687, 600);
    ctx.fillStyle = "green";
    ctx.textAlign = "center"; 
    ctx.font = "100px Comic Sans MS";

    if (En) {
        ctx.fillText("Well Done!", w, 180);
    }
    if (Ger) {
        ctx.fillText("Gut erledigt!", w, 180);
    }
    if (Rom) {
        ctx.fillText("Foarte bine!", w, 180);
    }
    if (Bul) {
        ctx.fillText("Много добре!", w, 180);
    }
    if (Grk) {
        ctx.fillText("Μπράβο!", w, 180);
    }
    if (Tuk) {
        ctx.fillText("Aferin!", w, 180);
    }

}

function wellDone() {

    if (part1 && togSpeech) {

    if (En) {
        wdEn.play();
        part1 = false;
        part2 = true;
    }
    if (Ger) {
        wdGer.play();
        part1 = false;
        part2 = true;
    }
    if (Rom) {
        wdRom.play();
        part1 = false;
        part2 = true;
    }
    if (Bul) {
        wdBul.play();
        part1 = false;
        part2 = true;
    }
    if (Grk) {
        wdGrk.play();
        part1 = false;
        part2 = true;
    }
    if (Tuk) {
        wdTuk.play();
        part1 = false;
        part2 = true;
    }

}

}








function splash() {

    

    /*if (reStartAgain) {
        console.log("Been here before!");
    }*/


    //console.log("finalScreen is " + finalScreen);



  if (!setMenu) {

    
    ctx.drawImage(mcSplash, 0, 55, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 400, 715, 235);

    ctx.globalAlpha = 1.0;
    
    
    ctx.textAlign = "center"; 
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "navy";

    if (mouseMode) {

    if (SplashScreenOn) {  

    ctx.drawImage(clickHere, 162, 410, 394, 90);

    ctx.font = "700 45px Comic Sans MS";
    ctx.textAlign = "center"; 
    ctx.fillStyle = "navy";

    

    

    if (En) {
        ctx.fillText("Click Here!", w, 473);
    }
    if (Ger) {
        ctx.fillText("Klicken Sie hier!", w, 473);
    }
    if (Rom) {
        ctx.fillText("Click aici!", w, 473);
    }
    if (Bul) {
        ctx.fillText("Натисни тук!", w, 473);
    }
    if (Grk) {
        ctx.fillText("Κάντε κλικ ΕΔΩ!", w, 473);
    }
    if (Tuk) {
        ctx.fillText("Buraya tıklayın!", w, 473);
    }

    


    clickHere.path = new Path2D();
    clickHere.path.rect(162, 410, 394, 90);

}
    }


    if (keyboardMode) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("Press the Spacebar", w, 535);
    ctx.fillText("or use your switch", w, 572);
    ctx.fillText("to play!", w, 610);
    ctx.fillStyle = "white";
    }

    if (!keyboardMode && !mouseMode) {

        if (SplashScreenOn) {

        ctx.drawImage(clickHere, 162, 410, 394, 90);
        clickHere.path = new Path2D();
        clickHere.path.rect(162, 410, 394, 90);

        }

        ctx.font = "700 45px Comic Sans MS";
        ctx.textAlign = "center"; 
        ctx.fillStyle = "navy";

    if (En) {
        ctx.fillText("Click Here!", w, 473);
    }
    if (Ger) {
        ctx.fillText("Klicken Sie hier!", w, 473);
    }
    if (Rom) {
        ctx.fillText("Click aici!", w, 473);
    }
    if (Bul) {
        ctx.fillText("Натисни тук!", w, 473);
    }
    if (Grk) {
        ctx.fillText("Κάντε κλικ ΕΔΩ!", w, 473);
    }
    if (Tuk) {
        ctx.fillText("Buraya tıklayın!", w, 473);
    }
    
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("or press the Spacebar", w, 535);
        ctx.fillText("or use your switch", w, 572);
        ctx.fillText("to play!", w, 610);
        ctx.fillStyle = "white";
    }


    // Speech code //


    //ctx.drawImage(soundBox, 25, 409, 110, 180); 
    //soundBox.path = new Path2D();
    //soundBox.path.rect(25, 409, 110, 180);

    //ctx.drawImage(speech, 55, 435, 55, 55);

    //ctx.font = "900 12px arial";
    //ctx.fillStyle = "black";
    //ctx.fillText("Left Click", 77, 520);
    //ctx.fillText("for", 77, 540);
    //ctx.fillText("Speech", 77, 560);
    //ctx.fillText("S Key", 77, 540);
    // End of Speech Code //

    // Settings code //
    //ctx.drawImage(SettingsBox, 580, 409, 110, 180);
    //SettingsBox.path = new Path2D();
    //SettingsBox.path.rect(580, 409, 110, 180);

    //ctx.drawImage(settings, 594, 420, 80, 80);

    //ctx.font = "900 12px arial";
    //ctx.fillStyle = "black";
    //ctx.fillText("Left Click", 635, 510);
    //ctx.fillText("For", 635, 530);
    //ctx.fillText("Settings", 635, 550);
    //ctx.fillText("ENTER Key", 635, 530);
    //ctx.fillText("OR", 635, 545);
    //ctx.fillText("Switch", 635, 560);
    // End of Settings Code






if (SplashScreenOn) {
    if (volLock) {
    addEventListener("keydown", gameStKey);
    //addEventListener("keydown", settingsKey);
    //addEventListener("keydown", splashAudKey);

    canvas.addEventListener("click", closeSplash);
    //canvas.addEventListener("click", speechMouse);
    //canvas.addEventListener("click", settingMouse1);
    }
}

}

}



function closeSplash1(e) {
    
    if (setMenu && mouseMode && !keyboardMode) {
    
        if (ctx.isPointInPath(cross1.path, event.offsetX, event.offsetY)) {
           
           // English
           gameInsSpeech.pause();
           gameInsSpeech.currentTime = 0;

           // German
           gerInstructions.pause();
           gerInstructions.currentTime = 0;

           // Romanian
           romInstructions.pause();
           romInstructions.currentTime = 0;

           locked();
           incor=false;
           setMenu=true;
           gameIns=false;
           canvas.removeEventListener("click", closeSplash1);
        }
    }
}

function closeSplash1key(e) {
    if (setMenu && !mouseMode && keyboardMode) {
           
           // English
           gameInsSpeech.pause();
           gameInsSpeech.currentTime = 0;

           
           //gameInsSpeechKey.pause();
           //gameInsSpeechKey.currentTime = 0;

           // German
           gerInstructions.pause();
           gerInstructions.currentTime = 0;

           // Romanian
           romInstructions.pause();
           romInstructions.currentTime = 0;

           locked();
           incor=false;
           setMenu=true;
           gameIns=false;

           removeEventListener("keydown", closeSplash1key);
           }   
}


//// Mouse
function gameStart(e) {
    if (!setMenu && mouseMode && !keyboardMode) {
        if (!setMenu && !keyboardMode && ctx.isPointInPath(cross1.path, event.offsetX, event.offsetY)) {
            gameIns = false;

            // English
            gameInsSpeech.pause();
            gameInsSpeech.currentTime = 0;

            // German
            gerInstructions.pause();
            gerInstructions.currentTime = 0;

            // Romanian
            romInstructions.pause();
            romInstructions.currentTime = 0;

            // Bulgarian
            bulInstructions.pause();
            bulInstructions.currentTime = 0;  
            //bulInstructionsKey.pause();
           //bulInstructionsKey.currentTime = 0;

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


            gameInsSpeechKey.pause();
            gameInsSpeechKey.currentTime = 0;
            
            removeEventListener("keydown", gameStartkey);
        }
    }
 }












function reStart(e) {
    if (ctx.isPointInPath(reStartImg.path, e.offsetX, e.offsetY)) {

        startGame = false;
        MCsplashSc = true;
        mouseMode = false;
        keyboardMode = false;
        SplashScreenOn = true;

        sir.pause();
        sir.currentTime = 0;
cow1.pause();
cow1.currentTime = 0;
lamb.pause();
lamb.currentTime = 0;
oldPhone.pause();
oldPhone.currentTime = 0;
fireEng.pause();
fireEng.currentTime = 0;
microSound.pause();
microSound.currentTime = 0;
bellSound.pause();
bellSound.currentTime = 0;
pigeonSdEff.pause();
pigeonSdEff.currentTime = 0;
roarEff.pause();
roarEff.currentTime = 0;
rugbyEff.pause();
rugbyEff.currentTime = 0;
barkEff.pause();
barkEff.currentTime = 0;
tramEff.pause();
tramEff.currentTime = 0;

reStartAgain = true;

    canvas.removeEventListener("click", reStart);
    }
}


















function gameInstructions() {

    

    //soundInstructions = true;




    //console.log("soundInstructions is " + soundInstructions);

    if (mouseMode && togSpeech) {

        if (soundInstructions) {

        if (En) {
            gameInsSpeech.play();
        }
        if (Ger) {
            gerInstructions.play();
        }
        if (Rom) {
            romInstructions.play();
        }
        if (Bul) {
            bulInstructions.play();
        }
        if (Grk) {
            //grkInstructions.play();
        }
        if (Tuk) {
            //tukInstructions.play();
        }

        } // soundInstructions = true

    }

        if (keyboardMode && togSpeech) {

            if (soundInstructions) {
    
            if (En) {
                gameInsSpeechKey.play();
            }
            if (Ger) {
                gerInstructionsKey.play();
            }
            if (Rom) {
                //romInstructionsKey.play();
            }
            if (Bul) {
                //bulInstructionsKey.play();
            }
            if (Grk) {
                //grkInstructionsKey.play();
            }
            if (Tuk) {
                //tukInstructionsKey.play();
            }
    
            } // soundInstructions = true
        }

    if (!togSpeech) {

        gameInsSpeech.pause();
        gameInsSpeech.currentTime = 0;
        gameInsSpeechKey.pause();
        gameInsSpeechKey.currentTime = 0;

        gerInstructions.pause();
        gerInstructions.currentTime = 0;

        romInstructions.pause();
        romInstructions.currentTime = 0;

        bulInstructions.pause();
        bulInstructions.currentTime = 0;

        //bulInstructionsKey.pause();
        //bulInstructionsKey.currentTime = 0;

    }
        
        ctx.fillStyle = "white";
        //ctx.globalAlpha = 0.85;
        ctx.fillRect(20, 70, 675, 600);
        ctx.globalAlpha = 1.0;
        ctx.textAlign = "center";
        ctx.fillStyle = "Red";
        ctx.font = "110px Comic Sans MS";

        if (En) {
        ctx.fillText("Match Cards", w, 170);
        }
        if (Ger) {
        ctx.fillText("Spielkarten", w, 140);
        }
        if (Rom) {
            ctx.font = "90px Comic Sans MS";
            ctx.fillText("Cărți de meci", w, 140);
        }
        if (Bul) {
            ctx.font = "80px Comic Sans MS";
            ctx.fillText("Карти за мачове", w, 140);
        }
        if (Grk) {
            ctx.font = "90px Comic Sans MS";
            ctx.fillText("Κάρτες αγώνα", w, 140);
        }
        if (Tuk) {
            ctx.font = "80px Comic Sans MS";
            ctx.fillText("Maç Kartları", w, 140);
        }

        ctx.fillStyle = "Blue";
        ctx.font = "600 65px Comic Sans MS";

        if (En) {
        ctx.fillText("Match the sound", w, 265);
        }
        if (Ger) {
        ctx.font = "600 45px Comic Sans MS";
        ctx.fillText("Stimmen Sie den Ton ab", w, 240);
        }
        if (Rom) {
        ctx.fillText("Potriviți sunetul", w, 240);
        }
        if (Bul) {
            ctx.fillText("Съпоставете звука", w, 240);
        }
        if (Grk) {
            ctx.fillText("Ταίριαξε τον ήχο", w, 240);
            }
            if (Tuk) {
                ctx.fillText("Sesi eşleştir", w, 240);
            }

        if (En) {
        ctx.fillText("to the picture!", w, 340);
        }
        if (Ger) {
            ctx.fillText("zum Bild!", w, 300);
        }
        if (Rom) {
            ctx.fillText("la poza!", w, 300);
        }
        if (Bul) {
            ctx.fillText("към снимката!", w, 300);
        }
        if (Grk) {
            ctx.fillText("στην εικόνα!", w, 300);
        }
        if (Tuk) {
            ctx.fillText("resme!", w, 300);
        }

        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "Purple";

        if (KeyboardGame) {

            if (En) {
                ctx.fillText("Press the SPACEBAR to tab", w, 380);
                ctx.fillText("between the pictures", w, 430);
                ctx.fillText("and press the ENTER KEY to select one", w, 480);
                ctx.fillStyle = "Green";
                ctx.font = "600 26px Comic Sans MS";
                ctx.fillText("OR use your Switch - you need two Switches", w, 540);
            }

            ctx.font = "23px Comic Sans MS";
            if (Ger) {
                ctx.fillText("Drücken Sie die LEERTASTE zum Tabulator", w, 380);
                ctx.fillText("zwischen den Bildern", w, 430);
                ctx.fillText("und drücken Sie die EINGABETASTE, um eine auszuwählen", w, 480);
                ctx.fillStyle = "Green";
                ctx.font = "600 20px Comic Sans MS";
                ctx.fillText("ODER verwenden Sie Ihren Switch - Sie benötigen zwei Switches", w, 540);
            }

            if (Rom) {
                ctx.fillText("Apăsați BARA DE SPAȚIU pentru a selecta tab", w, 380);
                ctx.fillText("intre poze", w, 430);
                ctx.fillText("și apăsați tasta ENTER pentru a selecta unul", w, 480);
                ctx.fillStyle = "Green";
                ctx.font = "600 20px Comic Sans MS";
                ctx.fillText("SAU folosiți comutatorul dvs. - aveți nevoie de două comutatoare", w, 540);
            }

            if (Bul) {
                ctx.fillText("Натиснете ИНТЕРВАЛ за раздел", w, 380);
                ctx.fillText("между снимките", w, 430);
                ctx.fillText("и натиснете клавиша ENTER, за да изберете един", w, 480);
                ctx.fillStyle = "Green";
                ctx.font = "900 18px Comic Sans MS";
                ctx.fillText("ИЛИ използвайте своя Switch - имате нужда от два превключвателя", w, 540);
            }

            if (Grk) {
                ctx.fillText("", w, 380);
                ctx.fillText("", w, 430);
                ctx.fillText("", w, 480);
                ctx.fillStyle = "Green";
                ctx.font = "900 18px Comic Sans MS";
                ctx.fillText("", w, 540);
            }

            if (Tuk) {
                ctx.fillText("", w, 380);
                ctx.fillText("", w, 430);
                ctx.fillText("", w, 480);
                ctx.fillStyle = "Green";
                ctx.font = "900 18px Comic Sans MS";
                ctx.fillText("", w, 540);
            }

        }

        if (!KeyboardGame) { 
            if (En) {
	            ctx.fillText("Using your Mouse to", w, 410);
                ctx.fillText("Left Click on the picture", w, 460);
            }
            if (Ger) {
                ctx.font = "600 26px Comic Sans MS";
                ctx.fillText("Verwenden Sie dazu Ihre Maus", w, 380);
                ctx.fillText("Klicken Sie mit der linken Maustaste auf das Bild", w, 440);
            }
             if (Rom) {
                ctx.fillText("Folosind mouse-ul pentru a", w, 380);
                ctx.fillText("Click stânga pe imagine", w, 440);
            }
            if (Bul) {
                ctx.fillText("С помощта на мишката за", w, 380);
                ctx.fillText("Щракнете с левия бутон върху снимката", w, 440);
            }
            if (Grk) {
                ctx.fillText("Χρησιμοποιώντας το ποντίκι σας για να", w, 380);
                ctx.fillText("Αριστερό κλικ στην εικόνα", w, 440);
            }
            if (Tuk) {
                ctx.fillText("Farenizi kullanarak", w, 380);
                ctx.fillText("Resmin üzerine sol tıklayın", w, 440);
            }
        }

        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "Red";
        

        if (KeyboardGame) {
            if (En) {
                ctx.textAlign = "center"; 
                ctx.fillText("Let's Go!", w, 620);
                ctx.fillText("Press the SPACEBAR to start!", w, 660);
            }
            if (Ger) {
                ctx.textAlign = "center"; 
                ctx.fillText("Lass uns gehen!", w, 620);
                ctx.fillText("Drücken Sie die LEERTASTE, um zu starten!", w, 660);
            }
            if (Rom) {
                ctx.textAlign = "center"; 
                ctx.fillText("Să mergem!", w, 620);
                ctx.fillText("Apăsați pe SPAȚIU pentru a începe!", w, 660);
            }
            if (Bul) {
                ctx.textAlign = "center"; 
                ctx.fillText("Да тръгваме!", w, 620);
                ctx.fillText("Натиснете ИНТЕРВАЛ, за да започнете!", w, 660);
            }
            if (Grk) {
                ctx.textAlign = "center"; 
                ctx.fillText("Πάμε!", w, 620);
                ctx.fillText("Πατήστε το πλήκτρο διαστήματος για να ξεκινήσετε!", w, 660);
            }
            if (Tuk) {
                ctx.textAlign = "center"; 
                ctx.fillText("Hadi gidelim!", w, 620);
                ctx.fillText("Başlamak için Ara Çubuğu'na basın!", w, 660);
            }
        }

        if (!KeyboardGame) { 

        if (En) {
            ctx.fillText("Let's Go!", w, 550);
        }
        if (Ger) {
            ctx.fillText("Lass uns gehen!", w, 550);
        }
        if (Rom) {
            ctx.fillText("Să mergem!", w, 550);
        }
        if (Bul) {
            ctx.fillText("Да тръгваме!", w, 550);
        }
        if (Grk) {
            ctx.fillText("Πάμε!", w, 550);
        }
        if (Tuk) {
            ctx.fillText("Hadi gidelim!", w, 550);
        }
     
            ctx.textAlign = "center";
            ctx.drawImage(cross1, w-30, 600, 50, 50);
            cross1.path = new Path2D();
            cross1.path.rect(w-30, 600, 50, 50);
        }

    
        

        incor=false;
        locked();



        if (setMenu && !mouseMode && keyboardMode) {
            addEventListener("keydown", closeSplash1key);
        }




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

        if (En) {
        ctx.fillText("Match the sound to the picture", w, 615);
        }
        if (Ger) {
            ctx.font = "500 21px Comic Sans MS";
            ctx.fillText("Ordne den Ton dem Bild zu", w, 615);
        }
        if (Rom) {
        ctx.fillText("Potriviți sunetul cu imaginea", w, 615);
        }
        if (Bul) {
            ctx.fillText("Съпоставете звука с картината", w, 615);
            }

    }

    if (!KeyboardGame) {
        ctx.font = "35px Comic Sans MS";
        ctx.fillStyle = "blue";
    if (En) {
        ctx.fillText("Match the sound to the picture", w, 630);
    }
    if (Ger) {
        ctx.fillText("Ordne den Ton dem Bild zu", w, 630);
    }
    if (Rom) {
        ctx.fillText("Potriviți sunetul cu imaginea", w, 630);
    }
    if (Bul) {
        ctx.fillText("Съпоставете звука с картината", w, 630);
    }
    if (Grk) {
        ctx.fillText("Ταιριάξτε τον ήχο με την εικόνα", w, 630);
    }
    if (Tuk) {
        ctx.fillText("Sesi resimle eşleştirin", w, 630);
    }
}

    if (KeyboardGame) {
     
    
    ctx.fillStyle = "blue";
    ctx.font = "22px Comic Sans MS";

    if (En) {  
	ctx.fillText("using the SPACEBAR to tab between pictures", w, 645);
    ctx.fillStyle = "red";
    ctx.fillText("and then", w, 671);
    ctx.fillStyle = "blue";
    ctx.fillText("press the ENTER KEY to select one", w, 700);
    }

    if (Ger) { 
        ctx.font = "500 21px Comic Sans MS";
        ctx.fillText("Verwenden Sie die LEERTASTE, um zwischen den Bildern zu wechseln", w, 645);
        ctx.fillStyle = "red";
        ctx.fillText("und dann", w, 671);
        ctx.fillStyle = "blue";
        ctx.fillText("Drücken Sie die EINGABETASTE, um eine auszuwählen", w, 700);
    }

    if (Rom) {  
        ctx.fillText("folosind BARA DE SPAȚIU pentru a tasta între imagini", w, 645);
        ctx.fillStyle = "red";
        ctx.fillText("și apoi", w, 671);
        ctx.fillStyle = "blue";
        ctx.fillText("apăsați tasta ENTER pentru a selecta una", w, 700);
    }

    if (Bul) {  
        ctx.fillText("с помощта на ИНТЕРВАЛ за раздел между снимките", w, 645);
        ctx.fillStyle = "red";
        ctx.fillText("и тогава", w, 671);
        ctx.fillStyle = "blue";
        ctx.fillText("натиснете клавиша ENTER, за да изберете един", w, 700);
    }

    

    

    }

    if (!KeyboardGame) {

    if (En) {
	    ctx.fillText("Left Click on the picture", w, 680);
    }
    if (Ger) {
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("Klicken Sie mit der linken Maustaste auf das Bild", w, 680);
    }
    if (Rom) {
        ctx.fillText("Click stânga pe imagine", w, 680);
    }
    if (Bul) {
        ctx.fillText("Щракнете с левия бутон върху снимката", w, 670);
    }
    if (Grk) {
        ctx.fillText("Αριστερό κλικ στην εικόνα", w, 680);
    }
    if (Tuk) {
        ctx.fillText("Resmin üzerine sol tıklayın", w, 670);
    }

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
    //ctx.drawImage(settings, 0, 0, 80, 80);
    //settings.path = new Path2D();
    //settings.path.rect(0, 0, 80, 80);

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
    //ctx.fillText("Settings", 40, 90);

    //if (mouseMode) {
        //ctx.fillText("Left Click", 40, 106);
    //}
    /*if (keyboardMode) {
        ctx.fillText("Press S", 40, 106);
    }*/

    // text
    Question();
    // white rectangle
    ctx.fillStyle = "white";
    // border
    ctx.lineWidth = 4;
    //ctx.strokeStyle = "blue";


    //Restart Game

    /*ctx.drawImage(reSet, 635, 8, 70, 70);
    reSet.path = new Path2D();
    reSet.path.rect(635, 8, 80, 80);

    ctx.font = "bold 13px Comic sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Left Click", 670, 90);
    ctx.fillText("to restart", 670, 105);

    canvas.addEventListener("click", reStart);*/
}


///////////////////////////////////
////part of right awnser text//////
function rightAnsText() {

    if (mouseMode) {

        //console.log("pauseOff is " + pauseOff);

    ctx.font = "35px Comic Sans MS";

    if (En) {
       ctx.fillText("Left click on your mouse", w, 400);
       if (part3 && togSpeech) {
           mseUK.play();
           part3 = false;
        }
    }

    if (Ger) {
        ctx.fillText("Klicken Sie mit der linken Maustaste", w, 400);
        if (part3 && togSpeech) {
            mseGER.play();
            part3 = false;
         }
    }

    if (Rom) {
        ctx.fillText("Faceți clic stânga pe mouse", w, 400);
        if (part3 && togSpeech) {
            mseROM.play();
            part3 = false;
         }
    }

    if (Bul) {
        ctx.fillText("Щракнете с левия бутон върху мишката", w, 400);
        if (part3 && togSpeech) {
            mseBUL.play();
            part3 = false;
         }
    }

    if (Grk) {
        ctx.fillText("Αριστερό κλικ στο ποντίκι σας", w, 400);
        if (part3 && togSpeech) {
            mseGRK.play();
            part3 = false;
         }
    }

    if (Tuk) {
        ctx.fillText("Farenize sol tıklayın", w, 400);
        if (part3 && togSpeech) {
            mseTUK.play();
            part3 = false;
         }
    }

    }

    if (keyboardMode) {

    if (En) {  
       ctx.fillText("Press the Spacebar", w, 400);
       if (part3 && togSpeech) {
           keyUK.play();
           part3 = false;
        }
    }

    if (Ger) {  
        ctx.fillText("Drücken Sie die Leertaste", w, 400);
        if (part3 && togSpeech) {
            keyGER.play();
            part3 = false;
         }
     }

     if (Rom) {  
        ctx.fillText("Apăsați pe bara de spațiu", w, 400);
        if (part3 && togSpeech) {
            keyROM.play();
            part3 = false;
         }
     }

     if (Bul) {  
        ctx.fillText("Натиснете интервала", w, 400);
        if (part3 && togSpeech) {
            keyBUL.play();
            part3 = false;
         }
     }

     if (Grk) {  
        ctx.fillText("Πατήστε το πλήκτρο διαστήματος", w, 400);
        if (part3 && togSpeech) {
            keyGRK.play();
            part3 = false;
         }
     }

     if (Tuk) {  
        ctx.fillText("Ara Çubuğuna basın", w, 400);
        if (part3 && togSpeech) {
            keyTUK.play();
            part3 = false;
         }
     }

    }

    if (En) {
        ctx.fillText("for the next question!", w, 450);
     }

     if (Ger) {
         ctx.fillText("für die nächste Frage!", w, 450);
     }

     if (Rom) {
         ctx.fillText("pentru următoarea întrebare!", w, 450);
     }

     if (Bul) {
        ctx.fillText("за следващия въпрос!", w, 450);
    }
     
     if (Grk) {
        ctx.fillText("για την επόμενη ερώτηση!", w, 450);
    }

    if (Tuk) {
        ctx.fillText("sonraki soru için!", w, 450);
    }
    
}

// End of rightAnsText() //






////// Q1 Keyboard Controls ////////////////////////


//// Keyboard
function gameStartKeys(e) {
    gameIns = false;
    gameInsSpeechKey.pause();
    gameInsSpeechKey.currentTime = 0;
    //removeEventListener("keyup", gameStartKeys);
    removeEventListener("keydown", gameStartKeys);
}



////// Q1 Mouse Controls ////////////////////////



function Q1checkClick1(e) {
    if (volLock) {
    if (!setMenu && !volDis) {
	if (ctx.isPointInPath(amb.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = false;
        cor1 = true;
        canvas.removeEventListener("click", Q1checkClick1);
    }
    }
}
}


function Q1checkClick2(e) {
    if (volLock) {
    if (!setMenu && !volDis) {
    if (ctx.isPointInPath(lam.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick2);
    }
    }
}
}

function Q1checkClick3(e) {
    if (volLock) {
    if (!setMenu && !volDis) {
    if (ctx.isPointInPath(micro.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick3);
    }
    }
}
}

function Q1checkClick4(e) {
    if (volLock) {
    if (!setMenu && !volDis) {
    if (ctx.isPointInPath(cow.path, e.offsetX, e.offsetY)) {
        sir.pause();
        sir.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q1checkClick4);
    }
    }
}
}

// keyboard

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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
    }

    if (firstQu) {
    gameIns=true;
    }

    //console.log("gameIns is " + gameIns);

    // Question 1
    // Only runs if instuctions and settings menu are off.
    if (!gameIns && sEff && Run1) {
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






    if (volLock) {
    ///// test 27.11.24




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

} // end of volLock







    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images



        if (volLock) { // test



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



} // volLock / 27.11.24




    
    }// Locked if gameIns = true

}


////////// End of Question 1 ////////////////////

///////// Q2 Mouse Controls ////////////////////////

function Q2checkClick1(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q2checkClick1, false);
    }
}
}

function Q2checkClick2(e) {
    if (volLock) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {    
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q2checkClick2, false);
    }
}
}

function Q2checkClick3(e) {
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {    
        cow1.pause();
        cow1.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q2checkClick3, false);
    }
}
}

function Q2checkClick4(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        cow1.pause();
        cow1.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = true;
        canvas.removeEventListener("click", Q2checkClick4, false);
    }
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

    if (returnTo1) {
    returnKey();
    returnTo1=false;
    }

    //console.log("incor is " + incor +  " cor2 is " + cor2);

    // Question 2    

    if (sEff && Run2) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = false;
        cor1 = false;
        cor2 = false;
        cor3 = true;
        canvas.removeEventListener("click", Q3checkClick1);
    }
}
}

function Q3checkClick2(e) {
    if (volLock) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q3checkClick2);
    }
}
}

function Q3checkClick3(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q3checkClick3);
    }
}
}

function Q3checkClick4(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        lamb.pause();
        lamb.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q3checkClick4);
    }
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    // Question 3    

    if (sEff && Run3) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q3checkClick1);
    canvas.addEventListener("click", Q3checkClick2);
    canvas.addEventListener("click", Q3checkClick3);
    canvas.addEventListener("click", Q3checkClick4);
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
    if (volLock) {
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
}

function Q4checkClick2(e) {
    if (volLock) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q4checkClick2);
    }
}
}


function Q4checkClick3(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q4checkClick3);
    }
}
}

function Q4checkClick4(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        oldPhone.pause();
        oldPhone.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q4checkClick4);
    }
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
    
    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run4) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q5checkClick1, false);
    }
}
}

function Q5checkClick2(e) {
    if (volLock) {
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
}

function Q5checkClick3(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q5checkClick3, false);
    }
}
}

function Q5checkClick4(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        fireEng.pause();
        fireEng.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q5checkClick4, false);
    }
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }
    
    if (sEff && Run5) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (micro.path && ctx.isPointInPath(micro.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = false;
        cor6 = true;
        canvas.removeEventListener("click", Q6checkClick1);
    }
}
}

function Q6checkClick2(e) {
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q6checkClick2);
    }
}
}

function Q6checkClick3(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q6checkClick3);
    }
}
}

function Q6checkClick4(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        microSound.pause();
        microSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q6checkClick4);
    }
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run6) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = false;
        cor7 = true;
        canvas.removeEventListener("click", Q7checkClick1);
    }
}
}

function Q7checkClick2(e) {
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q7checkClick2);
    }
}
}

function Q7checkClick3(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q7checkClick3);
    }
}
}

function Q7checkClick4(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        bellSound.pause();
        bellSound.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q7checkClick4);
    }
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run7) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q8checkClick1);
    }
}
}

function Q8checkClick2(e) {
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q8checkClick2);
    }
}
}

function Q8checkClick3(e) {
    if (volLock) {
    if (polac.path && ctx.isPointInPath(polac.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = false;
        cor8 = true;
        canvas.removeEventListener("click", Q8checkClick3);
    }
}
}

function Q8checkClick4(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        roarEff.pause();
        roarEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q8checkClick4);
    }
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
        removeEventListener("keydown", Q8selectKeys3);
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run8) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (bell.path && ctx.isPointInPath(bell.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q9checkClick1);
    }
}
}

function Q9checkClick2(e) {
    if (volLock) {
    if (pigeon.path && ctx.isPointInPath(pigeon.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = false;
        cor9 = true;
        canvas.removeEventListener("click", Q9checkClick2);
    }
}
}

function Q9checkClick3(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q9checkClick3);
    }
}
}

function Q9checkClick4(e) {
    if (volLock) {
    if (amb.path && ctx.isPointInPath(amb.path, event.offsetX, event.offsetY)) {
        pigeonSdEff.pause();
        pigeonSdEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q9checkClick4);
    }
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
        removeEventListener("keydown", Q9selectKeys1);
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run9) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (rook.path && ctx.isPointInPath(rook.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q10checkClick1);
    }
}
}

function Q10checkClick2(e) {
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q10checkClick2);
    }
}
}

function Q10checkClick3(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q10checkClick3);
    }
}
}

function Q10checkClick4(e) {   
    if (volLock) {
    if (Rugby.path && ctx.isPointInPath(Rugby.path, event.offsetX, event.offsetY)) {
        rugbyEff.pause();
        rugbyEff.currentTime = 0;
        incor = false;
        cor10 = true;
        canvas.removeEventListener("click", Q10checkClick4);
    }
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run10) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (rook.path && ctx.isPointInPath(rook.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q11checkClick1);
    }
}
}

function Q11checkClick2(e) {
    if (volLock) {
    if (lam.path && ctx.isPointInPath(lam.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q11checkClick2);
    }
}
}

function Q11checkClick3(e) {
    if (volLock) {
    if (collie.path && ctx.isPointInPath(collie.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = false;
        cor11 = true;       
        canvas.removeEventListener("click", Q11checkClick3);
    }
}
}

function Q11checkClick4(e) {  
    if (volLock) {
    if (pCar.path && ctx.isPointInPath(pCar.path, event.offsetX, event.offsetY)) {
        barkEff.pause();
        barkEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q11checkClick4);
    }
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

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run11) {
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
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
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
    if (volLock) {
    if (rook.path && ctx.isPointInPath(rook.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q12checkClick1);
    }
}
}

function Q12checkClick2(e) {
    if (volLock) {
    if (tennis.path && ctx.isPointInPath(tennis.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q12checkClick2);
    }
}
}

function Q12checkClick3(e) {
    if (volLock) {
    if (cow.path && ctx.isPointInPath(cow.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = true;
        canvas.removeEventListener("click", Q12checkClick3);
    }
}
}

function Q12checkClick4(e) {
    if (volLock) {
    if (tram.path && ctx.isPointInPath(tram.path, event.offsetX, event.offsetY)) {
        tramEff.pause();
        tramEff.currentTime = 0;
        incor = false;
        cor12 = true;
        //console.log(cor12);
        canvas.removeEventListener("click", Q12checkClick4);
    }
}
}

/////////// end of Q12 Mouse Controls ////////////////////////////////

        // keyboard controls for images

        function Q12selectKeys1(e) {
            if (!setMenu) {
            if (keys[13] && KeyGame1 && Sw1 && !mouseMode) {
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = true;
                removeEventListener("keydown", Q12selectKeys1);
            }
            }
        }

        function Q12selectKeys2(e) {
            if (!setMenu) {
            if (keys[13] && KeyGame2 && Sw2 && !mouseMode) {
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = true;
                removeEventListener("keydown", Q12selectKeys2);
            }
            }
        }

        function Q12selectKeys3(e) {
            if (!setMenu) {
            if (keys[13] && KeyGame3 && Sw3 && !mouseMode) {
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = true;
                removeEventListener("keydown", Q12selectKeys3);
            }
            }
        }

        function Q12selectKeys4(e) {
            if (!setMenu) {
            if (keys[13] && KeyGame4 && Sw4 && !mouseMode) {
                tramEff.pause();
                tramEff.currentTime = 0;
                incor = false;
                cor12 = true;
                removeEventListener("keydown", Q12selectKeys4);
            }
            }
        }
        
        
    
    //////////////////////////////////////////



/////////  Question 12 //////////////////

function quest12() {

    if (returnTo1) {
        returnKey();
        returnTo1=false;
        }

    if (sEff && Run12) {
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

    if (!gameIns) {
        instructions(); // text which appears below images
    }

    if (gameIns) {
        gameInstructions();
    }

    if (gameIns) {
        addEventListener("keydown", gameStartKeys);
        canvas.addEventListener("click", gameStart, false);
    }

    if (!gameIns) { // mouse controls for images

    if (!KeyboardGame) {
    canvas.addEventListener("click", Q12checkClick1);
    canvas.addEventListener("click", Q12checkClick2);
    canvas.addEventListener("click", Q12checkClick3);
    canvas.addEventListener("click", Q12checkClick4);
    }

    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        addEventListener("keydown", Q12selectKeys1);
        addEventListener("keydown", Q12selectKeys2);
        addEventListener("keydown", Q12selectKeys3);
        addEventListener("keydown", Q12selectKeys4);
    }

        // Keyboard and Switch Controls
    if (KeyboardGame && keyboardMode && !mouseMode && !setMenu) {
        keyboardAndswitch();
    } // keyboard game is true
    
    


    }
}
////////// End of Question 12 ////////////////////












//// Answers ///////////////////////

// mouse controls right Answer 1 //
function rightClick1() {

    Run1 = false;

    rightAnsClear();
    part1=true;

    incor = false;
    cor1 = false;
    MCgameSc1 = false;
    MCgameSc2 = true;
    canvas.removeEventListener("click", rightClick1);
}
// End mouse controls right Answer //

// keyboard
function rightKey1() {
   if (keys[32]) { // Go to Q2

    Run1 = false;

    rightAnsClear();
    part1=true;

    incor = false;
    MCgameSc1 = false;
    MCgameSc2 = true;
    cor1 = false;
    removeEventListener("keydown", rightKey1);
   }
}

/////////  Right Answer 1 //////////////////

    function rightAns1() {

        wellDone();

        translate1();

        ctx.font = "40px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was an ambulance!", w, 290);
            if (part2 && togSpeech) {
                VOuk1.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Sound war ein Krankenwagen!", w, 290);
            if (part2 && togSpeech) {
                VOger1.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul a fost o ambulanță!", w, 290);
            if (part2 && togSpeech) {
                VOrom1.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше линейка!", w, 290);
            if (part2 && togSpeech) {
                VObul1.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν ασθενοφόρο!", w, 290);
            if (part2 && togSpeech) {
                //VOgrk1.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir ambulanstı!", w, 290);
            if (part2 && togSpeech) {
                //VOtuk1.play();
                part2 = false;
                part3 = true;
            }
        }


        ctx.font = "30px Comic Sans MS";
        rightAnsText();

        if (keyboardMode) {
        addEventListener("keydown", rightKey1);
        }
        if (mouseMode) {
        canvas.addEventListener("click", rightClick1);
        }
    }

    ///////// End of Right Answer 1 //////////////////


    // mouse controls right Answer 2 //
    function rightClick2() {

        Run2 = false;

        rightAnsClear();
        part1=true;

        incor = false;
        cor2 = false;
        MCgameSc2 = false;
        MCgameSc3 = true;
        canvas.removeEventListener("click", rightClick2);
    }
    // End mouse controls right Answer //

    function rightKey2() {
        if (keys[32]) { // Go to Q3

            Run2 = false;

            rightAnsClear();
            part1=true;

            incor = false;
            MCgameSc2 = false;
            MCgameSc3 = true;
            cor2 = false;
            removeEventListener("keydown", rightKey2);
        }
     }

    /////////  Right Answer 2 //////////////////
    function rightAns2() {

        wellDone(); // Voiceover - well done!
        
        translate1();
        ctx.font = "50px Comic Sans MS";
     

        if (En) { 
            ctx.fillText("The sound was a cow!", w, 290);
            if (part2 && togSpeech) {
                VOuk2.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Das Geräusch war eine Kuh!", w, 290);
            if (part2 && togSpeech) {
                VOger2.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era o vacă!", w, 290);
            if (part2 && togSpeech) {
                VOrom2.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше крава!", w, 290);
            if (part2 && togSpeech) {
                VObul2.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν αγελάδα!", w, 290);
            if (part2 && togSpeech) {
                //VOrom2.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir inekti!", w, 290);
            if (part2 && togSpeech) {
                //VObul2.play();
                part2 = false;
                part3 = true;
            }
        }
        
        ctx.font = "50px Comic Sans MS";
        rightAnsText();



        if (keyboardMode) {
            addEventListener("keydown", rightKey2);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick2);
            }
    }
    ///////// End of Right Answer 2 //////////////////


       // mouse controls right Answer 3 //
       function rightClick3() {

        Run3 = false;

        rightAnsClear();
        part1=true;

        incor = false;
        cor3 = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = true;
        canvas.removeEventListener("click", rightClick3);
    }
    // End mouse controls right Answer //

    function rightKey3() {
    if (keys[32]) { // Go to Q4

        Run3 = false;

        rightAnsClear();
        part1=true;

        incor = false;
        cor3 = false;
        MCgameSc3 = false;
        MCgameSc4 = true;
        removeEventListener("keydown", rightKey3);
    }
}

    /////////  Right Answer 3 //////////////////
    function rightAns3() {

   
        wellDone(); // Voiceover - well done!

        translate1();
        ctx.font = "45px Comic Sans MS";
        
        if (En) { 
            ctx.fillText("The sound was a lamb!", w, 290);
            if (part2 && togSpeech) {
                VOuk3.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Sound war ein Lamm!", w, 290);
            if (part2 && togSpeech) {
                VOger3.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un miel!", w, 290);
            if (part2 && togSpeech) {
                VOrom3.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше агнешко!", w, 290);
            if (part2 && togSpeech) {
                VObul3.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν αρνί!", w, 290);
            if (part2 && togSpeech) {
                //VOgrk3.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir kuzuydu!", w, 290);
            if (part2 && togSpeech) {
                //VOtuk3.play();
                part2 = false;
                part3 = true;
            }
        }

        ctx.font = "50px Comic Sans MS";
        rightAnsText();

        
        if (keyboardMode) {
            addEventListener("keydown", rightKey3);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick3);
            }

    }

    ///////// End of Right Answer 3 //////////////////

    // mouse controls right Answer 4 //
    function rightClick4() {

        rightAnsClear();
        part1=true;

        Run4 = false;

        cor4 = false;
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

        canvas.removeEventListener("click", rightClick4);
    }
    // End mouse controls right Answer //

function rightKey4() {
    if (keys[32]) { // Go to Q5

        Run4 = false;

        rightAnsClear();
        part1=true;

        incor = false;
        if (!togQs1) {
            MCgameSc5 = true;
        }

        if (togQs1) {
            finalScreen = true;
        }
        cor4 = false;
        MCgameSc4 = false;
        removeEventListener("keydown", rightKey4);
    }
}

     /////////  Right Answer 4 //////////////////
     function rightAns4() {
        
        wellDone();

        translate1();
        ctx.font = "39px Comic Sans MS";
        
        if (En) { 
            ctx.fillText("The sound was an old telephone!", w, 290);
            if (part2 && togSpeech) {
                //VOuk4.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Ton war ein altes Telefon!", w, 290);
            if (part2 && togSpeech) {
                //VOger4.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un telefon vechi!", w, 290);
            if (part2 && togSpeech) {
                //VOrom4.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше стар телефон!", w, 290);
            if (part2 && togSpeech) {
                //VObul4.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν παλιό τηλέφωνο!", w, 290);
            if (part2 && togSpeech) {
                //VOgrk4.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses eski bir telefondu!", w, 290);
            if (part2 && togSpeech) {
                //VOtuk4.play();
                part2 = false;
                part3 = true;
            }
        }

        ctx.font = "35px Comic Sans MS";
        rightAnsText();

        
        
        if (keyboardMode) {
            addEventListener("keydown", rightKey4);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick4);
            }

    }

    // mouse controls right Answer 5 //
    function rightClick5() {

        Run5 = false;

        rightAnsClear();
        part1=true;

        cor5 = false;
        incor = false;
        MCgameSc2 = false;
        MCgameSc3 = false;
        MCgameSc4 = false;
        MCgameSc5 = false;
        MCgameSc6 = true;
        canvas.removeEventListener("click", rightClick5);
    }
    // End mouse controls right Answer //

    // keyboard controls right Answer 5 //
    function rightKey5() {
        if (keys[32]) { // Go to Q6

            Run5 = false;

            rightAnsClear();
            part1=true;

            cor5 = false;
            incor = false;
            MCgameSc5 = false;
            MCgameSc6 = true;      
            removeEventListener("keydown", rightKey5);
        }
    }
    // End keyboard controls right Answer //

    /////////  Right Answer 5 //////////////////
    function rightAns5() {

        wellDone();

        translate1();
        ctx.font = "39px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was a Fire Engine!", w, 290);
            if (part2 && togSpeech) {
                VOuk5.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Sound war ein Feuerwehrauto!", w, 290);
            if (part2 && togSpeech) {
                VOger5.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era o mașină de pompieri!", w, 290);
            if (part2 && togSpeech) {
                VOrom5.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше пожарна машина!", w, 290);
            if (part2 && togSpeech) {
                VObul5.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν Πυροσβεστική!", w, 290);
            if (part2 && togSpeech) {
                //VOgrk5.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir İtfaiye Aracıydı!", w, 290);
            if (part2 && togSpeech) {
                //VOtuk5.play();
                part2 = false;
                part3 = true;
            }
        }
        
        ctx.font = "50px Comic Sans MS";
        rightAnsText();

        if (keyboardMode) {
            addEventListener("keydown", rightKey5);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick5);
            }
        
    }
    // End of Right Awnser 6 //


      // mouse controls right Answer 6 //
      function rightClick6() {

        Run6 = false;
          
      rightAnsClear();
      part1=true;

      cor6 = false;
      incor = false;
      MCgameSc6 = false;
      MCgameSc7 = true;
      canvas.removeEventListener("click", rightClick6);
    }
// End mouse controls right Answer //

// keyboard controls right Answer 6 //
function rightKey6() {
    if (keys[32]) { // Go to Final Screen

        Run6 = false;

    rightAnsClear();
    part1=true;

    cor6 = false;
    incor = false;
    MCgameSc6 = false;
    MCgameSc7 = true;
    removeEventListener("keydown", rightKey6);
    }
  }
// End mouse controls right Answer //

    /////////  Right Answer 6 //////////////////
    function rightAns6() {
        
        wellDone();

        translate1();   
        ctx.font = "40px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was a Microwave!", w, 290);
            if (part2 && togSpeech) {
                VOuk6.play();
                part2 = false;
                part3 = true;
            }
        }
        
        if (Ger) { 
            ctx.fillText("Der Ton war eine Mikrowelle!", w, 290);
            if (part2 && togSpeech) {
                VOger6.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un cuptor cu microunde!", w, 290);
            if (part2 && togSpeech) {
                VOrom6.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.font = "35px Comic Sans MS";
            ctx.fillText("Звукът беше от микровълнова печка!", w, 290);
            if (part2 && togSpeech) {
                VObul6.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν φούρνος μικροκυμάτων!", w, 290);
            if (part2 && togSpeech) {
                //VOrom6.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.font = "35px Comic Sans MS";
            ctx.fillText("Ses bir Mikrodalga oldu!", w, 290);
            if (part2 && togSpeech) {
                //VObul6.play();
                part2 = false;
                part3 = true;
            }
        }

        ctx.font = "40px Comic Sans MS";
        rightAnsText();

        
        if (keyboardMode) {
            addEventListener("keydown", rightKey6);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick6);
            }
    }


    // mouse controls right Answer 7 //
    function rightClick7() {

        Run7 = false;

        rightAnsClear();
        part1=true;

        cor7 = false;
        incor = false;
        MCgameSc7 = false;
        MCgameSc8 = true;
        canvas.removeEventListener("click", rightClick7);
      }
  // End mouse controls right Answer //

  // keyboard controls right Answer 7 //
  function rightKey7() {
    if (keys[32]) {

        Run7 = false;

    rightAnsClear();
    part1=true;

    cor7 = false;
    incor = false;
    MCgameSc7 = false;
    MCgameSc8 = true;
    removeEventListener("keydown", rightKey7);
  }
}
// End keyboard controls right Answer //

  

     /////////  Right Answer 7 //////////////////
     function rightAns7() {

        wellDone();

        translate1();
        
        ctx.font = "40px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was a Ring Door Bell!", w, 290);
            if (part2 && togSpeech) {
                VOuk7.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Ton war eine Türklingel!", w, 290);
            if (part2 && togSpeech) {
                VOger7.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul a fost un clopoțel!", w, 290);
            if (part2 && togSpeech) {
                VOrom7.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше звънец на вратата!", w, 290);
            if (part2 && togSpeech) {
                //VOrom7.play();
                part2 = false;
                part3 = true;
            }
        }
        
        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν ένα κουδούνι πόρτας!", w, 290);
            if (part2 && togSpeech) {
                //VOrom7.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir Kapı Zili idi!", w, 290);
            if (part2 && togSpeech) {
                //VOrom7.play();
                part2 = false;
                part3 = true;
            }
        }

        ctx.font = "40px Comic Sans MS";
        rightAnsText();

        if (keyboardMode) {
            addEventListener("keydown", rightKey7);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick7);
            }
    }

       // mouse controls right Answer 8 //
       function rightClick8() {

        Run8 = false;

        rightAnsClear();
        part1=true;

        cor8 = false;
        incor = false;
        MCgameSc8 = false;

        if (!togQs2) {
            MCgameSc9 = true;
        }

        if (togQs2) {
            finalScreen = true;
        }     

        canvas.removeEventListener("click", rightClick8);

      }
  // End mouse controls right Answer //

   // keyboard controls right Answer 8 //
   function rightKey8() {
    if (keys[32]) { // Go to Final Screen

        Run8 = false;

        rightAnsClear();
        part1=true;

        cor8 = false;
        incor = false;
        MCgameSc8 = false;  

        if (!togQs2) {
            MCgameSc9 = true;
        }

        if (togQs2) {
            finalScreen = true;
        }  

    removeEventListener("keydown", rightKey8);
    }

  }
// End keyboard controls right Answer //

     /////////  Right Answer 8 //////////////////
     function rightAns8() {

        wellDone();

        translate1();
        
        ctx.font = "30px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was a Polacanthus Dinosaur", w, 290);
            if (part2 && togSpeech) {
                VOuk8.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Das Geräusch war ein Polacanthus-Dinosaurier", w, 290);
            if (part2 && togSpeech) {
                VOger8.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un dinozaur Polacanthus", w, 290);
            if (part2 && togSpeech) {
                VOrom8.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше динозавър от Polacanthus", w, 290);
            if (part2 && togSpeech) {
                //VOrom8.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν ένας δεινόσαυρος Polacanthus", w, 290);
            if (part2 && togSpeech) {
                //VOrom8.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir Polacanthus Dinozoruydu", w, 290);
            if (part2 && togSpeech) {
                //VOrom8.play();
                part2 = false;
                part3 = true;
            }
        }

        ctx.font = "30px Comic Sans MS";
        rightAnsText();     

        if (keyboardMode) {
            addEventListener("keydown", rightKey8);
            }
            if (mouseMode) {
                canvas.addEventListener("click", rightClick8);
            }
    }





// mouse controls right Answer 9 //
function rightClick9() {

    Run9 = false;

    rightAnsClear();
    part1=true;

    cor9 = false;
    incor = false;
    MCgameSc9 = false;
    MCgameSc10 = true;
    canvas.removeEventListener("click", rightClick9);
  }
// End mouse controls right Answer //

// keyboard controls right Answer 9 //
function rightKey9() {
    if (keys[32]) {

        Run9 = false;

    rightAnsClear();
    part1=true;
     
    cor9 = false;
    incor = false;
    MCgameSc9 = false;
    MCgameSc10 = true;
    //finalScreen = true;
    removeEventListener("keydown", rightKey9);
    }
  }
// End keyboard controls right Answer //

 /////////  Right Answer 9 //////////////////
 function rightAns9() {

    wellDone();

    translate1();

    ctx.font = "40px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was a Pigeon!", w, 290);
            if (part2 && togSpeech) {
                VOuk9.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Sound war eine Taube!", w, 290);
            if (part2 && togSpeech) {
                VOger9.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un porumbel!", w, 290);
            if (part2 && togSpeech) {
                VOrom9.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше гълъб!", w, 290);
            if (part2 && togSpeech) {
                //VOuk9.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν Περιστέρι!", w, 290);
            if (part2 && togSpeech) {
                //VOrom9.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir Güvercindi!", w, 290);
            if (part2 && togSpeech) {
                //VOuk9.play();
                part2 = false;
                part3 = true;
            }
        }

    ctx.font = "40px Comic Sans MS";
    rightAnsText(); 

    if (keyboardMode) {
        addEventListener("keydown", rightKey9);
        }
        if (mouseMode) {
            canvas.addEventListener("click", rightClick9);
        }
}






// mouse controls right Answer 10 //
function rightClick10() {

    rightAnsClear();
    part1=true;

    Run10 = false;

    cor10 = false;
    incor = false;
    MCgameSc10 = false;
    MCgameSc11 = true;
    canvas.removeEventListener("click", rightClick10);
  }
// End mouse controls right Answer //

// keyboard controls right Answer 10 //
function rightKey10() {
    if (keys[32]) {

    rightAnsClear();
    part1=true;

    Run10 = false;
    
    cor10 = false;
    incor = false;
    MCgameSc10 = false;
    MCgameSc11 = true;
    //finalScreen=true;
    removeEventListener("keydown", rightKey10);
    }
  }
// End keyboard controls right Answer //

 /////////  Right Answer 10 //////////////////
 function rightAns10() {

    wellDone();

    translate1();

    ctx.font = "40px Comic Sans MS";
        if (En) { 
            ctx.fillText("The sound was a game of Rugby!", w, 290);
            if (part2 && togSpeech) {
                VOuk10.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Sound war ein Rugbyspiel", w, 290);
            if (part2 && togSpeech) {
                VOger10.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un joc de rugby", w, 290);
            if (part2 && togSpeech) {
                VOrom10.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше игра на ръгби!", w, 290);
            if (part2 && togSpeech) {
                //VOrom10.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν παιχνίδι ράγκμπι!", w, 290);
            if (part2 && togSpeech) {
                //VOrom10.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir Rugby oyunuydu!", w, 290);
            if (part2 && togSpeech) {
                //VOrom10.play();
                part2 = false;
                part3 = true;
            }
        }

    ctx.font = "40px Comic Sans MS";
    rightAnsText();

    

    if (keyboardMode) {
        addEventListener("keydown", rightKey10);
        }
        if (mouseMode) {
            canvas.addEventListener("click", rightClick10);
        }
}


// mouse controls right Answer 11 //

function rightClick11() {

    Run11 = false;

    rightAnsClear();
    part1=true;

    cor11 = false;
    incor = false;
    MCgameSc11 = false;
    MCgameSc12 = true;
    canvas.removeEventListener("click", rightClick11);
  }
// End mouse controls right Answer //

// keyboard controls right Answer 11 //

function rightKey11() {
    if (keys[32]) {

        Run11 = false;

    rightAnsClear();
    part1=true;

    cor11 = false;
    incor = false;
    MCgameSc11 = false;
    MCgameSc12 = true;
    //finalScreen=true;
    removeEventListener("keydown", rightKey11);
  }
}
// End keyboard controls right Answer //

 /////////  Right Answer 11 //////////////////
 function rightAns11() {

    wellDone();

    translate1();

    ctx.font = "40px Comic Sans MS";
        if (En) { 
            ctx.fillText("The sound was a Collie Dog!", w, 290);
            if (part2 && togSpeech) {
                VOuk11.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Das Geräusch war ein Collie-Hund!", w, 290);
            if (part2 && togSpeech) {
                VOger11.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un Collie Dog!", w, 290);
            if (part2 && togSpeech) {
                VOrom11.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше куче Коли!", w, 290);
            if (part2 && togSpeech) {
                //VOrom11.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν σκύλος Κόλεϊ!", w, 290);
            if (part2 && togSpeech) {
                //VOrom11.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir Collie Dog'du!", w, 290);
            if (part2 && togSpeech) {
                //VOrom11.play();
                part2 = false;
                part3 = true;
            }
        }

    ctx.font = "40px Comic Sans MS";
    rightAnsText();

    if (keyboardMode) {
        addEventListener("keydown", rightKey11);
        }
        if (mouseMode) {
            canvas.addEventListener("click", rightClick11);
        }
}
// End of 11 ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////








// 12 //
// mouse controls right Answer 12 //
function rightClick12() {

    rightAnsClear();
    part1=true;

    cor12 = false;
    incor = false;
    MCgameSc12 = false;
    finalScreen = true;

    if (!togQs3) {
        finalScreen = true;
    }

    if (togQs3) {
        finalScreen = true;
    }

    canvas.removeEventListener("click", rightClick12);
  }
// End mouse controls right Answer //

// keyboard controls right Answer 12 //
function rightKey12() {
    if (keys[32]) { // Go to Final Screen

    rightAnsClear();
    part1=true;
    
    cor12 = false;
    incor = false;
    MCgameSc12 = false;
    finalScreen = true;

    if (!togQs3) {
        finalScreen = true;
    }

    if (togQs3) {
        finalScreen = true;
    }

    removeEventListener("keydown", rightKey12);
  }
}

// End keyboard controls right Answer //

 /////////  Right Answer 12 //////////////////
 function rightAns12() {

    wellDone();

    translate1();

    ctx.font = "40px Comic Sans MS";

    ctx.font = "40px Comic Sans MS";

        if (En) { 
            ctx.fillText("The sound was a Tram!", w, 290);
            if (part2 && togSpeech) {
                VOuk12.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Ger) { 
            ctx.fillText("Der Sound war eine Straßenbahn!", w, 290);
            if (part2 && togSpeech) {
                VOger12.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Rom) { 
            ctx.fillText("Sunetul era un tramvai!", w, 290);
            if (part2 && togSpeech) {
                VOrom12.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Bul) { 
            ctx.fillText("Звукът беше трамвай!", w, 290);
            if (part2 && togSpeech) {
                //VOrom12.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Grk) { 
            ctx.fillText("Ο ήχος ήταν τραμ!", w, 290);
            if (part2 && togSpeech) {
                //VOrom12.play();
                part2 = false;
                part3 = true;
            }
        }

        if (Tuk) { 
            ctx.fillText("Ses bir tramvaydı!", w, 290);
            if (part2 && togSpeech) {
                //VOrom12.play();
                part2 = false;
                part3 = true;
            }
        }
   
        ctx.font = "40px Comic Sans MS";
        rightAnsText();
    
        if (keyboardMode) {
            addEventListener("keydown", rightKey12);
            }
            if (mouseMode) {
            canvas.addEventListener("click", rightClick12);
            }
}

// End of 12 //



////////////////////////////////////////////////////////////////////////////////////////////////


    // mouse controls Wrong Answer //
    function clickWrong() {
        if (!setMenu) {
        sEff = true;
        gerWrong.pause();
        gerWrong.currentTime = 0;
        romWrong.pause();
        romWrong.currentTime = 0;
        wrongVoice.pause();
        wrongVoice.currentTime = 0;
        bulWrong.pause();
        bulWrong.currentTime = 0;
        bulWrongKey.pause();
        bulWrongKey.currentTime = 0;
        locked();
        canvas.removeEventListener("click", clickWrong);
        }
    }

// keyboard controls Wrong Answer
function keyWrong() {
    if (keys[32]) { // Go to return to game
        gerWrong.pause();
        gerWrong.currentTime = 0;
        romWrong.pause();
        romWrong.currentTime = 0;
        wrongVoiceKey.pause();
        wrongVoiceKey.currentTime = 0;
        bulWrong.pause();
        bulWrong.currentTime = 0;
        bulWrongKey.pause();
        bulWrongKey.currentTime = 0;
        sEff = true;
        locked();
        returnKey();
        removeEventListener("keydown", keyWrong);
    }
}

    /////////  Wrong Awnser //////////////////
    function wrong() {

        //console.log("pauseOff is " + pauseOff);

        //if (volLock) {

        sEff = false;

        if (togSpeech && mouseMode) {
            if (En) {
                //wrongVoice.play();

            }
            if (Ger) {
                //gerWrong.play();
            }
            if (Rom) {
                //romWrong.play();
            }
            if (Bul) {
                //bulWrong.play();
            }
        }

        if (togSpeech && keyboardMode) {
            if (En) {
                //wrongVoiceKey.play();
            }
            if (Ger) {
                //gerWrongKey.play();
            }
            if (Rom) {
                //romWrongKey.play();
            }
            if (Bul) {
                //bulWrongKey.play();
            }
        }
    
        if (!togSpeech) {
                wrongVoice.pause();
                wrongVoice.currentTime = 0;
                wrongVoiceKey.pause();
                wrongVoiceKey.currentTime = 0;

                gerWrong.pause();
                gerWrong.currentTime = 0;
                romWrong.pause();
                romWrong.currentTime = 0;

                bulWrong.pause();
                bulWrong.currentTime = 0;
                bulWrongKey.pause();
                bulWrongKey.currentTime = 0;
            }

        ctx.fillStyle = "white";
        ctx.fillRect(30, 65, 655, 600);
        ctx.strokeStyle = "blue";
        ctx.strokeRect(30, 65, 655, 600);
        ctx.fillStyle = "green";
        ctx.font = "80px Comic Sans MS";

        if (En) {
        ctx.textAlign = "center"; 
        ctx.drawImage(dog, (w - (dogImgWidth/2)), 80, dogImgWidth, 260);
        ctx.font = "40px Comic Sans MS";
        ctx.fillText("Sam the dog say's", w, 380);
        ctx.fillText("'that's not quite right!'", w, 430);
        }

        if (Ger) {
            ctx.fillText("Ach nein!", w, 170);
            ctx.font = "40px Comic Sans MS";
            ctx.fillText("das ist nicht richtig!", w, 270);
            ctx.fillStyle = "blue";
            ctx.font = "30px Comic Sans MS";
            ctx.fillText("Warum versuchen Sie es nicht noch einmal?", w, 380);
        }

        if (Rom) {
            ctx.fillText("Oh nu!", w, 170);
            ctx.font = "50px Comic Sans MS";
            ctx.fillText("Nu este in regula!", w, 270);
            ctx.fillStyle = "blue";
            ctx.fillText("De ce să nu încerci din nou?", w, 380);
        }

        if (Bul) {
            ctx.fillText("О, не!", w, 170);
            ctx.font = "50px Comic Sans MS";
            ctx.fillText("това не е правилно!", w, 270);
            ctx.fillStyle = "blue";
            ctx.fillText("Защо не опитате отново?", w, 380);
        }

        if (Grk) {
            ctx.fillText("Ωχ όχι!", w, 170);
            ctx.font = "40px Comic Sans MS";
            ctx.fillText("αυτό δεν είναι σωστό!", w, 270);
            ctx.fillStyle = "blue";
            ctx.fillText("Γιατί να μην δοκιμάσετε ξανά;", w, 380);
            }

            if (Tuk) {
                ctx.fillText("Oh hayır!", w, 170);
                ctx.font = "40px Comic Sans MS";
                ctx.fillText("Bu doğru değil!", w, 270);
                ctx.fillStyle = "blue";
                ctx.fillText("Neden tekrar denemiyorsunuz?", w, 380);
            }

        //ctx.fillStyle = "red";
        ctx.font = "40px Comic Sans MS";

        if (mouseMode) {
            if (En) {
               ctx.fillText("Left Click on your mouse", w, 515);
               ctx.fillText("to continue!", w, 560);
            }
            if (Ger) {
                ctx.fillText("Klicken Sie mit der linken Maustaste", w, 500);
                ctx.fillText("weitermachen!", w, 560);
            }
            if (Rom) {
                ctx.fillText("Faceți clic stânga pe mouse", w, 500);
                ctx.fillText("a continua!", w, 560);
            }
            if (Bul) {
                ctx.font = "32px Comic Sans MS";
                ctx.fillText("Щракнете с левия бутон върху мишката", w, 500);
                ctx.fillText("продължавам!", w, 560);
            }
            if (Grk) {
                ctx.fillText("Αριστερό κλικ στο ποντίκι σας", w, 500);
                ctx.fillText("να συνεχίσει!", w, 560);
            }
            if (Tuk) {
                ctx.font = "32px Comic Sans MS";
                ctx.fillText("Farenize Sol Tıklayın", w, 500);
                ctx.fillText("devam etmek!", w, 560);
            }
        }

        if (keyboardMode) {
            if (En) {
                ctx.fillText("Press the Spacebar", w, 500);
                ctx.fillText("to continue!", w, 560);
            }
            if (Bul) {
                ctx.fillText("Натиснете интервала", w, 500);
                ctx.fillText("продължавам!", w, 560);
            }
        }

        

        if (mouseMode && !keyboardMode) {
        canvas.addEventListener("click", clickWrong);
        }


        if (keyboardMode && !mouseMode) {
        addEventListener("keydown", keyWrong);
        }

    //} // volLocked
        

       


}


function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (setMenu && pausedForMenu) {
        showMenu();
    }

    if (gameIns && !pausedForMenu) {
        gameInstructions();
    }

    if (!setMenu && !pausedForMenu) {

    if (MCsplashSc) {
        splash();
    }
    
    if (startGame) {
        startPlayGame();
    }

}

function startPlayGame() {

   

    ///////// Question 1 //////////////////
    if (MCgameSc1) {

        soundInstructions = false; // disable speech on Splash screen
        SplashScreenOn = false; // disable splash screen Click Here!
        

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
           returnTo1=true;
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
          returnTo1=true;
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
           returnTo1=true;
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
            returnTo1=true;
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
            returnTo1=true;
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
          returnTo1=true;
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
          returnTo1=true;
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
          returnTo1=true;
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
          returnTo1=true;
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
          returnTo1=true;
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
          returnTo1=true;
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
          returnTo1 = true;
        }


    }


    
    ///////////// Final Screen ////////////////////

    function rightClickFS() {

        Run1 = true;
        Run2 = true;
        Run3 = true;
        Run4 = true;
        Run5 = true;
        Run6 = true;
        Run7 = true;
        Run8 = true;
        Run9 = true;
        Run10 = true;
        Run11 = true;
        Run12 = true;

        wellDoneMse.pause();
        wellDoneMse.currentTime = 0;
        music.pause();
        music.currentTime = 0;

        finalScreen = false;

        MCsplashSc = true;
        mouseMode = false;
        keyboardMode = false;
        canvas.removeEventListener("click", rightClickFS);
      }

      function rightKeyFS() {
         if (keys[13]) { // Go to Splash Screen

            Run1 = true;
            Run2 = true;
            Run3 = true;
            Run4 = true;
            Run5 = true;
            Run6 = true;
            Run7 = true;
            Run8 = true;
            Run9 = true;
            Run10 = true;
            Run11 = true;
            Run12 = true;

             wellDoneKey.pause();
             wellDoneKey.currentTime = 0;
             music.pause();
             music.currentTime = 0;

             finalScreen = false;

             SetSplashKey = true;
             MCsplashSc = true;
             mouseMode = false;
             keyboardMode = false;
             removeEventListener("keydown", rightKeyFS);
         }
      }

    if (finalScreen) {

        if (colod) {
            ctx.fillStyle = "#c5f542";
        }

        if (white) {
            ctx.fillStyle = "white";
        }

        SplashScreenOn = true;
        
        if (En) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (togSpeech && mouseMode) {
            wellDoneMse.play();
        }
        if (togSpeech && keyboardMode) {
            wellDoneKey.play();
        }

        ctx.fillStyle = "blue";
        ctx.textAlign = "center"; 
        ctx.font = "90px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "70px Comic Sans MS";
        ctx.fillText("for completing the", w, 300);
        ctx.fillText("Match Cards!", w, 400);
        ctx.font = "50px Comic Sans MS";

        if (mouseMode) {
            ctx.fillText("Left click on your mouse", w, 500);
        }

        if (keyboardMode) {
            ctx.fillText("Press the Enter Key", w, 500);
        }

        ctx.fillText("To play again!", w, 580);
        }

        if (Ger) {
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "blue";
            ctx.textAlign = "center"; 
            ctx.font = "90px Comic Sans MS";
            ctx.fillText("Gut erledigt!", w, 200);
            ctx.font = "70px Comic Sans MS";
            ctx.fillText("zum Abschluss der", w, 300);
            ctx.fillText("Spielkarten!", w, 400);
            ctx.font = "35px Comic Sans MS";
            
            if (mouseMode) {
                if (togSpeech) {
                    wellDoneVoiceGer.play();
                }
                ctx.fillText("Klicken Sie mit der linken Maustaste", w, 500);
            }
            if (keyboardMode) {
                /*if (togSpeech) {
                    wellDoneVoiceGerKey.play();
                }*/
                ctx.fillText("Drücken Sie die Eingabetaste", w, 500);
            
            }

            ctx.fillText("Wieder zu spielen!", w, 580);
            }

        if (Rom) {
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            /*if (togSpeech) {
                wellDoneVoiceRom.play();
            }*/
            ctx.fillStyle = "blue";
            ctx.textAlign = "center"; 
            ctx.font = "90px Comic Sans MS";
            ctx.fillText("Bine făcut!", w, 200);
            ctx.font = "70px Comic Sans MS";
            ctx.fillText("pentru completarea", w, 300);
            ctx.fillText("Cărți de meci!", w, 400);
            ctx.font = "35px Comic Sans MS";
            if (mouseMode) {
                ctx.fillText("Faceți clic stânga pe mouse", w, 500);
                }
                if (keyboardMode) {
                ctx.fillText("Apăsați tasta Enter", w, 500);
                }
                ctx.fillText("Pentru a juca din nou!", w, 580);
            }

            if (Bul) {
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                /*if (togSpeech) {
                    wellDoneVoice.play();
                }*/
                ctx.fillStyle = "blue";
                ctx.textAlign = "center"; 
                ctx.font = "90px Comic Sans MS";
                ctx.fillText("Много добре!", w, 200);
                ctx.font = "70px Comic Sans MS";
                ctx.fillText("за завършване на", w, 300);
                ctx.fillText("Карти за мачове!", w, 400);
                ctx.font = "35px Comic Sans MS";
                if (mouseMode) {
                ctx.fillText("Щракнете с левия бутон върху мишката", w, 500);
                }
                if (keyboardMode) {
                ctx.fillText("Натиснете клавиша Enter", w, 500);
                }
                ctx.fillText("Да играя отново!", w, 580);
                }

                if (Grk) {
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    /*if (togSpeech) {
                        wellDoneVoice.play();
                    }*/
                    ctx.fillStyle = "blue";
                    ctx.textAlign = "center"; 
                    ctx.font = "90px Comic Sans MS";
                    ctx.fillText("Μπράβο!", w, 200);
                    ctx.font = "55px Comic Sans MS";
                    ctx.fillText("για την ολοκλήρωση του", w, 300);
                    ctx.fillText("Κάρτες αγώνα", w, 400);
                    ctx.font = "35px Comic Sans MS";
                    if (mouseMode) {
                    ctx.fillText("Αριστερό κλικ στο ποντίκι σας", w, 500);
                    }
                    if (keyboardMode) {
                    ctx.fillText("Πατήστε το πλήκτρο Enter", w, 500);
                    }
                    ctx.fillText("Για να παίξω ξανά!", w, 580);
                    }

                    if (Tuk) {
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        /*if (togSpeech) {
                            wellDoneVoice.play();
                        }*/
                        ctx.fillStyle = "blue";
                        ctx.textAlign = "center"; 
                        ctx.font = "90px Comic Sans MS";
                        ctx.fillText("Aferin!", w, 200);
                        ctx.font = "70px Comic Sans MS";
                        ctx.fillText("tamamlamak için", w, 300);
                        ctx.fillText("Maç Kartları", w, 400);
                        ctx.font = "35px Comic Sans MS";
                        if (mouseMode) {
                        ctx.fillText("Farenize sol tıklayın", w, 500);
                        }
                        if (keyboardMode) {
                        ctx.fillText("Enter Tuşuna basın", w, 500);
                        }
                        ctx.fillText("Tekrar oynamak için!", w, 580);
                        }

        KeyboardGame = false;
        n = 1;

        splashSpeech = true;
        splashSettings = true;
        playingGameMode = true;

       
        if (keyboardMode) {
            addEventListener("keydown", rightKeyFS);
        }

            

        if (mouseMode) {
            canvas.addEventListener("click", rightClickFS);
        }

    }

///// End of playGame function ////////////////////  
}

} // not setMenu


function animate() {

    if (bkMus) {
        music.play();
        //music.volume = 0.1;
    }

    if (!bkMus) {
        music.pause();
        music.currentTime = 0;
    }

    if (!volGameOff && !volLock) {
        //console.log("pauseOff is " + pauseOff);
        ctx.fillRect((canvas.width/2) - (w/2), 200, w, 150);
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText("Game is", w, 250); 
        ctx.fillText("Paused except", w, 290);  
        ctx.fillText("volume", w, 330);
    }
    
    
    if (volGameOff && volLock) {
        playGame();
    }
    
    
    if (!volDis) { // Removes vol controls from settings menu
        volControls();
        volumeSet();
    }

    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);
