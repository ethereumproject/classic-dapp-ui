import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

//export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* helloSaga() {
  //console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield call(delay, 2000)
  yield put({ type: 'INCREMENT' })
}

export function* incrementAsync2() {
  console.log("Enter noew")
  //yield call(delay, 2000)
  //yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync);
  //yield* takeEvery('FETCHDATA', incrementAsync2)
}

export function* watchIncrementAsync2() {
  //console.log("enter in")
  yield* takeEvery('FETCHDATA', fetchData)
}

export function* fetchData(action) {
  try {
    console.log("Enter in 1");
    const data = yield call(Api.fetchUser, action.payload.url);
    console.log("Enter in 2");
    yield put({type: "FETCH_SUCCEEDED", data});
  } catch (error) {
      console.log(error);
    //yield put({type: "FETCH_FAILED", error});
  }
}

function* watchFetchData() {
  yield* takeEvery('FETCH_REQUESTED', fetchData)
}

function* watchAndLog(getState) {
  yield* takeEvery('*', function* logger(action) {
    console.log('action', action)
    //console.log('state after', getState())
    //yield put({type: 'SHOW_CONGRATULATION'})
  })
}



// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    //watchIncrementAsync2(),
    //watchAndLog()
  ]
}
