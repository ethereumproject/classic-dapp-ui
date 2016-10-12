/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onFetchData }) =>(
    <div>
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
            Increment after 1 second
        </button>
        <button onClick={onFetchData}>
            FetchData
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>
);

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired,
    onFetchData : PropTypes.func.isRequired
}

export default Counter
