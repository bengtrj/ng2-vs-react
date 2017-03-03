'use strict';

import React from "react";
import Menu from "../components/menu.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Handy Menu'
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Menu />
            </div>
        );
    }
}

export default App;