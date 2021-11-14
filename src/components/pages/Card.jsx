import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Cards = ({ player }) => {
    return (
        <Card sx={{ marginLeft:'1%', marginRight: '1%', width: '12%' ,height: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{player[0]}</Avatar>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {player}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cards;
