jest.dontMock('../components/menu.jsx');

let Menu = require('../components/menu.jsx');
import React from "react";
import {shallow, mount} from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

let expect = chai.expect;

describe('menu', function () {

    chai.use(chaiEnzyme());

    it('should display the lunch menu in a header H2', function () {

        let wrapper = shallow(<Menu />);

        let renderedTitle = wrapper.find('h2');
        expect(renderedTitle.text()).to.equal('Lunch Menu');

    });

    it('should display/hide items when they are available / not available', function () {

        let wrapper = mount(<Menu />);

        let renderedTitle = wrapper.find('ul');
        expect(renderedTitle.children().length).to.equal(0);

        wrapper.setState({
            items: []
        });

        expect(renderedTitle.children().length).to.equal(0);

        wrapper.setState({
            items: [
                {id: 11, name: 'Salmon Sushi', price: 10.99},
                {id: 12, name: 'Salmon Nigiri', price: 11.99},
                {id: 13, name: 'Tuna Sushi', price: 12.99}
            ]
        });

        expect(renderedTitle.children().length).to.equal(3);
    });

});