import ImageMapper from "react-img-mapper";
import { coordsHotspots } from "../../coords";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { getPlayerName } from "@/redux/user/utils";

const Board = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const [imageLoaded, setImageLoaded] = useState(false);
  const player_name = getPlayerName();
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = "/MisterioBoard.jpeg";
  }, []);

  const handleCellClick = (area) => {
    setSelectedArea(area);
  };

  useEffect(() => {
    if (!selectedArea || player_name !== lobby.turn) {
      return;
    }

    const { pos_x, pos_y } = selectedArea;
    let takes = { action: "match_move", match_name: lobby.name, pos_x, pos_y };
    sendMessage(takes);

    setSelectedArea(null);
  }, [selectedArea]);

  return (
    <div style={{ position: "relative" }}>
      {imageLoaded ? (
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
      ) : (
        <Skeleton
          variant="rectangular"
          width={950}
          height={950}
          animation="wave"
          sx={{
            backgroundColor: "#242323",
          }}
        />
      )}

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
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default Board;
