import ReactDOM from 'react-dom';
import routes from './config/routes';
import './index.css';

//render routes from routes.js on the root element in index.html
ReactDOM.render(
  routes,
  document.getElementById('root')
);
