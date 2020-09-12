import * as ActionType from '../actions/ActionType';

const initial = {
    products: [],
    label: "",
    message: "",
    error: ""

}

export const payment = (state = initial, action) => {
    switch (action.type) {
        case ActionType.ON_RESULT:
            return {
                //products: action.payload
                message: action.payload.message
            }
        case ActionType.ON_ERROR:
            return {
                error: "Try again later"
            }
        default:
            return state;
    }
} 