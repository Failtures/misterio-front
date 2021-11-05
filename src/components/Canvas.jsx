

const Canvas = () => {

    var canvas, context;
		var vertical = 19, horizontal = 19;
		var gw = 600 / horizontal;
		var gh = 600 / vertical;
		var posicion = {x: 0, y: 0};
		window.onload = function() {
			canvas = document.getElementById('lienzo');
			context = canvas.getContext('2d');

			canvas.onmousemove = function(event) {
				posicion.x = Math.floor(event.clientX / gw);
				posicion.y = Math.floor(event.clientY / gh);
				
				fillBackground();
				drawSquare(posicion.x, posicion.y, "blue");
			}

			canvas.onmouseup = function(event) {
				drawSquare(posicion.x, posicion.y, "red");
				console.log("x: " + posicion.x + ", y: " + posicion.y)
			}

			fillBackground();
		}

		function drawSquare(x, y, color) {
			context.fillStyle = color;
			var rx = x * gw;
			var ry = y * gh;
			context.fillRect(rx, ry, gw, gh);
		}

		function fillBackground() {
			context.fillStyle = '#000';
			context.fillRect(0, 0, 600, 600);
		}

    return (
        <div>
            <canvas id="lienzo" width="600" height="600">
			</canvas>
        </div>
    )
}

export default Canvas
