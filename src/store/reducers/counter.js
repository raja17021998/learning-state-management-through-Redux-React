import * as actionTypes from '../actions';

const initialState={
    counter: 0,
    

}
const reducer= (state= initialState, action) => {

    switch(action.type){

        case actionTypes.INCREMENT:
        // const newState= Object.assign({},state);
        // newState.counter= state.counter+1
        // return newState;


        // The above thing is not used because if we do so, we are mutating the old state here. Instead what we do is, we copy the old state. We use Object.assign({},state) method, which copies the contents of the old object and clones it into a new object, which is technically a different object. Now here if you change any property then you are doing it in the new state and not in the old state. There you can use the spread operator to distribute the old state's properties in the new state. 

        return{
            ...state,
            counter: state.counter+1
        }


       
        case actionTypes.DECREMENT:
        return{
            ...state,
            counter: state.counter-1
        }
        case actionTypes.ADD:
        return{
            ...state,
            counter: state.counter+action.value
        }
        case actionTypes.SUBTRACT:
        return{
            ...state,
            counter: state.counter-action.value
        }

        
        
    }

    // if we want to dispatch a type which is not given here, then current state is returned, with the help of below statement
    return state   
    };
    
export default reducer;



