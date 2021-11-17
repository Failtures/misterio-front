// imports
import { makeStyles } from '@material-ui/styles'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ContextGeneral'
import {ws} from '../WebSocket'

const Square = ({img, id, posX, posY }) => {

    const dictStates = useContext(ThemeContext)
    let color = ''

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid black'
        },
        token: {    
            width: '35px',
            height: '35px',
            backgroundColor: color,
            borderRadius: '100%',
            border: '1px solid black',
            
            
        }
    });

    const handleClick = () => {
        ws.send(JSON.stringify(takes))
    }

    const classes = useStyle()

    return (
        <div className={classes.backagroundSquare} onClick={handleClick}>
            {color ? <div className={classes.token} onClick={handleClick}></div> : <div onClick={handleClick}></div>}
        </div>
    )
}

export default Square

