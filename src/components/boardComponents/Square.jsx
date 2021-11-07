import { makeStyles } from '@material-ui/styles'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ContextGeneral'
import {ws} from '../WebSocket'

const Square = ({color, id, posX, posY, matchName}) => {

    const dictStates = useContext(ThemeContext)

    const takes = {
        'action': 'match_move',
        'match_name': matchName,
        'pos_x': posX,
        'pos_y': posY
    }

    if(posX === dictStates.posX && posY === dictStates.posY) {
        color = dictStates.tokenColor
    }

    const useStyle = makeStyles({
        backagroundSquare: {
            backgroundColor: color
        }
    });

    const classes = useStyle()

    const handleClick = () => {
        console.log(`X: ${posX}, Y: ${posY}, match name: ${matchName}`);
        ws.send(JSON.stringify(takes))
    }


    return (
        <div className={classes.backagroundSquare} onClick={handleClick}>
            {id}
        </div>
    )
}

export default Square


//takes:  {'action': 'match_move', 'match_name': <str>, 'pos_x': <int>, 'pos_y': <int>}

