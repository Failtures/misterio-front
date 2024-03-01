import ImageMapper from "react-img-mapper";
import { coordsHotspots } from "../../coords";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { useState } from "react";

const Board = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);

  const handleCellClick = (area) => {
    const { pos_x, pos_y } = area;
    const { coords } = area;
    const [x1, y1, x2, y2] = coords;

    setPosX(x1 + x2 / 2);
    setPosY(y1 + y2 / 2);

    let takes = { action: "match_move", match_name: lobby.name, pos_x, pos_y };
    sendMessage(takes);
  };

  return (
    <div style={{ position: "relative" }}>
      <ImageMapper
        src="/MisterioBoard.jpeg"
        active={false}
        map={{
          name: "tablero-map",
          areas: coordsHotspots,
        }}
        width={950}
        height={950}
        onClick={handleCellClick}
      />

      {lobby?.player_positions.map((player, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: player.average_x - 25 / 2,
            top: player.average_y - 25 / 2,
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            backgroundColor: player.color,
            opacity: 0.91,
            zIndex: 99,
          }}
        />
      ))}
      {/*   <div
        style={{
          position: "absolute",
          left: posX,
          top: posY + 50,
          zIndex: 100,
        }}
      >
        {lobby.info !== "Already rolled dice this turn" && lobby.info}
      </div> */}
    </div>
  );
};

export default Board;
