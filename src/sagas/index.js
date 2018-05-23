import {
  put,
  takeEvery,
  takeLatest,
  all,
  select,
  fork,
  call
} from 'redux-saga/effects';
import {
  getPost,
  downloadFile
} from '../api/testApi';

import * as types from '../actions/types';

function* reqStuff() {
  const response = yield call(getPost)

  console.log(response)
}

function* watchStuff() {
  yield takeLatest(types.REQUEST_STUFF, reqStuff);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchStuff()
  ]);
}