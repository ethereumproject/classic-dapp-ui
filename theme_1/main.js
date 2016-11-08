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
      /*
      <MyAwesomeReactComponent

      />,
      */


    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onFetchData={() => action('FETCHDATA')}
    />,



    document.getElementById('root')
  )
}

render();

//增加store.subscribe
//Add store.subscribe
store.subscribe(render);


/*
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


 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import MyAwesomeReactComponent from './MyAwesomeReactComponent';

 const App = () => (
 <MuiThemeProvider>
 <MyAwesomeReactComponent />
 </MuiThemeProvider>
 );





 function render() {
 ReactDOM.render(

 //<App />,

 <Counter
 value={store.getState()}
 onIncrement={() => action('INCREMENT')}
 onDecrement={() => action('DECREMENT')}
 onIncrementAsync={() => action('INCREMENT_ASYNC')}
 onFetchData={() => action('FETCHDATA')}

 />,

 document.getElementById('root')
 )
 }

 render()
 store.subscribe(render)

 */