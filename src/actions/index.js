import * as ActionType from './ActionType';

export const isSuccessful = (payload) => {
    return {
        type: ActionType.ON_RESULT,
        payload
    }
}
export const isNotSuccessful = () => {
    return {
        type: ActionType.ON_ERROR
    }
}
export const createCheckout = () => {
  return {
      type: ActionType.CREATE_CHECKOUT_SESSION
  }
}