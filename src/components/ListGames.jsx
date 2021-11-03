import React, { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import axios from 'axios';
import ButtonJoinGame from "./Buttons/ButtonJoinGame";

const ListGames = () => {

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

    return (
        <div>
            <Table>
                <TableHead style={{ position: 'sticky', background: '#ccc', zIndex: 999, top: '0%' }}>
                    <TableRow>
                        <TableCell>Game name</TableCell>
                        <TableCell>Players</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {

                        games &&
                        games.map(item => (
                            <TableRow>
                                <TableCell style={{ color: 'white' }}>{item.name}</TableCell>
                                <TableCell style={{ color: 'white' }}>{item.current_players}</TableCell>
                                <TableCell>
                                    <ButtonJoinGame> Join Game</ButtonJoinGame>
                                </TableCell>
                            </TableRow>
                        ))

                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default ListGames;