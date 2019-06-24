import React from 'react';
import {shallow} from 'enzyme';
import Button from './button';

describe('<Button />', () => {
    // I added the line below to create a mock function which is required for 
    // using toHaveBeenCalled().
    const onClick = jest.fn(); 

    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button onClick={onClick}/>);
        wrapper.find('button').simulate('click');
        // I added the line below to assert that the mock function by the 
        // name of onClick is called. 
        expect(onClick).toHaveBeenCalled();
    });
});
