import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { payment } from './reducers/payment';
import { watchCreateCheckoutSession } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const composedEnhancer = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers

);
export const store = createStore(payment, composedEnhancer);

sagaMiddleware.run(watchCreateCheckoutSession);