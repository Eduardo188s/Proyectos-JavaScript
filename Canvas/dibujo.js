const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.font = "30px serif";
ctx.fillText(`**Pacman**`, 120, 30);

ctx.fillStyle='yellow';
ctx.beginPath();
ctx.ellipse(200,150,100,100,0,0, Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.moveTo(330,100);
ctx.lineTo(1060,460);
ctx.lineTo(150,150);
ctx.closePath();
ctx.fillStyle = 'White';
ctx.fill();

ctx.fillStyle='black';
ctx.beginPath();
ctx.arc(220,90,10,0, Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.fillStyle='White';
ctx.beginPath();
ctx.arc(225,86,2,0, Math.PI*2);
ctx.stroke();
ctx.fill();

/*ctx.fillStyle='orange';
ctx.beginPath();
ctx.arc(215,150,11,0, Math.PI*2);
ctx.stroke();
ctx.fill();*/

ctx.fillStyle='blue';
ctx.beginPath();
ctx.arc(270,150,11,0, Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.fillStyle='White';
ctx.beginPath();
ctx.arc(270,150,11,5, Math.PI*2);
ctx.stroke();
ctx.fill();


ctx.fillStyle='green';
ctx.beginPath();
ctx.arc(320,150,11,0, Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(320,150,11,5, Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.fillStyle='purple';
ctx.beginPath();
ctx.arc(380,150,11,0, Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(380,150,11,5, Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 250, 100, 20);

ctx.strokeStyle = "blue";
ctx.strokeRect(150, 250, 100, 20);

ctx.strokeStyle = "blue";
ctx.strokeRect(280, 250, 100, 20);

ctx.strokeStyle = "blue";
ctx.strokeRect(150, 290, 20, 100);