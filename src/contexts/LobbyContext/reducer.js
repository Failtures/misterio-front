import {
  new_lobby,
  new_player,
  joined_lobby,
  match_started,
  get_hand,
  roll_dice,
  player_position,
  turn_passed,
  question,
  reset_question,
  suspect_response,
  reset_suspect_response,
  new_message,
  failed,
} from "./actions";
import { colors } from "@/utils/colors";

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
          new_player_positions.push({
            ...player_position.player_position[player_index],
            average_x,
            average_y,
            color: colors[player_index],
            square: "Regular",
          });
        }
      });

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

    case player_position: {
      const { pos_x, pos_y, square } = action.payload;
      const player_index = state.player_positions.findIndex((player) => player.player_name === state.turn);
      const area = coordsHotspots.find((area) => area.pos_x === pos_x && area.pos_y === pos_y);
      const [x1, y1, x2, y2] = area.coords;
      const average_x = (x1 + x2) / 2;
      const average_y = (y1 + y2) / 2;

      const update_player = {
        ...state.player_positions[player_index],
        pos_x: pos_x,
        pos_y: pos_y,
        square,
        average_x,
        average_y,
      };

      const update_players = [...state.player_positions];
      update_players[player_index] = update_player;

      return {
        ...state,
        player_positions: update_players,
      };
    }

    case turn_passed:
      return { ...state, turn: action.payload.current_turn };

    case question:
      return { ...state, question: { ...action.payload } };

    case reset_question:
      return { ...state, question: null };
      reset_suspect_response;
    case suspect_response:
      console.log("CARD:", action.payload);
      return { ...state, hand: [...state.hand, { name: action.payload.card }], suspect_response: action.payload.card };

    case reset_suspect_response:
      return { ...state, suspect_response: null };

    case new_message:
      return { ...state, chat: [...state.chat, action.payload] };

    case failed:
      return { ...state, ...action.payload };
    default:
      console.log("ULTIMO CASO:", action.type);
  }
};
