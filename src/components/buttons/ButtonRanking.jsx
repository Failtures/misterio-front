// imports
import React from 'react'
import { ws } from '../WebSocket'
import { Button } from "@material-ui/core"
import { Typography } from '@material-ui/core'

function ButtonRanking({openModalRanking}) {

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    openModalRanking()
                    const takesRanking = {
                        'action': 'ranking_get_top_ten'
                    }
                    ws.send(JSON.stringify(takesRanking))
                }}
            >
                <Typography variant="button" color="#fff">Ranking</Typography>
            </Button>
        </div>

    )
}

export default ButtonRanking
