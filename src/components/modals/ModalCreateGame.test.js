import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button, Typography, TextField } from '@material-ui/core'

let component
beforeEach(() => {
     component = render(
        <div>
            <Typography style={{ marginTop: '5%' }} variant="h4" color="#423C3C">Create game</Typography>

            <form>
                <div className="tfield-group">
                    <TextField
                        required id="outlined-required"
                        label="Game Name"
                        variant="outlined"
                        size="large"
                        autoFocus={true}
                        inputProps={{ maxLength: 15 }}
                        onChange={(e) => { setGameName(e.target.value) }}
                    />
                </div>
                <div className="button-group">
                    <Button variant="contained" onClick={() => {
                        handleCreateGame()
                    }}
                    >
                        <Typography variant="button" color="#fff">Create</Typography>
                    </Button>

                </div>
            </form>
        </div>);
})

describe('Rendering Modal create game ', () => {

    it('Searching name title and verifying style', () => {
        
        const titletext = component.getByText('Create game');
        expect(titletext).toBeInTheDocument();
        expect(titletext).toHaveStyle('marginTop: 5%')
    })

    it('Searching for the button create', () => {
        const titletext = component.getByText('Create');
        expect(titletext).toBeInTheDocument();
    })

})