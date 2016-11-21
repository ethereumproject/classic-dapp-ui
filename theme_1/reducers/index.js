import { combineReducers } from 'redux'

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state + 1);
            return state + 1;
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state
        case 'DECREMENT':
            console.log(state - 1);
            return state - 1;
        case 'FETCHDATA':
            return state - 100;
        default:
            //console.log("KK")
            return state
    }
}


export default combineReducers({
    todos,
    counter
})