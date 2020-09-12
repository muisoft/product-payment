
import { put, call, takeEvery } from 'redux-saga/effects';
import * as ActionType from '../actions/ActionType';
import { isSuccessful, isNotSuccessful } from '../actions';

function* createCheckoutSession(){
    try {
        const message = yield call(async () => {
            const res = await fetch('/checkout-session');
            return await res.json();
        });
        yield put(isSuccessful(message));
    } catch (error) {
        console.log(error);
        yield put(isNotSuccessful())
    }
}
export function* watchCreateCheckoutSession(){
  yield takeEvery(ActionType.CREATE_CHECKOUT_SESSION, createCheckoutSession);
}

