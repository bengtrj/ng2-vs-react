import React from "react";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import MenuItemActions from "../../actions/menu-item-actions";

import axios from 'axios';
let MockAdapter = require('axios-mock-adapter');


describe('MenuItemActions', function () {

    chai.use(chaiEnzyme());
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        MenuItemActions.loadItems.sync = true;
    });

    afterEach(() => {
        MenuItemActions.loadItems.sync = false;
    });

    it('should call completed when it successfully loads the items', function (done) {

        let failedSpy = spyOn(MenuItemActions.loadItems, 'failed');
        let completedSpy = spyOn(MenuItemActions.loadItems, "completed");

        let data = [
            {id: 11, name: 'Salmon Sushi', price: 10.99},
            {id: 12, name: 'Salmon Nigiri', price: 11.99},
            {id: 13, name: 'Tuna Sushi', price: 12.99}
        ];

        mock.onGet('http://localhost:8080/menu/items').reply(200, data);

        MenuItemActions.loadItems();

        setTimeout(function () {
            expect(completedSpy).toHaveBeenCalledWith(data);
            expect(failedSpy).not.toHaveBeenCalled();
            done();
        }, 50);

    });

    it('should call failed when it fails to load the items', function (done) {

        let failedSpy = spyOn(MenuItemActions.loadItems, 'failed');
        let completedSpy = spyOn(MenuItemActions.loadItems, "completed");

        mock.onGet('http://localhost:8080/menu/items').reply(500, {});

        MenuItemActions.loadItems();

        setTimeout(function () {
            expect(failedSpy).toHaveBeenCalled();
            expect(completedSpy).not.toHaveBeenCalled();
            done();
        }, 50);

    });

});