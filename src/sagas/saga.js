import { takeLatest, takeEvery, put } from "redux-saga/effects";

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
} 

//Action from Saga to reducer
function* ageUpAsync() {
  //creating a async-like delay
  yield delay(3000);
  //creating a new SAGA action with its payload of value
  yield put({type: "AGE_UP_ASYNC", value: 1});
}

//Original action watched by Saga
export function* watchAgeUp(){
  yield takeLatest("AGE_UP", ageUpAsync);
  // yield takeEvery("AGE_UP", ageUpAsync)
}
