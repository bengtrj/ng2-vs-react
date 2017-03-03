'use strict';

import React from 'react';

const Main = (props) => {
    return (
      <div>
        <div className="content">
          {props.children}
        </div>
      </div>
    );
};

export default Main;