var canvas=document.querySelector("#canvas");
var ctx=canvas.getContext("2d");
//rect
ctx.fillStyle="#000";
ctx.fillRect(150,150,100,100);
ctx.fillStyle="#f00";
ctx.fillRect(200,200,100,100);
ctx.clearRect(200,200,50,50);
ctx.strokeStyle="#000";
ctx.strokeRect(10.5,10.5,100,100);
ctx.fillStyle="#000";
ctx.fillRect(20,20,80,80);
ctx.fillStyle="#fff";
ctx.fillRect(30,30,60,60);
ctx.fillStyle="#000";
ctx.fillRect(35,35,50,50);
ctx.fillStyle="#fff";
ctx.fillRect(45,45,30,30);
ctx.fillStyle="#000";
ctx.fillRect(50,50,20,20);
ctx.clearRect(0,0,1000,500);
//line
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(50,0);
ctx.lineTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(150,150);
ctx.lineTo(250,150);
ctx.lineTo(250,250);
ctx.lineTo(350,250);
ctx.lineTo(350,350);
ctx.lineTo(450,350);
ctx.stroke();
ctx.clearRect(0,0,1000,500);
//src
ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2);
ctx.moveTo(270,200);
ctx.arc(200,200,70,0,Math.PI);
ctx.moveTo(170,160);
ctx.arc(160,160,10,0,Math.PI*2);
ctx.moveTo(240,160);
ctx.arc(230,160,10,0,Math.PI*2);
ctx.stroke();
ctx.clearRect(0,0,1000,500);
//bezier
ctx.beginPath();
ctx.moveTo(149,229);
ctx.bezierCurveTo(88,230,81,104,140,158);
ctx.moveTo(149,229);
ctx.bezierCurveTo(199,230,235,104,140,158);
ctx.stroke();
ctx.clearRect(0,0,1000,500);

//shadow
ctx.shadowOffsetX=2;
ctx.shadowOffsetY=2;
ctx.shadowBlur=2;
ctx.shadowColor="rgba(0,0,0,0.8)";
//画布与程序的结合
for(var i=0;i<1000;i++){
	ctx.beginPath();
	var xinx=Math.floor(Math.random()*1000);
	var xiny=Math.floor(Math.random()*1000);
	var r=Math.floor(Math.random()*50+2);
	ctx.fillStyle="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
	ctx.arc(xinx,xiny,r,0,Math.PI*2);
	ctx.fill();
}
ctx.clearRect(0,0,1000,500);

var x=0,y=20,sheed=1;
var draw=function(){
	ctx.clearRect(0,0,1000,500);
	x+=sheed;
	if(x>=1000){
		sheed=-1;
	}
	if(x<=00){
		sheed=1;
	}
	ctx.beginPath();
	ctx.arc(x,y,10,0,Math.PI*2);
	ctx.fill();
}
setInterval(draw,1);
//画布叠加
var canvas1=document.querySelector("#canvas1");
var ctx1=canvas1.getContext("2d");
for(var i=0;i<10;i++){
	ctx1.fillRect(i*150,0,100,100);
}
