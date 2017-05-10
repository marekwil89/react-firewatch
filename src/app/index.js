import React from 'react';
import ReactDOM from 'react-dom';

require('./assets/styles/main.sass');

import Subscribe from './components/Subscribe';
import Content from './components/Content';

ReactDOM.render((
  <div>
    <Subscribe />
    <Content />
  </div>
), document.getElementById('app'));