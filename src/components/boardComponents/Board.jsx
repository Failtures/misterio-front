//imports
// import tablero from '../../img/MisterioBoard.jpg'
import React from 'react'
// components
import Room from './Room'
import Square from './Square'
// CSS styles
import './Board.css'

import regular from '../../img/regular.jpg'
import squareGarage5 from '../../img/square-garage5.jpg'
import trapLB from '../../img/trap-lb.jpg'
import cincuentayuno from '../../img/51.jpg'
import cincuentaytres from '../../img/53.jpg'
import cincuentayocho from '../../img/58.jpg'
import sesenta from '../../img/60.jpg'
import trapRB from '../../img/trap-rb.jpg'
import dieciocho from '../../img/18.jpg'
import veintiuno from '../../img/21.jpg'
import trapLT from '../../img/trap-lt.jpg'
import veintiseis from '../../img/26.jpg'
import snake28 from '../../img/snake-28.jpg'
import trapRT from '../../img/trap-rt.jpg'
import snake16 from '../../img/snake-16.jpg'
import bat9 from '../../img/bat-9.jpg'
import bat66 from '../../img/bat-66.jpg'
import scorpion8 from '../../img/scorpion-8.jpg'
import scorpion67 from '../../img/scorpion-67.jpg'
import spid50 from '../../img/spid-50.jpg'
import spid61 from '../../img/spid-61.jpg'
import startingBL from '../../img/starting-bl.jpg'
import startingBR from '../../img/starting-br.jpg'
import startingLB from '../../img/starting-lb.jpg'
import startingLT from '../../img/starting-lt.jpg'
import startingTL from '../../img/starting-tl.jpg'
import startingTR from '../../img/starting-tr.jpg'
import startingRT from '../../img/starting-rt.jpg'
import startingRB from '../../img/starting-rb.jpg'
import squareBed24 from '../../img/square-bed24.jpg'
import squareLib10 from '../../img/square-lib10.jpg'
import squareLiv17 from '../../img/square-liv17.jpg'
import squareLiv40 from '../../img/square-liv40.jpg'
import squareLiv49 from '../../img/square-liv49.jpg'
import squareCell68 from '../../img/square-cell68.jpg'
import squareDin56 from '../../img/square-din56.jpg'
import squareLab71 from '../../img/square-lab71.jpg'
import squarePanth62 from '../../img/square-panth62.jpg'
import squarePanth41 from '../../img/square-panth41.jpg'
import squarePanth29 from '../../img/square-panth29.jpg'


const Board = () => {

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
                <Square img= {startingTL} type="beginning" id={"1 init"} posX={6} posY={19} />
                <Square img= {startingTR} type="begining" id={"2 init"} posX={13} posY={19} />
                <Square img= "" type="normal" id={"3"} posX={6} posY={18} />
                <Square img= "" type="normal" id={"4"} posX={13} posY={18} />
                <Square img= {squareGarage5} type="Garage" id={"5 Gar"} posX={6} posY={17} />
                <Square img= "" type="normal" id={"6"} posX={13} posY={17} />
                <Square img= "" type="normal" id={"7"} posX={6} posY={16} />
                <Square img= {scorpion8} type="scorpion" id={"8 scorp"} posX={13} />
                <Square img= {bat9} type="bat" id={"9 bat"} posX={6} posY={15} />
                <Square img= {squareLib10} type="Library" id={"10 Lib"} posX={13} posY={15} />
                <Square img= "" type="normal" id={"11"} posX={6} posY={14} />
                <Square img= "" type="normal" id={"12"} posX={13} posY={14} />
                <Square img= {startingLT} type="begining" id={"13 init"} posX={0} posY={13} />
                <Square img= "" type="normal" id={"14"} posX={1} posY={13} />
                <Square img= "" type="normal" id={"15"} posX={2} posY={13} />
                <Square img= {snake16} type="snake" id={"16 snake"} posX={3} posY={13} />
                <Square img= {squareLiv17} type="Living17" id={"17 Liv"} posX={4} posY={13} />
                <Square img= {dieciocho} type="normal" id={"18"} posX={5} posY={13} />
                <Square img= {trapLT} type="trap" id={"19 trap"} posX={6} posY={13} />
                <Square img= {veintiuno} type="normal" id={"21"} posX={7} posY={13} />
                <Square img= "" type="normal" id={"22"} posX={8} posY={13} />
                <Square img= "" type="normal" id={"23"} posX={9} posY={13} />
                <Square img= {squareBed24} type="Bedroom24" id={"24 Bed"} posX={10} posY={13} />
                <Square img= "" type="normal" id={"25"} posX={11} posY={13} />
                <Square img= {veintiseis} type="normal" id={"26"} posX={12} posY={13} />
                <Square img= {trapRT} type="trap" id={"27 trap"} posX={13} posY={13} />
                <Square img= {snake28} type="snake" id={"28 snake"} posX={14} posY={13} />
                <Square img= {squarePanth29} type="Pantheon29" id={"29 panth"} posX={15} posY={13} />
                <Square img= "" type="normal" id={"30"} posX={16} posY={13} />
                <Square img= "" type="normal" id={"31"} posX={17} posY={13} />
                <Square img= "" type="normal" id={"32"} posX={18} posY={13} />
                <Square img= {startingRT} type="beginning" id={"33 init"} posX={19} />
                <Square img= "" type="normal" id={"34"} posX={6} posY={12} />
                <Square img= "" type="normal" id={"35"} posX={13} posY={12} />
                <Square img= "" type="normal" id={"36"} posX={6} posY={11} />
                <Square img= "" type="normal" id={"37"} posX={13} posY={11} />
                <Square img= "" type="normal" id={"38"} posX={6} posY={10} />
                <Square img= "" type="normal" id={"39"} posX={13} posY={10} />
                <Square img= {squareLiv40} type="Living40" id={"40 Liv"} posX={6} posY={9} />
                <Square img= {squarePanth41} type="Pantheon41" id={"41 panth"} posX={13} posY={9} />
                <Square img= "" type="normal" id={"42"} posX={6} posY={8} />
                <Square img= "" type="normal" id={"43"} posX={13} posY={8} />
                <Square img= "" type="normal" id={"44"} posX={6} posY={7} />
                <Square img= "" type="normal" id={"45"} posX={13} posY={7} />
                <Square img= {startingLB} type="beginning" id={"46 init"} posX={0} posY={6} />
                <Square img= "" type="normal" id={"47"} posX={1} posY={6} />
                <Square img= "" type="normal" id={"48"} posX={2} posY={6} />
                <Square img= {squareLiv49} type="Living49" id={"49 Liv"} posX={3} posY={6} />
                <Square img= {spid50} type="spider" id={"50 spid"} posX={4} posY={6} />
                <Square img= {cincuentayuno} type="normal" id={"51"} posX={5} posY={6} />
                <Square img= {trapLB} type="trap" id={"52 trap"} posX={6} posY={6} />
                <Square img= {cincuentaytres} type="normal" id={"53"} posX={7} posY={6} />
                <Square img= "" type="normal" id={"54"} posX={8} posY={6} />
                <Square img= "" type="normal" id={"55"} posX={9} posY={6} />
                <Square img= {squareDin56} type="Dining56" id={"56 Din"} posX={10} posY={6} />
                <Square img= "" type="normal" id={"57"} posX={11} posY={6} />
                <Square img= {cincuentayocho} type="normal" id={"58"} posX={12} posY={6} />
                <Square img= {trapRB}  type="trap" id={"59 trap"} posX={13} posY={6} />
                <Square img= {sesenta} type="normal" id={"60"} posX={14} posY={6} />
                <Square img= {spid61} type="spider" id={"61 spid"} posX={15} posY={6} />
                <Square img= {squarePanth62} type="Pantheon62" id={"62 panth"} posX={16} posY={6} />
                <Square img= "" type="normal" id={"63"} posX={17} posY={6} />
                <Square img= "" type="normal" id={"64"} posX={18} posY={6} />
                <Square img= {startingRB} type="beginning" id={"65 init"} posX={19} posY={6} />
                <Square img= {bat66} type="bat" id={"66 bat"} posX={6} posY={5} />
                <Square img= {scorpion67} type="scorpion" id={"67 scorp"} posX={13} posY={5} />
                <Square img= {squareCell68} type="Cellar" id={"68 Cell"} posX={6} posY={4} />
                <Square img= "" type="normal" id={"69"} posX={13} posY={4} />
                <Square img= "" type="normal" id={"70"} posX={6} posY={3} />
                <Square img= {squareLab71} type="Laboratory" id={"71 Lab"} posX={13} posY={3} />
                <Square img= "" type="normal" id={"72"} posX={6} posY={2} />
                <Square img= "" type="normal" id={"73"} posX={13} posY={2} />
                <Square img= "" type="normal" id={"74"} posX={6} posY={1} />
                <Square img= "" type="normal" id={"75"} posX={13} posY={1} />
                <Square img= {startingBL} type="beginning" id={"76 init"} posX={6} posY={0} />
                <Square img= {startingBR} type="beginning" id={"77 init"} posX={13} posY={0} />


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

