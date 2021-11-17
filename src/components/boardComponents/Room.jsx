// imports
import { makeStyles } from '@material-ui/styles'

import garage from '../../img/garage.jpg'

const Room = ({room}) => {

    const dictRoom = {
        img: '',
        gcPosX: 0,
        gcPosY: 0,
        grPosX: 0,
        grPosY: 0,
    }

    switch (room) {
        case 'Garage':
            dictRoom.img = garage;
            dictRoom.gcPosX = 1;
            dictRoom.gcPosY = 7;
            dictRoom.grPosX = 1;
            dictRoom.grPosY = 7;
            break;
        case 'Bedroom':
            dictRoom.img = garage;
            dictRoom.gcPosX = 8;
            dictRoom.gcPosY = 14;
            dictRoom.grPosX = 1;
            dictRoom.grPosY = 7;
            break;
        case 'Library':
            dictRoom.img = garage;
            dictRoom.gcPosX = 15;
            dictRoom.gcPosY = 21;
            dictRoom.grPosX = 1;
            dictRoom.grPosY = 7;
            break;
        case 'Living':
            dictRoom.img = garage;
            dictRoom.gcPosX = 1;
            dictRoom.gcPosY = 7;
            dictRoom.grPosX = 8;
            dictRoom.grPosY = 14;
            break;
        case 'Mistery':
            dictRoom.img = garage;
            dictRoom.gcPosX = 8;
            dictRoom.gcPosY = 14;
            dictRoom.grPosX = 8;
            dictRoom.grPosY = 14;
            break;
        case 'Pantheon':
            dictRoom.img = garage;
            dictRoom.gcPosX = 15;
            dictRoom.gcPosY = 21;
            dictRoom.grPosX = 8;
            dictRoom.grPosY = 14;
            break;
        case 'Cellar':
            dictRoom.img = garage;
            dictRoom.gcPosX = 1;
            dictRoom.gcPosY = 7;
            dictRoom.grPosX = 15;
            dictRoom.grPosY = 21;
            break;
        case 'Dining':
            dictRoom.img = garage;
            dictRoom.gcPosX = 8;
            dictRoom.gcPosY = 14;
            dictRoom.grPosX = 15;
            dictRoom.grPosY = 21;
            break;
        case 'Laboratory':
            dictRoom.img = garage;
            dictRoom.gcPosX = 15;
            dictRoom.gcPosY = 21;
            dictRoom.grPosX = 15;
            dictRoom.grPosY = 21;
            break;
        default:
            break;
    }

    const useStyle = makeStyles({
        backagroundSquare: {
            backgroundImage: `url(${dictRoom.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            gridColumnStart: dictRoom.gcPosX,
            gridColumnEnd: dictRoom.gcPosY,
            gridRowStart: dictRoom.grPosX,
            gridRowEnd: dictRoom.grPosY,
        }
    });
    
    const classes = useStyle()

    return (
        <div className={classes.backagroundSquare}>
            {room}
        </div>
    )
}

export default Room
