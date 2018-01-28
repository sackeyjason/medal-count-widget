import ReactDOM from 'react-dom';
import MedalCount from './containers/MedalCount';

window.MedalCountWidget = function MedalCountWidget(element_id, sort) {
  ReactDOM.render(<MedalCount sort={sort}/>,
    document.getElementById(element_id));
}
