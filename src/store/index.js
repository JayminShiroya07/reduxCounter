import { createStore } from 'redux';

const initialState = {counter: 0, showCounter: true};

const counterReducer = (state = initialState , action) => {
    // if(action.type === 'increment'){
    //     return {
    //         counter: state.counter +1,
    //         showCounter: state.showCounter
    //     }
    // }

    // if(action.type === 'decrement'){
    //     return {
    //         counter : state.counter -1,
    //         showCounter: state.showCounter
    //     }
    // }

    // if(action.type === 'increase'){
    //     return {
    //         counter : state.counter + action.value,
    //         showCounter: state.showCounter
    //     }
    // }

    switch(action.type){
        case 'increase' : 
            return {
                counter : state.counter + action.value,
                showCounter: state.showCounter
            }
        case 'decrement' :
            return {
                counter : state.counter -1,
                showCounter: state.showCounter
            }
        case 'increment' :
            return {
                counter: state.counter +1,
                showCounter: state.showCounter
            }
        case 'toggleCounter' :
            return {
                counter: state.counter,
                showCounter: !state.showCounter
            }
        default :
            return state;
    }
}

const store = createStore(counterReducer);

export default store;