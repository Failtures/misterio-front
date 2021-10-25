import React, { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import api from '../configs/api'
import ButtonJoinGame from "./Buttons/ButtonJoinGame";
import { getThemeProps } from "@material-ui/system";

const useStyle = makeStyles({
    conteiner: {
        width: 400,
        height: '100vh',
        overflow: 'scroll',
        overflowX: 'hidden'
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
                    url: `${api.url}/get-lobbies`,
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