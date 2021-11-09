// imports
import { makeStyles } from '@material-ui/styles'

const Room = ({room}) => {

    const dictRoom = {
        color: "",
        gcPosX: 0,
        gcPosY: 0,
        grPosX: 0,
        grPosY: 0,
    }

    switch (room) {
        case 'Garage':
            dictRoom.color = 'brown';
            dictRoom.gcPosX = 1;
            dictRoom.gcPosY = 7;
            dictRoom.grPosX = 1;
            dictRoom.grPosY = 7;
            break;
        case 'Bedroom':
            dictRoom.color = 'lightblue';
            dictRoom.gcPosX = 8;
            dictRoom.gcPosY = 14;
            dictRoom.grPosX = 1;
            dictRoom.grPosY = 7;
            break;
        case 'Library':
            dictRoom.color = 'green';
            dictRoom.gcPosX = 15;
            dictRoom.gcPosY = 21;
            dictRoom.grPosX = 1;
            dictRoom.grPosY = 7;
            break;
        case 'Living':
            dictRoom.color = 'yellow';
            dictRoom.gcPosX = 1;
            dictRoom.gcPosY = 7;
            dictRoom.grPosX = 8;
            dictRoom.grPosY = 14;
            break;
        case 'Mistery':
            dictRoom.color = 'goldenrod';
            dictRoom.gcPosX = 8;
            dictRoom.gcPosY = 14;
            dictRoom.grPosX = 8;
            dictRoom.grPosY = 14;
            break;
        case 'Pantheon':
            dictRoom.color = 'blue';
            dictRoom.gcPosX = 15;
            dictRoom.gcPosY = 21;
            dictRoom.grPosX = 8;
            dictRoom.grPosY = 14;
            break;
        case 'Cellar':
            dictRoom.color = 'red';
            dictRoom.gcPosX = 1;
            dictRoom.gcPosY = 7;
            dictRoom.grPosX = 15;
            dictRoom.grPosY = 21;
            break;
        case 'Dining':
            dictRoom.color = 'purple';
            dictRoom.gcPosX = 8;
            dictRoom.gcPosY = 14;
            dictRoom.grPosX = 15;
            dictRoom.grPosY = 21;
            break;
        case 'Laboratory':
            dictRoom.color = 'pink';
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
            backgroundColor: dictRoom.color,
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
