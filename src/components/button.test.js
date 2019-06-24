import React from 'react';
import {shallow} from 'enzyme';
import Button from './button';

describe('<Button />', () => {
    const onClick = jest.fn();

    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button onClick={onClick}/>);
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
