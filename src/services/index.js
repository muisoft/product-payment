
import * as ActionType from '../actions/ActionType';


const getData = (url, payload) => {
    return fetch(url)
    .then(res => res.json())
    .then(data => data);
}


