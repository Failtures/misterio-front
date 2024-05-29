import { createContext, useContext, useEffect, useReducer, useMemo } from "react";
import { initialState } from "./initialState";
import { lobbyReducer } from "./reducer";
import { useNavigate } from "react-router-dom";
import useWebSocket from "@/hooks/useWebSocket";
import { getPlayerName } from "@/redux/user/utils";

const LobbyContext = createContext();
export const useLobbyContext = () => useContext(LobbyContext);

export const LobbyProvider = ({ children }) => {
  const [lobby, dispatch] = useReducer(lobbyReducer, initialState);
  const { sendMessage, setOnMessageHandler } = useWebSocket(import.meta.env.VITE_WS_URL);
  const player_name = getPlayerName();
  const navigate = useNavigate();

  useEffect(() => {
    setOnMessageHandler((message) => {
      const { action, ...rest } = message;

      if (action === "match_started") {
        sendMessage({ action: "match_get_hand", player_name, match_name: rest.match.name });
      }
      if (action === "get_hand") {
        navigate(`/game/${lobby.name}`);
      }

      dispatch({ type: action, payload: rest });
    });
  }, [dispatch, sendMessage, lobby]);

  const memoizedValue = useMemo(() => {
    return { lobby, dispatch, sendMessage };
  }, [lobby, dispatch, sendMessage]);

  return <LobbyContext.Provider value={memoizedValue}>{children}</LobbyContext.Provider>;
};
export default LobbyProvider;
