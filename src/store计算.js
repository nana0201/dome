import { createStore } from 'redux'

const store = createStore(function (state = 0, action) {


    switch (action.type) {
        case "changenum": return state + action.num;
        default: return state
    }
})
store.dispatch({
    type: "changenum",
    num: 1
});
console.log(store.getState());
store.dispatch({
    type: "changenum",
    num: 1
});
console.log(store.getState());
store.dispatch({
    type: "changenum",
    num: -3
})
console.log(store.getState());

export default store;
