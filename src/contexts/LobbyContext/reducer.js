import {
  new_lobby,
  new_player,
  joined_lobby,
  match_started,
  get_hand,
  roll_dice,
  turn_passed,
  new_message,
} from "./actions";

import { coordsHotspots } from "@/pages/Game/coords";

export const lobbyReducer = (state, action) => {
  switch (action.type) {
    case new_lobby:
      return { ...state, ...action.payload.lobby };

    case new_player:
      return {
        ...state,
        current_players: state.current_players + 1,
        players: [...state.players, action.payload.player_name],
      };

    case joined_lobby:
      return { ...state, ...action.payload.lobby };

    case match_started: {
      const { current_players, host } = state;
      const { name, players, turn, player_position } = action.payload.match;

      const new_player_positions = [];

      coordsHotspots.forEach((area) => {
        const player_index = player_position.player_position.findIndex(
          (player) => player.pos_x === area.pos_x && player.pos_y === area.pos_y
        );
        if (player_index !== -1) {
          const [x1, y1, x2, y2] = area.coords;
          const average_x = (x1 + x2) / 2;
          const average_y = (y1 + y2) / 2;
          new_player_positions.push({ ...player_position.player_position[player_index], average_x, average_y });
        }
      });

      console.log(new_player_positions);

      console.log("NEW PLAYER POSITIONS:", new_player_positions);

      return {
        name,
        host,
        current_players,
        player_positions: new_player_positions,
        players,
        turn,
        chat: action.payload.chat,
      };
    }

    case get_hand:
      return { ...state, ...action.payload };

    case roll_dice:
      return { ...state, ...action.payload };

    case turn_passed:
      return { ...state, turn: action.payload };

    case new_message:
      return { ...state, chat: [...state.chat, action.payload] };

    default:
      console.log("ULTIMO CASO:", action.type);
  }
};
