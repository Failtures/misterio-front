import React from "react";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormGroup } from "@mui/material";


const Bloc = () => {

    return (
        <FormGroup style={{ width: '160px', display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Victims:</p>
                <FormControlLabel control={<Checkbox />} label="Gardener" />
                <FormControlLabel control={<Checkbox />} label="Maid" />
                <FormControlLabel control={<Checkbox />} label="Butler" />
                <FormControlLabel control={<Checkbox />} label="Count" />
                <FormControlLabel control={<Checkbox />} label="Countess" />
                <FormControlLabel control={<Checkbox />} label="Housekeeper" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Monsters:</p>
                <FormControlLabel control={<Checkbox />} label="Dracula" />
                <FormControlLabel control={<Checkbox />} label="Frankenstein" />
                <FormControlLabel control={<Checkbox />} label="Werewolf" />
                <FormControlLabel control={<Checkbox />} label="Ghost" />
                <FormControlLabel control={<Checkbox />} label="Mummy" />
                <FormControlLabel control={<Checkbox />} label="Dr. Jekyll and Mr Hyde" />
            </div >

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Rooms:</p>
                <FormControlLabel control={<Checkbox />} label="Bedroom" />
                <FormControlLabel control={<Checkbox />} label="Library" />
                <FormControlLabel control={<Checkbox />} label="Cellar" />
                <FormControlLabel control={<Checkbox />} label="Garage" />
                <FormControlLabel control={<Checkbox />} label="Laboratory" />
                <FormControlLabel control={<Checkbox />} label="Pantheon" />
                <FormControlLabel control={<Checkbox />} label="Dining" />
                <FormControlLabel control={<Checkbox />} label="Living" />
            </div>

        </FormGroup>

    );
};

export default Bloc;