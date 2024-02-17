import { useSelector } from "react-redux";

export const getPlayerName = () => useSelector((state) => state.user.player_name);
