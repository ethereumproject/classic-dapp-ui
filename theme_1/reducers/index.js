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
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}


export default combineReducers({
    todos,
    counter
})