'use strict';

import Reflux from 'reflux';
import axios from 'axios';

const MenuItemActions = Reflux.createActions({
    'loadItems': {
        asyncResult: true
    }
});

MenuItemActions.loadItems.listen(function () {
    var action = this;

    axios.get('http://localhost:8080/menu/items').then(function (request) {
        action.completed(request.data);
    }).catch(function(e) {
        action.failed();
    });

});

export default MenuItemActions;