const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var player;
var computerPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
   player = new Player(300, playerBase.body.position.y - 140, 50, 150);

   computerBase = new ComputerBase(playerBase.body.position.x + 600, /*random(450, height - 300)*/playerBase.body.position.y, 180, 150);
   computerPlayer = new Player(900, computerBase.body.position.y - 140, 50, 150);
 }  

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   player.display();
   computerBase.display();
   computerPlayer.display();


   //display Player and computerplayer


}
