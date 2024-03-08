import Text from "@/components/Text/Text";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { Container, Table, TableHead, TableBody, TableRow, TableCell, TableRowHead } from "./ListGames.styled";
import { useEffect, useState } from "react";
import { getLobbies } from "@/services/services";
import { getPlayerName } from "@/redux/user/utils";

const PartidasTable = () => {
  const { sendMessage } = useLobbyContext();
  const [games, setGames] = useState([]);
  const player_name = getPlayerName();

  const getListGames = async () => {
    const response = await getLobbies();
    setGames(response.data.lobbies);
  };

  const joinLobby = (lobby_name) => {
    sendMessage({ action: "lobby_join", player_name, lobby_name });
  };

  useEffect(() => {
    getListGames();
  }, []);

  return (
    <Container>
      <Text color="primary" fontWeight="bold" fontSize="medium">
        Lista de partidas
      </Text>
      <Table>
        <TableHead>
          <TableRowHead>
            <TableCell>Nombre</TableCell>
            <TableCell>Jugadores</TableCell>
            <TableCell></TableCell>
          </TableRowHead>
        </TableHead>
        <TableBody>
          {games.map(({ name, current_players }, index) => (
            <TableRow key={index}>
              <TableCell>{name}</TableCell>
              <TableCell>{current_players}</TableCell>
              <TableCell>
                <CustomButton
                  name="Entrar"
                  onClick={() => joinLobby(name)}
                  style={{ width: "100px", height: "30px", fontSize: 16 }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default PartidasTable;
