var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var isSquare = true;

function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(50, 50, 100, 100);
}

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(150, 150, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
}

function changeShape() {
  if (isSquare) {
    drawCircle();
    isSquare = false;
  } else {
    drawSquare();
    isSquare = true;
  }
}

drawSquare();
