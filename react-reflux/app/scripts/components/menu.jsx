'use strict';

import React from 'react';
import MenuItem from './menu-item.jsx'
import MenuItemStore from '../stores/menu-item-store'
import MenuItemActions from '../actions/menu-item-actions'

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.unsubscribe = MenuItemStore.listen(this.onStatusChange.bind(this));
        MenuItemActions.loadItems();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onStatusChange(state) {
        this.setState(state);
    }

    _addItemToChart(item) {

    }

    _getItemLayout(item) {
        return (
            <MenuItem key={item.id} item={item} onOrderClick={this._addItemToChart} />
        );
    }

    render() {

        let items = this.state.items.map(item => this._getItemLayout(item));

        return (
            <div>
                <h2>Lunch Menu</h2>
                <ul className="items">
                    {items}
                </ul>
            </div>
        );

    }

};

Menu.propTypes = {
    loading: React.PropTypes.bool,
    items: React.PropTypes.array,
    onOrderClick: React.PropTypes.func
};

export default Menu;