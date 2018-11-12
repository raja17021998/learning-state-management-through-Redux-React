import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './store/reducer'
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store= createStore(reducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//Provider is a helper component, it allows store to inject into react component.
registerServiceWorker();
