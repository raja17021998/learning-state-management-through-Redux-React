export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () =>{
    // we will return an action i.e. a javascript object

    return {
        type: INCREMENT
    };
};
export const decrement = () =>{
    // we will return an action i.e. a javascript object

    return {
        type: DECREMENT
    };
};
export const add = (value) =>{
    // we will return an action i.e. a javascript object

    return {
        type: ADD,
        value: value
    };
};

export const subtract = (value) =>{
    // we will return an action i.e. a javascript object

    return {
        type: SUBTRACT,
        value: value
    };
};
export const storeResult = (res) =>{
    // we will return an action i.e. a javascript object

    return {
        type: STORE_RESULT,
        result: res

    };
};
export const deleteResult = (resElId) =>{
    // we will return an action i.e. a javascript object

    return {
        type: DELETE_RESULT,
        resultElId: resElId
    };
};

// payload is the value attribute in matchStateToProps() in Counter.js

