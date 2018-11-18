import React, { Component } from 'react';
import { connect } from 'react-redux';
// connect is a function that returns a  higher order component used in export
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import reducer from '../../store/reducer';

// We are using actionCreators
//import * as actionTypes from '../../store/actions/actions';
 
// import { increment, delete_result } from '../../store/actions/actions';
// Now we import everything as actionCreators
import * as actionCreators from '../../store/actions/actions';


// increment is a function


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked= 
                {this.props.onAddCounter}/>
                <CounterControl label="Substract" clicked= 
                {this.props.onSubstractCounter}/>
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                {/* The idea is when we click store result,then I simply add my current counter value to result list here. For that we will dispatch an action whenever the above button is clicked and then push this new result in the result array, update the array with it and take the current counter as input. Additionally if we click one of these results i.e. one of these list items, we want to remove it from the array */}
                <ul>
                    {this.props.storedResults.map(strResult =>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        // This state is actually the initialState in reducer.js (Give me the value of counter of global state managed by redux, and give it to me in the form of a property caled as ctr.)
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubstractCounter: () => dispatch(actionCreators.subtract(10)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
        // You pass an id argument, and send it along with action
        // We dont need to pass payLoad because since ctr part of our application state, we will have access to the reducer later. 

        
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter); 
// which slices of the container we want to connect and what actions to dispatch


// You can dispatch actions, which you dont handle in the reducer.

// Here since we have only one reducer, so all actions make it through that reducer.