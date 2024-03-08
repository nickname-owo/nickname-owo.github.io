// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 10, y = 10, dx = 10, dy = 10, r = 10, color = "#eee" ;
let move =false;

// 畫圓形
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 按下按鍵時觸發
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) 
{
	if(e.key == "d")        x += dx;
	else if(e.key == "a")    x -= dx;
    else if(e.key == "w")      y -= dy;
	else if(e.key == "s")    y += dy;
}

// TODO: 滑鼠移動(mousemove)時觸發，改變位置(x, y)為滑鼠目前位置(e.clientX, e.clientY)
// ...

document.addEventListener("mousedown", mousedownHandler);
function mousedownHandler(e) 
{
  move = true;
  x=e.clientX-canvas.offsetLeft;
  y=e.clientY-canvas.offsetTop;
  color = "#"+Math.floor(Math.random()*16777215).toString(16);
}
document.addEventListener("mouseup", mouseupHandler);
function mouseupHandler(e) 
{
  move = false;
}
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(e) 
{
  if (move == true)
  {
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
  }
  
}

// 更新畫布
function draw() 
{	
    drawBall();
    requestAnimationFrame(draw);
}
draw();