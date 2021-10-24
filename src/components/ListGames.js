import React, { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import { Button } from "@material-ui/core";
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


    /*
    const getGames = async () => {
        await axios.get(`${api.url}/get-lobbies`)
            .then(response => setGames(response.data))
            .catch(error => console.log(error, "ERROR"));
    };
    */

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
                setGames(response.data.lobbies)
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
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.current_players}</TableCell>
                                    <TableCell>
                                        <ButtonJoinGame nameGame={item.name} player={props.nickName}> Join Game </ButtonJoinGame>
                                    </TableCell>
                                </TableRow>
                            ))
                            :
                            <TableRow>

                            </TableRow>
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default ListGames;