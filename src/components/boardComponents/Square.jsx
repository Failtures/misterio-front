// imports
import { makeStyles } from '@material-ui/styles'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ContextGeneral'
import {ws} from '../WebSocket'

const Square = ({color, id, posX, posY }) => {

    const dictStates = useContext(ThemeContext)

    const takes = {
        'action': 'match_move',
        'match_name': dictStates.lobbyName,
        'pos_x': posX,
        'pos_y': posY
    }
    dictStates.playerPosition.forEach(element => {
        if(posX === element.pos_x && posY === element.pos_y) {
            const filtered = dictStates.tokenColor.filter((item) => {
                return item.player === element.player_name 
            })
            color = filtered[0].color;
        }
    });

    const useStyle = makeStyles({
        backagroundSquare: {
            backgroundColor: color
        }
    });

    const handleClick = () => {
        ws.send(JSON.stringify(takes))
    }

    const classes = useStyle()

    return (
        <div className={classes.backagroundSquare} onClick={handleClick}>
            {id}
        </div>
    )
}

export default Square

