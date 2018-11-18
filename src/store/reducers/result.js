import * as actionTypes from '../actions/actions';

const initialState={
    
    results: []

}
const reducer= (state= initialState, action) => {

    switch(action.type){

 
        case actionTypes.STORE_RESULT:
        return{
            ...state,
            // results: state.results.concat({id: new Date(), value: state.counter}),
            // Concat is the immutable way of manipulating the array & don't use push() function

            // Now since we have splitted our reducers, according to code logics, we need to change the way our results get executed
            results: state.results.concat({id: new Date(), value: action.result})
        }
        case actionTypes.DELETE_RESULT:


        // const id=2;
        // const newArray=[...state.results]



        // we create a new array and distribute all the properties of the old array into a new array. If the elements in state array were objects,they still point to the objects as they were before, so if you change one of the elements themselves,just creating a new array like this isn't enough. If you just plan on removing an object though, that is okay because you don't toch the object remove it from the array.


        //newArray.splice(id,1)


        const upadtedArray= state.results.filter(result=>result.id !==action.resultElId );
        // filter() returns a new array, doesnt touch the old one, returns a new one. It takes a function as an input, and is executed on each element in the array and determines whether this element fulfils a certain condition to make it to the new array just returned by filter() or not

        // It is a new array which returns true fo all elements, which have an id not equal to the id, we have passed through action

        return{
            ...state,
            results: upadtedArray
            // this is copy of the old array but updated one.
            
            // Concat is the immutable way of manipulating the array & don't use push() function
            
        }
        
        
    }

    // if we want to dispatch a type which is not given here, then current state is returned, with the help of below statement
    return state   
    };
    
export default reducer;



