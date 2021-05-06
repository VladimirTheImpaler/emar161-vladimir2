var kletka;
var madworld;
var nurnberg;
var saddest;

let detailXK;
let detailXM;
let detailXN;
let detailXS;

var amp;

let play;
let glitch;

///

var songmode = 0;
var show = 0;

///

x = 50

///

right = 213
up = 0

let button;
let options = ["inside the cage", "outside the cage"];
let options2 = ["be senseless", "be reminiscent"];


//////////////////////////////////////


function preload() {
  kletka = loadSound('kletka.mp3');
  madworld = loadSound('madworld.mp3');
  nurnberg = loadSound('nurnberg.mp3');
  saddest = loadSound('saddest.mp3');

  cassette = loadSound('cassette.mp3');

  ///

  play = loadImage('playimage.jpg');
  glitch = loadImage('glitch.jpg');

  test1 = loadImage('test1.jpg');
  test2 = loadImage('test2.jfif');
  test3 = loadImage('test3.jpg');
  test4 = loadImage('test4.jpg');

  //kletka
  kiss = loadImage('kiss.gif');
  eyehand = loadImage('eyehand.gif');
  door = loadImage('door.png');

  rain = loadImage('rain.gif');
  hands = loadImage('hands.gif');
  orb = loadImage('orb.gif');
  eyecry = loadImage('eyecry.gif');
  stair = loadImage('stair.jpg');
  cage = loadImage('cage.png');

  //madworld
  darko = loadImage('darko.jpg');
  mask = loadImage('mask.gif');
  MWtitle = loadImage('MWtitle.png');
  time = loadImage('time.jpg');

  //nurnberg
  store = loadImage('store.gif');

  mem1 = loadImage('mem1.jpg');
  mem2 = loadImage('mem2.jpg');
  mem3 = loadImage('mem3.jpg');
  mem4 = loadImage('mem4.jpg');
  mem5 = loadImage('mem5.jpg');
  mem6 = loadImage('mem6.jpg');

  stamp = loadImage('stamp.jfif');
  plain = loadImage('plane.JPG');


  //saddest
  eyes1 = loadImage('eyes.png');
  eyes2 = loadImage('eyes2.png');
  eyes3 = loadImage('eyes3.png');

  melan = loadImage('melen back.jpg');

  FONT = loadFont('OSKAL.otf');
  FONT2 = loadFont('bauhaus.ttf');


}


//////////////////////////////////////


function setup() {
  createCanvas(600, 400); //WEBGL
  translate(-600, -400); //1440, 730

  amp = new p5.Amplitude();

  //volume control
  kletka.setVolume(0.11);
  madworld.setVolume(0.18);
  nurnberg.setVolume(0.2);
  saddest.setVolume(0.13);

  //background(0);

  buttonK = createButton("play: Клетка");
  buttonK.mousePressed(togglePlayingK);

  buttonM = createButton("play: Mad World");
  buttonM.mousePressed(togglePlayingM);

  buttonN = createButton("play: Biessensoŭnasć");
  buttonN.mousePressed(togglePlayingN);

  buttonS = createButton("play: Saddest Smile");
  buttonS.mousePressed(togglePlayingS);

  /////

  //start-up sound
  if (songmode == 0) {

    cassette.play();
  }

}


///////////////////////////////////////


function draw() {

  ///BEGIN EXPERIENCE

  var vol = amp.getLevel();
  //vol = opacity;

  if (vol == 0) {
    show = 200
  } else {
    show = 0
  }

  if (songmode == 0) {

    background(0);

    noTint();
    image(play, 0, 0, 600, 400);
    tint(255, 40);
    image(glitch, 0, 0, 600, 400);

    ///STARTUP WARNING
    textAlign(CENTER);
    fill("WHITE");
    textFont(FONT2);
    textSize(15);
    text('- to properly calibrate player upon first initiation-', width / 2, 90 + (0));
    text('- set all songs to play, then set all songs to stop -', width / 2, 90 + (20));
    text('- wait for sound cue that cassette has finished digesting -', width / 2, 90 + (20 * 2));
    text('- failure to comply will result in immediate termination -', width / 2, 90 + (20 * 3));

    fill("BLACK");
    textSize(37);
    text('SCP-1248 : Testing Log 1251 - A', width / 2, 40);

    textAlign(LEFT);


  } else if (songmode == 1) { /// K L E T K A

    //trying to change on select with drop down
    if (button.value() == 'inside the cage') {
      insideC();
    }
    if (button.value() == 'outside the cage') {
      outsideC();
    }


  } else if (songmode == 2) { /// M A D W O R L D

    //background
    noTint();
    image(darko, 0, 0, 600, 400);

    //gif
    push();
    frameRate(millis(339 / 18));
    translate(340, 165);
    rotate(PI);
    tint(vol * 5000, detailXM.value());
    image(mask, 0, 0, 553 / 1.5, 250 / 1.5);
    pop();

    //words
    tint(255, vol * 400);
    image(MWtitle, 0, -30, 600, 400);

    //endscreen
    tint(255, show);
    image(time, 0, -100, 600, 600);

    //torus shape
    // push();
    // translate(0, 0 100);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // torus(30, 15);
    // pop();

  } else if (songmode == 3) { /// N U R N B E R G

    image(store, 0, 0, 600, 400)

    if (detailXN.value() == 'be senseless') {
      sensFunc();
    }
    if (detailXN.value() == 'be reminiscent') {
      remFunc();
    }


  } else if (songmode == 4) { /// S A D D E S T

    tint(255, 255);
    image(test4, 0, 0, 600, 400)

    frameRate(20);

    x = x - 35

    fill("WHITE");
    textFont(FONT);
    textSize(17);
    text('           PEOPLE SAY THEY LIKE ME - BUT HOW CAN I BELIEVE - WHEN THEY ALSO LIKE YOU - AND YOURE EXACTLY THE ONE I HATE -   - PEOPLE SOMETIMES SAY - THAT IM QUITE CREATIVE - BUT ITS SO CONFUSING - THEY SAY IT TO YOU AS WELL -                                                                                                                               - I WILL STAY FOREVER ALONE - IN MY DEEP AND DARK THOUGHTS - IN THE CORNER OF THE BAR - WAITING FOR A GOOD TALK . . . ', x, 207);


    //backgeound
    tint(255, detailXS.value());
    image(melan, 0, 0, 600, 400);

    //bottomside
    tint(255, detailXS.value());
    image(eyes2, 150, 215, 300, 180);

    //leftside
    push();
    tint(255, detailXS.value());
    angleMode(RADIANS);
    translate(360, 310);
    rotate(PI / 1.6);
    image(eyes3, -150, 150, 300, 300);
    pop();

    //rightside
    push();
    tint(255, detailXS.value());
    angleMode(DEGREES);
    translate(240, 90);
    rotate(-68);
    image(eyes3, -150, 150, 300, 300);
    pop();

    //topside
    push();
    angleMode(RADIANS);
    tint(255, detailXS.value());
    translate(460, 197);
    rotate(PI);
    image(eyes1, 0, 0, 320, 180);
    pop();


  }

}


//////////////////////////////////////


//the function that is triggered each time the button is pressed! It "loops" and "pauses" our song. 
function togglePlayingK() {
  if (!kletka.isPlaying()) {
    cassette.stop();
    kletka.play();

    kletkavideo();

    buttonK.html("stop: Клетка");
  } else {

    songmode = 0;
    cassette.play();

    kletka.stop();


    button.hide();
    detailXK.hide();
    detailXM.hide();
    detailXN.hide();
    detailXS.hide();

    buttonK.html("play: Клетка");
  }
}

function togglePlayingM() {
  if (!madworld.isPlaying()) {
    cassette.stop();
    madworld.play();

    madvideo();

    buttonM.html("stop: Mad World");
  } else {

    songmode = 0;
    cassette.play();

    madworld.stop();

    button.hide();
    detailXK.hide();
    detailXM.hide();
    detailXN.hide();
    detailXS.hide();

    buttonM.html("play: Mad World");
  }
}

function togglePlayingN() {
  if (!nurnberg.isPlaying()) {
    cassette.stop();
    nurnberg.play();

    nurnvideo();

    buttonN.html("stop: Biessensoŭnasć");
  } else {

    songmode = 0;
    cassette.play();

    nurnberg.stop();

    button.hide();
    detailXK.hide();
    detailXM.hide();
    detailXN.hide();
    detailXS.hide();

    buttonN.html("play: Biessensoŭnasć");
  }
}

function togglePlayingS() {
  if (!saddest.isPlaying()) {
    cassette.stop();
    saddest.play();


    x = 50

    sadvideo();

    buttonS.html("stop: Saddest Smile");
  } else {

    songmode = 0;
    cassette.play();

    saddest.stop();

    button.hide();
    detailXK.hide();
    detailXM.hide();
    detailXN.hide();
    detailXS.hide();


    buttonS.html("play: Saddest Smile");
  }
}

//////////////////////////////////////

function kletkavideo() {
  songmode = 1

  button = createSelect();
  button.position(0, 440);
  for (let i = 0; i < options.length; i++)
    button.option(options[i]);
  button.selected('there is a cage');

  //slider creation
  detailXK = createSlider(120, 600, 120); //rangemin,rangemax, start 
  detailXK.position(0, height + 20);
  detailXK.style('width', '300px');

}

function insideC() {

  detailXK.show();

  image(test1, 0, 0, 600, 400);

  tint(255, 40);
  image(stair, 0, 0, 600, 400);

  tint(255, 130);
  image(kiss, 0, 0, 600, 400);

  tint(255, 30);
  image(eyehand, -30, 0, 600, 400);

  tint(90, 255);
  imageMode(CENTER);
  image(door,
    370, 200,
    detailXK.value() * 7,
    detailXK.value() * 4);
  imageMode(CORNER);

}

function outsideC() {

  detailXK.hide();

  background(0);
  tint(255, 140);
  image(stair, 0, 0, 600, 400);

  tint(255, 100);
  image(rain, 0, 0, 600, 400);
  image(rain, 20, -40, 620, 400);

  tint(255, 255);
  image(hands, 50, 200, 500, 200);
  tint(255, 255);
  image(orb, 200, 0, 200, 200);
  image(eyecry, 207, -35, 190, 190);

  right = right + 0.25 / 3
  up = up - 1 / 2
  image(cage, right, up, 170, 200);

  //if (up == -220) { right = 213 ; up = 0 }
}

function madvideo() {
  songmode = 2

  //slider creation
  detailXM = createSlider(0, 255, 15); //rangemin,rangemax, start 
  detailXM.position(0, height + 20);
  detailXM.style('width', '300px');

}

function nurnvideo() {
  songmode = 3

  detailXN = createSelect();
  detailXN.position(0, 440);
  for (let i = 0; i < options2.length; i++)
    detailXN.option(options2[i]);
  detailXN.selected('be senseless');

}

function sensFunc() {

}

function remFunc() {

  var vol = amp.getLevel();

  tint(255, vol * 100);
  image(mem1, 5, 5, 200, 200); //shower
  image(mem5, 440, 215, 150, 180); //painting
  tint(255, vol * 200);
  image(mem2, 170, 210, 250, 250); //cart
  image(mem6, 320, 4, 290, 250); //girl
  tint(255, vol * 300);
  image(mem3, 140, -30, 250, 250); //roof Tpose
  image(mem4, 5, 150, 170, 250); //hallway

}


function sadvideo() {
  songmode = 4

  //slider creation
  detailXS = createSlider(0, 255, 220); //rangemin,rangemax, start 
  detailXS.position(0, height + 20);
  detailXS.style('width', '300px');

}