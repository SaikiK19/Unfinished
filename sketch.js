const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var walking
var thunder
var maxDrops = 100
var base
var bruce
var canvas
var drops
var umbrella
var test

function preload(){
    walking = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
    thunder = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   Engine.run(engine);
   canvas = createCanvas(1000,2400)
   bruce = createSprite(500,2000,50,50)
   base = createSprite(500,200,50,50)
   base.addAnimation("thunder",thunder)
   bruce.addAnimation("walking",walking)
   umbrella = new Umbrella(500,1820,150)
   test = new Drops(495,500)
   //for(var i=0;i<maxDrops;i++){
    //drops.push(new createDrops(random(0,400),random(0,400)))
//}
   }

function draw(){
    background(0)
    test.display()
    //umbrella.display()
    drawSprites()
}   

