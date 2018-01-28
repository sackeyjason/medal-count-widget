import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MedalCount from './containers/MedalCount';

function MedalCountWidget(element_id, sort) {
  ReactDOM.render(<MedalCount sort={sort}/>,
    document.getElementById(element_id));
}
window.MedalCountWidget = MedalCountWidget;
