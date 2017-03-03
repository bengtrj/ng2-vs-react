import React from 'react';
import {shallow, mount} from 'enzyme';

let MenuItem = require('../components/menu-item.jsx');

describe('menu item', function () {

    const items = [
        {id: 11, name: 'Salmon Sushi', price: 10.99},
        {id: 12, name: 'Salmon Nigiri', price: 11.99},
        {id: 13, name: 'Tuna Sushi', price: 12.99}
    ];

    let onOrderClickSpy;

    beforeEach(function () {

        onOrderClickSpy = jasmine.createSpy('onOrderClick');

    });

    it('should display all items', function () {

        let wrapper = mount(
            <MenuItem
                item={
                    {id: 11, name: 'Salmon Sushi', price: 10.99}
                }
                onOrderClick={onOrderClickSpy}
            />);

        let renderedItem = wrapper.find('div');
        expect(renderedItem.text()).toContain('€ 10.99');

        let renderedItemName = wrapper.find('span .badge');
        expect(renderedItemName.text()).toContain('Salmon Sushi');


    });

    it('should call onOrderClick function when order button is clicked', function () {

        let wrapper = shallow(
            <MenuItem
                item={
                    {id: 11, name: 'Salmon Sushi', price: 10.99}
                }
                onOrderClick={onOrderClickSpy}
            />);

        let button = wrapper.find('span .button');

        button.simulate('click');
        expect(onOrderClickSpy).toHaveBeenCalledWith(
            {id: 11, name: 'Salmon Sushi', price: 10.99}
        );

    });


});