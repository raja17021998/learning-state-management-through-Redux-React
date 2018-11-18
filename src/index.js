import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
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

const logger = state =>{
    // logger is a function that returns another function. This other function will receive another function as argument, which is a function that you will execute to let the action continue it's journey onto the reducer.This next will also be executed by redux again. This function returns another function, that receives the action as the argument, you dispatched as in input

    return next => {
        return action =>{
            console.log('[...MiddleWare...] dispatching',action);

            // this (down) will now let the action continue to the reducer, you need to pass action as an argument. Theoritically you can chanvge the action in the middleware. You can also store the result of the call in a constant, which you need to return in this inner function.

            const result=next(action);
            console.log('[...MiddleWare...] next state',store.getState());
            return result;
        }
    }
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(rootReducer,composeEnhancers(applyMiddleware(logger)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//Provider is a helper component, it allows store to inject into react component.
//For hooking up provider component with ourv store here, named store. 
registerServiceWorker();
