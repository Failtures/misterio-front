import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CheckBox from './CheckBox';

import { Typography } from '@material-ui/core';

export default function TemporaryDrawer({ hand }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const [butler, setButler] = React.useState(false);
    const [count, setCount] = React.useState(false);
    const [countess, setCountess] = React.useState(false);
    const [housekeeper, setHouseKeeper] = React.useState(false);
    const [gardener, setGardener] = React.useState(false)
    const [maid, setMaid] = React.useState(false);

    const [dracula, setDracula] = React.useState(false);
    const [dr, setDr] = React.useState(false);
    const [frankenstein, setFrankenstein] = React.useState(false);
    const [ghost, setGhost] = React.useState(false);
    const [mummy, setMummy] = React.useState(false)
    const [werewolf, setWereWolf] = React.useState(false);

    const [bedroom, setBedroom] = React.useState(false);
    const [cellar, setCellar] = React.useState(false);
    const [dining, setDining] = React.useState(false);
    const [garage, setGarage] = React.useState(false);
    const [laboratory, setLaboratory] = React.useState(false)
    const [library, setLibrary] = React.useState(false);
    const [living, setLiving] = React.useState(false)
    const [pantheon, setPantheon] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.key === 'Tab' || event.key === 'Enter' || event.key === 'Shift') {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box

            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ width: 260, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p> <b>Victims:</b> </p>
                <CheckBox hand={hand} inp={butler} setInp={setButler} label={'Butler'}></CheckBox>
                <CheckBox hand={hand} inp={count} setInp={setCount} label={'Count'}></CheckBox>
                <CheckBox hand={hand} inp={countess} setInp={setCountess} label={'Countess'}></CheckBox>
                <CheckBox hand={hand} inp={housekeeper} setInp={setHouseKeeper} label={'Housekeeper'}></CheckBox>
                <CheckBox hand={hand} inp={gardener} setInp={setGardener} label={'Gardener'}></CheckBox>
                <CheckBox hand={hand} inp={maid} setInp={setMaid} label={'Maid'}></CheckBox>
                <p> <b>Monsters:</b> </p>
                <CheckBox hand={hand} inp={dracula} setInp={setDracula} label={'Dracula'}></CheckBox>
                <CheckBox hand={hand} inp={dr} setInp={setDr} label={'Dr. Jekyll And Mr Hyde'}></CheckBox>
                <CheckBox hand={hand} inp={frankenstein} setInp={setFrankenstein} label={'Frankenstein'}></CheckBox>
                <CheckBox hand={hand} inp={ghost} setInp={setGhost} label={'Ghost'}></CheckBox>
                <CheckBox hand={hand} inp={mummy} setInp={setMummy} label={'Mummy'}></CheckBox>
                <CheckBox hand={hand} inp={werewolf} setInp={setWereWolf} label={'Werewolf'}></CheckBox>
                <p> <b>Rooms:</b> </p>
                <CheckBox hand={hand} inp={bedroom} setInp={setBedroom} label={'Bedroom'}></CheckBox>
                <CheckBox hand={hand} inp={cellar} setInp={setCellar} label={'Cellar'} ></CheckBox >
                <CheckBox hand={hand} inp={dining} setInp={setDining} label={'Dining'}></CheckBox>
                <CheckBox hand={hand} inp={garage} setInp={setGarage} label={'Garage'}></CheckBox>
                <CheckBox hand={hand} inp={laboratory} setInp={setLaboratory} label={'Laboratory'}></CheckBox>
                <CheckBox hand={hand} inp={library} setInp={setLibrary} label={'Library'}></CheckBox>
                <CheckBox hand={hand} inp={living} setInp={setLiving} label={'Living'}></CheckBox>
                <CheckBox hand={hand} inp={pantheon} setInp={setPantheon} label={'Pantheon'}></CheckBox>
            </div >


        </Box >
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}
                        variant="contained"
                        color="secondary"
                    >
                        <Typography variant="button" color="#fff">Note</Typography>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};