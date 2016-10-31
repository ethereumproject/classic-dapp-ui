import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

import { helloSaga } from './sagas'
sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({type})

import MyAwesomeReactComponent from './MyAwesomeReactComponent';


function render() {
  ReactDOM.render(

      //<App />,
      <MyAwesomeReactComponent

          //value={store.getState()}
          onMouseOver1={() => action('INCREMENT')}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')}
          onFetchData={() => action('FETCHDATA')}

      />,

      /*
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onFetchData={() => action('FETCHDATA')}
    />,
    */


    document.getElementById('root')
  )
}

render()
store.subscribe(render)
