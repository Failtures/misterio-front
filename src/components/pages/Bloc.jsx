import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CheckBox from './CheckBox';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
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
            style={{width: 260, height:'100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
                <p> <b>Victims:</b> </p>
                <CheckBox inp={butler} setInp={setButler} label={'Butler'}></CheckBox>
                <CheckBox inp={count} setInp={setCount} label={'Count'}></CheckBox>
                <CheckBox inp={countess} setInp={setCountess} label={'Countess'}></CheckBox>
                <CheckBox inp={housekeeper} setInp={setHouseKeeper} label={'Housekeeper'}></CheckBox>
                <CheckBox inp={gardener} setInp={setGardener} label={'Gardener'}></CheckBox>
                <CheckBox inp={maid} setInp={setMaid} label={'Maid'}></CheckBox>
                <p> <b>Monsters:</b> </p>
                <CheckBox inp={dracula} setInp={setDracula} label={'Dracula'}></CheckBox>
                <CheckBox inp={dr} setInp={setDr} label={'Dr. Jekyll and Mr Hyde'}></CheckBox>
                <CheckBox inp={frankenstein} setInp={setFrankenstein} label={'Frankenstein'}></CheckBox>
                <CheckBox inp={ghost} setInp={setGhost} label={'Ghost'}></CheckBox>
                <CheckBox inp={mummy} setInp={setMummy} label={'Mummy'}></CheckBox>
                <CheckBox inp={werewolf} setInp={setWereWolf} label={'Werewolf'}></CheckBox>
                <p> <b>Rooms:</b> </p>
                <CheckBox inp={bedroom} setInp={setBedroom} label={'Bedroom'}></CheckBox>
                <CheckBox inp={cellar} setInp={setCellar} label={'Cellar'}></CheckBox>
                <CheckBox inp={dining} setInp={setDining} label={'Dining'}></CheckBox>
                <CheckBox inp={garage} setInp={setGarage} label={'Garage'}></CheckBox>
                <CheckBox inp={laboratory} setInp={setLaboratory} label={'Laboratory'}></CheckBox>
                <CheckBox inp={library} setInp={setLibrary} label={'Library'}></CheckBox>
                <CheckBox inp={living} setInp={setLiving} label={'Living'}></CheckBox>
                <CheckBox inp={pantheon} setInp={setPantheon} label={'Pantheon'}></CheckBox>
            </div>


        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>NOTE</Button>
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