import { createStore, combineReducers } from 'redux'

// 用户名的 reducer
function list(state = [], action) {
    switch (action.type) {
        case "add":
            for (let i = 0; i < state.length; i++) {
                if (state[i].name === action.city.name) {
                    state.splice(i, 1)
                }
            }
            return [action.city, ...state]
        default: return state
    }
}
// 性别的 reducer
// function sex(state = "男", action) {
//     switch (action.type) {
//         case "changesex": return action.newsex
//         default: return state
//     }
// }
// // 年龄的 reducer
// function age(state = 18, action) {
//     switch (action.type) {
//         case "changeage": return action.newage
//         default: return state
//     }
// }

var bigReducer = combineReducers({
    list,
});

var store = createStore(bigReducer);

// 发一个通知
console.log(store.getState());


// createStore(function({
//     name: "xx",
//     sex: "女",
//     age: 18,
//     index: 1
// }){
//     switch(){

//     }
// })

export default store;


