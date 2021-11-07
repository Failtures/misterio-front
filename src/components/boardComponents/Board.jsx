// import tablero from '../../img/MisterioBoard.jpg'
import React from 'react'
import Square from './Square'
import './Board.css'
import Room from './Room'

// return: {'action': 'player_position', 'pos_x': <int>, 'pos_y': <int>, 'square': <str>}

const Board = ({ matchName }) => {

    return (
        <div className="board-container">
            <div class="tablero">

                <Room room="Garage" />
                <Room room="Bedroom" />
                <Room room="Library" />
                <Room room="Dining" />
                <Room room="Mistery" />
                <Room room="Pantheon" />
                <Room room="Cellar" />
                <Room room="Living" />
                <Room room="Laboratory" />
                <Square color='#a5682a' type="beginning" id={"1 init"} posX={6} posY={19} matchName={matchName} />
                <Square color='#a5682a' type="begining" id={"2 init"} posX={13} posY={19} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"3"} posX={6} posY={18} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"4"} posX={13} posY={18} matchName={matchName} />
                <Square color='#a5682a' type="Garage" id={"5 Gar"} posX={6} posY={17} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"6"} posX={13} posY={17} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"7"} posX={6} posY={16} matchName={matchName} />
                <Square color='#a5682a' type="scorpion" id={"8 scorp"} posX={13} posY={16} matchName={matchName} />
                <Square color='#a5682a' type="bat" id={"9 bat"} posX={6} posY={15} matchName={matchName} />
                <Square color='#a5682a' type="Library" id={"10 Lib"} posX={13} posY={15} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"11"} posX={6} posY={14} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"12"} posX={13} posY={14} matchName={matchName} />
                <Square color='#a5682a' type="begining" id={"13 init"} posX={0} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"14"} posX={1} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"15"} posX={2} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="snake" id={"16 snake"} posX={3} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="Dining" id={"17 Din"} posX={4} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"18"} posX={5} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="trap" id={"19 trap"} posX={6} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"21"} posX={7} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"22"} posX={8} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"23"} posX={9} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="Bedroom" id={"24 Bed"} posX={10} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"25"} posX={11} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"26"} posX={12} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="trap" id={"27 trap"} posX={13} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="snake" id={"28 snake"} posX={14} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="Pantheon" id={"29 panth"} posX={15} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"30"} posX={16} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"31"} posX={17} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"32"} posX={18} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="beginning" id={"33 init"} posX={19} posY={13} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"34"} posX={6} posY={12} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"35"} posX={13} posY={12} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"36"} posX={6} posY={11} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"37"} posX={13} posY={11} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"38"} posX={6} posY={10} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"39"} posX={13} posY={10} matchName={matchName} />
                <Square color='#a5682a' type="Dining" id={"40 Din"} posX={6} posY={9} matchName={matchName} />
                <Square color='#a5682a' type="Pantheon" id={"41 panth"} posX={13} posY={9} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"42"} posX={6} posY={8} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"43"} posX={13} posY={8} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"44"} posX={6} posY={7} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"45"} posX={13} posY={7} matchName={matchName} />
                <Square color='#a5682a' type="beginning" id={"46 init"} posX={0} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"47"} posX={1} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"48"} posX={2} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="Dining" id={"49 Din"} posX={3} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="spider" id={"50 spid"} posX={4} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"51"} posX={5} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="trap" id={"52 trap"} posX={6} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"53"} posX={7} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"54"} posX={8} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"55"} posX={9} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="Living" id={"56 Liv"} posX={10} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"57"} posX={11} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"58"} posX={12} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="trap" id={"59 trap"} posX={13} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"60"} posX={14} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="spider" id={"61 spid"} posX={15} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="Pantheon" id={"62 panth"} posX={16} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"63"} posX={17} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"64"} posX={18} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="beginning" id={"65 init"} posX={19} posY={6} matchName={matchName} />
                <Square color='#a5682a' type="bat" id={"66 bat"} posX={6} posY={5} matchName={matchName} />
                <Square color='#a5682a' type="scorpion" id={"67 scorp"} posX={13} posY={5} matchName={matchName} />
                <Square color='#a5682a' type="Cellar" id={"68 Cell"} posX={6} posY={4} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"69"} posX={13} posY={4} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"70"} posX={6} posY={3} matchName={matchName} />
                <Square color='#a5682a' type="Laboratory" id={"71 Lab"} posX={13} posY={3} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"72"} posX={6} posY={2} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"73"} posX={13} posY={2} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"74"} posX={6} posY={1} matchName={matchName} />
                <Square color='#a5682a' type="normal" id={"75"} posX={6} posY={1} matchName={matchName} />
                <Square color='#a5682a' type="beginning" id={"76 init"} posX={6} posY={0} matchName={matchName} />
                <Square color='#a5682a' type="beginning" id={"77 init"} posX={13} posY={0} matchName={matchName} />


                {/* <Room room="Garage" /> 
                <Room room="Bedroom" />
                <Room room="Library" />
                <Room room="Dining" />
                <Room room="Mistery" />
                <Room room="Pantheon" />
                <Room room="Cellar" />
                <Room room="Living" />
                <Room room="Laboratory" />
                <Square color='#5a544c' type="beginning" id={1} posX={6} posY={19} matchName={matchName}/>
                <Square color='#5a544c' type="begining" id={2} posX={13} posY={19} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={3} posX={6} posY={18} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={4} posX={13} posY={18} matchName={matchName}/>
                <Square color= 'brown' type="Garage" id={5} posX={6} posY={17} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={6} posX={13} posY={17} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={7} posX={6} posY={16} matchName={matchName}/>
                <Square color='#94781e' type="scorpion" id={8} posX={13} posY={16} matchName={matchName}/>
                <Square color='#706b33' type="bat" id={9} posX={6} posY={15} matchName={matchName}/>
                <Square color='green' type="Library" id={10} posX={13} posY={15} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={11} posX={6} posY={14} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={12} posX={13} posY={14} matchName={matchName}/>
                <Square color='#5a544c' type="begining" id={13} posX={0} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={14} posX={1} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={15} posX={2} posY={13} matchName={matchName}/>
                <Square color='#a79220' type="snake" id={16} posX={3} posY={13} matchName={matchName}/>
                <Square color='yellow' type="Dining" id={17} posX={4} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={18} posX={5} posY={13} matchName={matchName}/>
                <Square color='#4d3716' type="trap" id={19} posX={6} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={21} posX={7} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={22} posX={8} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={23} posX={9} posY={13} matchName={matchName}/>
                <Square color='lightblue' type="Bedroom" id={24} posX={10} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={25} posX={11} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={26} posX={12} posY={13} matchName={matchName}/>
                <Square color='#4d3716' type="trap" id={27} posX={13} posY={13} matchName={matchName}/>
                <Square color='#a79220' type="snake" id={28} posX={14} posY={13} matchName={matchName}/>
                <Square color='blue' type="Pantheon" id={29} posX={15} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={30} posX={16} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={31} posX={17} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={32} posX={18} posY={13} matchName={matchName}/>
                <Square color='#5a544c' type="beginning" id={33} posX={19} posY={13} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={34} posX={6} posY={12} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={35} posX={13} posY={12} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={36} posX={6} posY={11} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={37} posX={13} posY={11} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={38} posX={6} posY={10} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={39} posX={13} posY={10} matchName={matchName}/>
                <Square color='yellow' type="Dining" id={40} posX={6} posY={9} matchName={matchName}/>
                <Square color='blue' type="Pantheon" id={41} posX={13} posY={9} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={42} posX={6} posY={8} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={43} posX={13} posY={8} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={44} posX={6} posY={7} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={45} posX={13} posY={7} matchName={matchName}/>
                <Square color='#5a544c' type="beginning" id={46} posX={0} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={47} posX={1} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={48} posX={2} posY={6} matchName={matchName}/>
                <Square color='yellow' type="Dining" id={49} posX={3} posY={6} matchName={matchName}/>
                <Square color='#a03325' type="spider" id={50} posX={4} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={51} posX={5} posY={6} matchName={matchName}/>
                <Square color='#4d3716' type="trap" id={52} posX={6} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={53} posX={7} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={54} posX={8} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={55} posX={9} posY={6} matchName={matchName}/>
                <Square color='purple' type="Living" id={56} posX={10} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={57} posX={11} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={58} posX={12} posY={6} matchName={matchName}/>
                <Square color='#4d3716' type="trap" id={59} posX={13} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={60} posX={14} posY={6} matchName={matchName}/>
                <Square color='#a03325' type="spider" id={61} posX={15} posY={6} matchName={matchName}/>
                <Square color='blue' type="Pantheon" id={62} posX={16} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={63} posX={17} posY={6} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={64} posX={18} posY={6} matchName={matchName}/>
                <Square color='#5a544c' type="beginning" id={65} posX={19} posY={6} matchName={matchName}/>
                <Square color='#706b33' type="bat" id={66} posX={6} posY={5} matchName={matchName}/>
                <Square color='#94781e' type="scorpion" id={67} posX={13} posY={5} matchName={matchName}/>
                <Square color='red' type="Cellar" id={68} posX={6} posY={4} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={69} posX={13} posY={4} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={70} posX={6} posY={3} matchName={matchName}/>
                <Square color='pink' type="Laboratory" id={71} posX={13} posY={3} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={72} posX={6} posY={2} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={73} posX={13} posY={2} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={74} posX={6} posY={1} matchName={matchName}/>
                <Square color='#a5682a' type="normal" id={75} posX={6} posY={1} matchName={matchName}/>
                <Square color='#5a544c' type="beginning" id={76} posX={6} posY={0} matchName={matchName}/>
                <Square color='#5a544c' type="beginning" id={77} posX={13} posY={0} matchName={matchName}/> */}
            </div>
        </div>
    )
}

export default Board

