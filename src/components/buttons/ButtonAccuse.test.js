import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonAccuse from './ButtonAccuse'
import { Button, Typography } from '@material-ui/core'


describe('Rendering Button Accuse ', () => {

    it('Searching name of button', () => {
        render(
            <div >
                <Button
                    variant="contained"
                    color="secondary"
                >
                    <Typography variant="button" color="#fff">Accuse</Typography>
                </Button>
            </div>);
        const ButtonName = screen.getByText(/Accuse/i);
        expect(ButtonName).toBeInTheDocument();
    })

    it('Checking Click one time on button Accuse', () => {
        
        const mock = jest.fn()

        const component = render(
            <div >
                <Button
                    variant="contained"
                    color="secondary"
                    onClick= {mock}
                >
                    <Typography variant="button" color="#fff">Accuse</Typography>
                </Button>
            </div>);

        const button = component.getByText('Accuse')

        fireEvent.click(button)
        expect(mock).toHaveBeenCalledTimes(1)
    })

})