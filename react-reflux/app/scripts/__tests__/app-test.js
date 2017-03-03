jest.dontMock('../pages/app.jsx');

import React from "react";
import {shallow} from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

let App = require('../pages/app.jsx');
let expect = chai.expect;

describe('app', function () {

    chai.use(chaiEnzyme());

    it('should display the title in a header H1', function () {

        let wrapper = shallow(<App />);

        let renderedTitle = wrapper.find('h1');
        expect(renderedTitle.text()).to.equal('Handy Menu');

    });

});