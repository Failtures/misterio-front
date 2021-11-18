import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Cards from './Card'
import { render } from '@testing-library/react'
import {shallow} from 'enzyme'
import { Card, CardContent, Typography } from '@material-ui/core'
import Avatar from '@mui/material/Avatar';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Rendering testing of Card File ', () => {
    it('Rendering without errors of Card component', () => {
        const wrapper = shallow(<Card/>);
        expect(wrapper).toHaveLength(1);
    })
    it('Rendering without errors of Avatar component', () => {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper).toHaveLength(1);
    })
    it('Rendering without errors of CardContent component', () => {
        const wrapper = shallow(<CardContent/>);
        expect(wrapper).toHaveLength(1);
    })
    it('Rendering without errors of Typography component', () => {
        const wrapper = shallow(<Typography/>);
        expect(wrapper).toHaveLength(1);
    })
    it ('Rendering children of Card', () => {
        const wrapper = shallow((
            <Card>
                <Avatar/>
            </Card>));
        expect(wrapper.contains(<Avatar/>)).toEqual(true);
    })
    it ('Rendering more children of Card', () => {
        const wrapper = shallow((
            <Card>
                <Avatar/>
                <CardContent/>
                <Typography/>
            </Card>));
        expect(wrapper.contains(<Avatar/>, <CardContent/>, <Typography/>)).toEqual(true);
    })
})

