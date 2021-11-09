// imports
import React, { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import axios from 'axios'
import { Button } from "@material-ui/core";
// components
import ButtonJoinGame from "./buttons/ButtonJoinGame";

const ListGames = () => {

    const [games, setGames] = useState([]);

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
            {
                games &&
                <Table>
                    <TableHead style={{ position: 'sticky', background: '#ccc', zIndex: 999, top: '0%' }}>
                        <TableRow>
                            <TableCell>Game name</TableCell>
                            <TableCell>Players</TableCell>
                            <TableCell>
                                <Button variant="contained"
                                    color="secondary"
                                    onClick={getLobbies}
                                >
                                    Refresh
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            games.map(item => (
                                <TableRow key={item.name}>
                                    <TableCell style={{ color: 'white' }}>{item.name}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{item.current_players}</TableCell>
                                    <TableCell>
                                        <ButtonJoinGame
                                            nameGame={item.name}
                                        > Join Game
                                        </ButtonJoinGame>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            }
        </div>
    );
};

export default ListGames;