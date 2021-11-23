// imports
import { makeStyles } from '@material-ui/styles'

import garage from '../../img/garage2.jpg'
import mistery from '../../img/mistery.jpg'
import bedroom from '../../img/bedroom.jpg'
import library from '../../img/library2.jpg'
import pantheon from '../../img/pantheon2.jpg'
import laboratory from '../../img/laboratory.jpg'
import dining from '../../img/dining.jpg'
import cellar from '../../img/cellar.jpg'
import living from '../../img/living.jpg'

const Room = ({room}) => {

    const dictRoom = {
        position: '',
        img: '',
        gcPosX: 0,
        gcPosY: 0,
        grPosX: 0,
        grPosY: 0,
    }

    switch (room) {
        case 'Garage':
            dictRoom.position = 'bottom'
            dictRoom.img = garage
            dictRoom.gcPosX = 1
            dictRoom.gcPosY = 7
            dictRoom.grPosX = 1
            dictRoom.grPosY = 7
            break
        case 'Bedroom':
            dictRoom.position = 'bottom'
            dictRoom.img = bedroom
            dictRoom.gcPosX = 8
            dictRoom.gcPosY = 14
            dictRoom.grPosX = 1
            dictRoom.grPosY = 7
            break
        case 'Library':
            dictRoom.position = 'bottom'
            dictRoom.img = library
            dictRoom.gcPosX = 15
            dictRoom.gcPosY = 21
            dictRoom.grPosX = 1
            dictRoom.grPosY = 7
            break
        case 'Living':
            dictRoom.position = ' right center'
            dictRoom.img = living
            dictRoom.gcPosX = 1
            dictRoom.gcPosY = 7
            dictRoom.grPosX = 8
            dictRoom.grPosY = 14
            break
        case 'Mistery':
            dictRoom.position = 'center'
            dictRoom.img = mistery
            dictRoom.gcPosX = 8
            dictRoom.gcPosY = 14
            dictRoom.grPosX = 8
            dictRoom.grPosY = 14
            break
        case 'Pantheon':
            dictRoom.position = 'left center'
            dictRoom.img = pantheon
            dictRoom.gcPosX = 15
            dictRoom.gcPosY = 21
            dictRoom.grPosX = 8
            dictRoom.grPosY = 14
            break
        case 'Cellar':
            dictRoom.position = 'top center'
            dictRoom.img = cellar
            dictRoom.gcPosX = 1
            dictRoom.gcPosY = 7
            dictRoom.grPosX = 15
            dictRoom.grPosY = 21
            break
        case 'Dining':
            dictRoom.position = 'top center'
            dictRoom.img = dining
            dictRoom.gcPosX = 8
            dictRoom.gcPosY = 14
            dictRoom.grPosX = 15
            dictRoom.grPosY = 21
            break
        case 'Laboratory':
            dictRoom.position = 'top center'
            dictRoom.img = laboratory
            dictRoom.gcPosX = 15
            dictRoom.gcPosY = 21
            dictRoom.grPosX = 15
            dictRoom.grPosY = 21
            break
        default:
            break
    }

    const useStyle = makeStyles({
        backagroundSquare: {
            backgroundImage: `url(${dictRoom.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: `${dictRoom.position}`,
            gridColumnStart: dictRoom.gcPosX,
            gridColumnEnd: dictRoom.gcPosY,
            gridRowStart: dictRoom.grPosX,
            gridRowEnd: dictRoom.grPosY,
        }
    })
    
    const classes = useStyle()

    return (
        <div className={classes.backagroundSquare}>
        </div>
    )
}

export default Room
