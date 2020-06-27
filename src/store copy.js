import { createStore, combineReducers } from 'redux'

function name(state = '小米', action) {
    switch (action.type) {
        case "changename": return action.newname;
        default: return state
    }
}
function sex(state = '女', action) {
    switch (action.type) {
        case "changesex": return action.newsex;
        default: return state
    }
}
function age(state = 22, action) {
    switch (action.type) {
        case "changeage": return action.newage;
        default: return state
    }
}
var bigReducer = combineReducers({
    name,
    sex,
    age
});
var store = createStore(bigReducer);

store.dispatch({
    type: "changename",
    newname: '明明'
});

console.log(store.getState());
store.dispatch({
    type: "changesex",
    newsex: '男'
});

console.log(store.getState());
store.dispatch({
    type: "changeage",
    newage: 18
})

console.log(store.getState());

export default store;
