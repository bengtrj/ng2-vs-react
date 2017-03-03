'use strict';

import React from 'react';
var NumberFormat = require('react-number-format');

const MenuItem = (props) => {

    return (
        <div>
            <span className="badge">{props.item.name}</span>
            <NumberFormat displayType={'text'}
                          thousandSeparator={true}
                          decimalSeparator={true}
                          prefix={'€ '}
                          value={props.item.price} />
            <span className="button" onClick={props.onOrderClick(props.item)}>Order</span>
        </div>
    );

};

MenuItem.propTypes = {
    item: React.PropTypes.object,
    onOrderClick: React.PropTypes.func
};

export default MenuItem;