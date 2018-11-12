import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import resultReducer from './store/reducers/result'
import counterReducer from './store/reducers/counter'
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const rootReducer= combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store= createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//Provider is a helper component, it allows store to inject into react component.
//For hooking up provider component with ourv store here, named store. 
registerServiceWorker();
