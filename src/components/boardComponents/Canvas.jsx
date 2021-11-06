// import tablero from '../img/MisterioBoard.jpg'

// const Canvas = () => {

// 	var canvas, context;
// 	var vertical = 20, horizontal = 20;
// 	var gw = 600 / horizontal;
// 	var gh = 600 / vertical;
// 	var posicion = { x: 0, y: 0 };
// 	window.onload = function () {
// 		canvas = document.getElementById('lienzo');
// 		context = canvas.getContext('2d');

// 		var myimg = new Image();
// 		myimg.src = tablero
// 		myimg.width = 600
// 		myimg.height = 600

// 		myimg.onload = function () {
// 			context.drawImage(myimg, 0, 0, 800, 800)
// 		}

// 		canvas.onmousemove = function (event) {
// 			posicion.x = Math.floor(event.clientX / gw);
// 			posicion.y = Math.floor(event.clientY / gh);

// 			fillBackground();
// 			// drawSquare(posicion.x, posicion.y, "blue");
// 		}

// 		canvas.onmouseup = function (event) {
// 			drawSquare(posicion.x, posicion.y, "red");
// 			console.log("x: " + posicion.x + ", y: " + posicion.y)
// 		}

// 		fillBackground();
// 	}

// 	function drawSquare(x, y, color) {
// 		context.fillStyle = color;
// 		var rx = x * gw;
// 		var ry = y * gh;
// 		context.fillRect(rx, ry, gw, gh);
// 	}

// 	function fillBackground() {
// 		context.fillStyle = 'transparent';
// 		context.fillRect(0, 0, 800, 800);
// 	}

// 	return (
// 		<canvas id="lienzo" width="800" height="800">
// 		</canvas>

// 	)
// }

// export default Canvas
