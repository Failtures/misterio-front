import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'


let result

beforeEach(() => {
    const selection = "selection"
    result = render(
        <div className="salem-cards-container">
            <h2>What card do you want to reveale?</h2>
            <h3> MONSTER </h3>
            <img width="150px" height="200px" src="/dorso1.png" alt="MONSTER" onClick={(e) => setSelection(e.target.alt)} />
            <h3> VICTIM </h3>
            <img width="150px" height="200px" src="/dorso1.png" alt="VICTIM" onClick={(e) => setSelection(e.target.alt)} />
            <h3> ROOM </h3>
            <img width="150px" height="200px" src="/dorso1.png" alt="ROOM" onClick={(e) => setSelection(e.target.alt)} />
            <p style={{ color: 'white' }}>{`Selection: ${selection}`} </p>
        </div>);
})

describe('Rendering Modal Salem', () => {

    it('Checking that the titles are rendered', () => {
        
        const title = result.getByText(/What card do you want to reveale/i)
        expect(title).toBeInTheDocument();

        const title1 = result.getByText(/Monster/i);
        expect(title1).toBeInTheDocument();

        const title2 = result.getByText(/Victim/i);
        expect(title2).toBeInTheDocument();

        const title3 = result.getByText(/Room/i);
        expect(title3).toBeInTheDocument();

    })

    it('Checking the style of the paragraph', () => {
        
        const element = result.getByText('Selection: selection')
        expect(element).toHaveStyle('color: white')
       
    })
})