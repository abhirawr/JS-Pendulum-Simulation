//initializing these lmao
var font;
var state = 1;

//initializing DOM variables globally
var start;
var stop;
var ampSlider;
var massSlider;
var lenSlider;
var realismCheck;

//loading the font before the program starts
function preload() {
  font = loadFont('font.otf');
}

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  
  //creating buttons and sliders
  start = createButton('start');
  stop = createButton('stop');
  ampSlider = createSlider(-90, 0, -45, 1);
  massSlider = createSlider(10, 90, 50, 1);
  lenSlider = createSlider(10, 300, 145, 1);
  realismCheck = createCheckbox('air resistance', false);

  //initializing position of the buttons and sliders 
  start.position(50, 50);
  stop.position(50,50);
  ampSlider.position(0,height - 40);
  massSlider.position((width / 2) - 50,height - 40);
  lenSlider.position(width - 140, height - 40);
  realismCheck.position(width - 110, 30);
  
}

//changeState function that changes the value of the state variable
function changeState() {
  state *= -1;
}

function draw() {
  if(state == 1) {
    stop.hide();
    
    start.show();
    ampSlider.show();
    massSlider.show();
    lenSlider.show();
    realismCheck.show();

    
    textFont(font, 35);
    background(200);
    text('amplitude = ' + ampSlider.value() * -1 + '°', 10, height - 50);
    
    text('mass = ' + massSlider.value(), width / 2 - 50, height - 50);

    text('length = ' + lenSlider.value(), width - 185, height - 50);
    pendulum = new pend(lenSlider.value(), ampSlider.value(), massSlider.value());
    pendulum.show();
    
    start.mousePressed(changeState)
  }
  if(state == -1) {
    start.hide();
    ampSlider.hide();
    massSlider.hide();
    lenSlider.hide();
    realismCheck.hide();
    stop.show();
    
    
    if(realismCheck.checked() == true) {
      background(200);
      pendulum.show();
      pendulum.move(true);
    } 
    else {
      background(200);
      pendulum.show();
      pendulum.move(false);
    }
    
    stop.mousePressed(changeState);
  }
}
