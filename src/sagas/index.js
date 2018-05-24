import {
  put,
  takeEvery,
  takeLatest,
  all,
  select,
  fork,
  call,
  cancel,
  cancelled
} from 'redux-saga/effects';
import {
  requestStuff,
  longRequest
} from '../api/testApi';

import * as types from '../actions/types';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
let task;

function* bgTask2() {
  try {
    while (true) {
      console.log('task bg 2')
      yield delay(500)
    }
  } finally {
    if (yield cancelled())
    console.log('cancelled 2')
  }
}

function* bgTask() {
  try {
    while (true) {
      yield fork(bgTask2)
      const response = yield call(longRequest)
      console.log(response);
      yield delay(500)
    }
  } finally {
    if (yield cancelled())
    console.log('cancelled')
  }
}

function* reqStuff(data) {
  let response;

  if (data.param === "stuff") {
    // response = yield call(requestStuff)
    task = yield fork(bgTask)
  } else if (data.param === "long") {
    response = yield call(longRequest)
  } else {
    yield cancel(task)
  }
}

function* watchStuff() {
  yield takeEvery(types.REQUEST_STUFF, reqStuff);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchStuff()
  ]);
}