var canvas=document.querySelector("#canvas");
var ctx=canvas.getContext("2d");
//rect
ctx.save();
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

ctx.save();
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
//setInterval(draw,1);
ctx.restore();

ctx.clearRect(0,0,1000,500);
//画布叠加
//var canvas1=document.querySelector("#canvas1");
//var ctx1=canvas1.getContext("2d");
for(var i=0;i<10;i++){
	//ctx1.fillRect(i*150,0,100,100);
}
//ctx1.clearRect(0,0,1000,500);
ctx.clearRect(0,0,1000,500);

ctx.restore();




/////ctx.translate   ctx.save()   ctx.restore() ctx.rotate()
ctx.save();
ctx.beginPath();
ctx.translate(300,300);
ctx.arc(0,0,30,0,Math.PI*2);
for(var i=0;i<12;i++){
	ctx.rotate(Math.PI/6);
	ctx.moveTo(110,0);
	ctx.arc(100,0,10,0,Math.PI*2);
}
ctx.stroke();
ctx.restore();



ctx.save();
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,500);
ctx.moveTo(100,100);
ctx.lineTo(500,100);
ctx.stroke();

ctx.translate(100,100);
ctx.rotate(Math.PI/3);
ctx.fillRect(0,0,30,30);
ctx.fill();

ctx.fillRect(70,0,30,30);	
ctx.restore();

ctx.clearRect(0,0,1000,600);














///////watch
//ctx.save();
/*var x,i=0;
setInterval(function(){
	x=Math.PI/30*i;
	i++;
	drawclock();
},1000)*/
//ctx.restore();
var drawclock=function(){
	var d=new Date();
      var s=d.getSeconds();
      var m=d.getMinutes();
      var h=d.getHours();
	ctx.clearRect(0,0,1000,600);
      //保存一个干净的画布状态；
      ctx.save();
      
     //移动画布圆点在中心
     ctx.translate(500,250);
    //画做外层表盘
    ctx.save();

    ctx.strokeStyle="blue";
    ctx.lineWidth="8";
    ctx.shadowOffsetX=-2;
    ctx.shadowOffsetY=-2;
    ctx.shadowBlur=2;
    ctx.shadowColor="#000";
    ctx.beginPath();
    ctx.arc(0,0,200,0,Math.PI*2);
    ctx.stroke();

    ctx.restore();
      //画时间刻度
      ctx.save();
      ctx.lineCap="round";
      for(var i=1;i<61;i++){
      	ctx.rotate(Math.PI/30);
      	ctx.beginPath();
      	if(i%5==0){
      		ctx.lineWidth=5;
      		ctx.moveTo(157,0);
      	}
      	else{
      		ctx.lineWidth=2;
      		ctx.moveTo(177,0);
      	}
      	ctx.lineTo(187,0);
      	ctx.stroke();
      }
      ctx.restore();
 //画时针
     ctx.save();

     ctx.rotate((360*((h*3600+m*60+s)/(12*3600)))/180*Math.PI);
     ctx.beginPath();
     ctx.lineWidth=10;
     ctx.moveTo(0,20);
     ctx.lineTo(0,-100);
     ctx.stroke();

     ctx.restore();
       //画分针
     ctx.save();

     ctx.rotate((360*(m*60+s)/3600)/180*Math.PI);
     ctx.beginPath();
     ctx.lineWidth=5;
     ctx.moveTo(0,20);
     ctx.lineTo(0,-120);
     ctx.stroke();

     ctx.restore();
      //画秒针
      ctx.save();

      ctx.rotate(Math.PI/30*s);
      ctx.beginPath();
      ctx.lineWidth=2;
      ctx.strokeStyle="red";
      ctx.moveTo(0,20);
      ctx.lineTo(0,-160);
      ctx.stroke();

      ctx.restore();

   
    
	/////复原画布的干净状态
	ctx.restore();	
	requestAnimationFrame(drawclock);
}

	requestAnimationFrame(drawclock);











/*var aa=function(){
	console.log(1);
	requestAnimationFrame(aa);
}
requestAnimationFrame(aa);*/
