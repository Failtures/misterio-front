import * as React from 'react'
import { FormControlLabel } from '@mui/material'
import { Checkbox } from '@mui/material'
const CheckBox = ({ inp, setInp, label, hand }) => {

    return (

        <FormControlLabel
            checked={hand.filter(card => card.name === label).length > 0 ? true : inp}
            onClick={() => {
                setInp(!inp)
            }}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    setInp(!inp)
                }
            }}
            control={<Checkbox size="small" />} label={label} />
    )
}
export default CheckBox