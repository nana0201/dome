import { createStore } from 'redux'
import { log } from './api/api';
const store = createStore(function (state, action) {


    switch (action.type) {
        case "changename": return action.username;
        default: return "张三"
    }
})
var a = {
    type: "changename",
    username: "李四"
}
console.log(store.getState());
store.dispatch(a)
console.log(store.getState());
store.dispatch({
    type: "changename",
    username: "2"
})
console.log(store.getState());

export default store;
