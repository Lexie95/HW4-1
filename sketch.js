//'#FEB7E2');//pink
//'#1D80F9');//blue
//'#113683');//navy
//'#FDC920');//yellow
//'#C1C4D2');//grey
//'#EAD2F1');//lavendar

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  background('#113683');//navy
  translate(width/2,height/2);
  
  rotate(-90);
  
  
  if(hour()>12){
    var nhour=hour()-12;
  }else {
    var nhour=hour();
  }

  hpara = nhour * 30;
  mpara = minute()*6;
  spara = second()*6
  
  var diameter=0;
  if(width>height){
    diameter=height;
  } else {
    diameter=width;
  }
  
  clockHand(hpara,diameter/6,diameter/6,'#EAD2F1');//lavendar
  clockHand(mpara,diameter/2.6,diameter/30,'#1D80F9');//blue
  clockHand(spara,diameter/2.25,diameter/110,'#FDC920');//yellow

}
  
function clockHand(para,size,weight,color){
  
  strokeCap(SQUARE);
  fill(225,225,225,10);
  strokeWeight(weight);
  stroke(color);
  arc(0,0,size,size,0,para);
  line()
  
  stroke(0,0,0,20);
  ellipse(0,0,size,size);
  ellipse();
}
  
 
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}