import Canvas from "./Canvas"
import tablero from '../img/MisterioBoard.jpg'



const Board = () => {
    return (
        <div className="board-container">
            <div className="canvas-container">
                {/* <Canvas /> */}
            </div>
            <div className="img-container">
                <img src={tablero}
                    alt="Board"
                    height="600"
                    width="600"
                />
            </div>
        </div>
    )
}

export default Board

