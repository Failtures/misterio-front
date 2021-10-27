import React, { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import ButtonJoinGame from "./Buttons/ButtonJoinGame";

const useStyle = makeStyles({
    conteiner: {
        width: 500,
        height: 400,
        overflow: 'scroll',
        overflowX: 'hidden',
        backgroundColor: '#1b294a'
    },
    head: {
        position: 'sticky',
        width: 600,
        top: '0%',
        background: '#ccc',
        zIndex: 2
    }
});

const ListGames = (props) => {

    const [games, setGames] = useState([]);

    useEffect(() => {

        const getLobbies = async () => {

            try {
                const response = await axios({
                    method: 'get',
                    url: 'https://misterio-famaf.herokuapp.com/get-lobbies',
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setGames(response.data.lobbies.filter(item => item.current_players < 6))
            }
            catch (error) {
                console.log(error, "ERROR");
            }
        };

        getLobbies();

    }, []);

    const clase = useStyle();

    return (
        <div className={clase.conteiner}>
            <Table>
                <TableHead className={clase.head}>
                    <TableRow>
                        <TableCell >Game name</TableCell>
                        <TableCell>Players</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {

                        games != null ?
                            games.map(item => (
                                <TableRow>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.current_players}</TableCell>
                                    <TableCell>
                                        <ButtonJoinGame
                                            nameGame={item.name}
                                            player={props.player}
                                        > Join Game
                                        </ButtonJoinGame>
                                    </TableCell>
                                </TableRow>
                            ))
                            :
                            <TableRow>
                                no games available
                            </TableRow>

                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default ListGames;