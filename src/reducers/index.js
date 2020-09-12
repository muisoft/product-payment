import { combineReducers } from 'redux';
import { payment } from './payment';
import { user } from './user';

export default () => combineReducers({
    payment: payment,
    user: user
})