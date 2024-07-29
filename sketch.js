let cor;
let CirculoX; //horizontal
let CirculoY; //vertical

function setup() {
  
  createCanvas(400, 400);// whidt x height
  background(color(100, 0, 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}


//circuloX = 0,0, 0
//circuloY = 300, 150, 50

function draw() {
  
  fill(cor);
 //console.log(círculoX.lerght);
  for(let contador in circuloX){
    console.log(contador);
    circle(circuloX[contador, circuloX[contador], 50]);
    circuloX[contador] += random(0, 3);
    circuloX[contador] += random(-3, 3);
  }
  
  circuloX[0] += random(0, 3);
  circuloX[0] += random(-3, 3);
  
  //circuloX[1]+= random(0, 3); 
  //circuloX[1]+= random(-3, 3);
  
  //circuloX[2]+= random(0, 3); 
  //circuloX[2]+= random(-3, 3);
  
  if(mouseIsPressed)
    cor= color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
