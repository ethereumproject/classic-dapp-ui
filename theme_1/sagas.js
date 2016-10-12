import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

//export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchData(action) {
  try {
    console.log("Enter in ");
    const data = yield call(Api.fetchUser, action.payload.url);
    yield put({type: "FETCH_SUCCEEDED", data});
  } catch (error) {
    yield put({type: "FETCH_FAILED", error});
  }
}

function* watchFetchData() {
  yield* takeEvery('FETCH_REQUESTED', fetchData)
}


// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
