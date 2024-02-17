import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import { coordsHotspots } from "../../coords";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";

const Board = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const { lobby } = useLobbyContext();

  const handleCellClick = (area, index) => {
    const [x1, y1, x2, y2] = area.coords;
    const centerX = (x1 + x2) / 2;
    const centerY = (y1 + y2) / 2;

    setSelectedCell([centerX, centerY]);
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

      {lobby?.player_positions.map((player) => (
        <div
          style={{
            position: "absolute",
            left: player.average_x - 25 / 2,
            top: player.average_y - 25 / 2,
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            backgroundColor: "red",
            opacity: 0.5,
            zIndex: 999,
          }}
        />
      ))}
    </div>
  );
};

export default Board;
