import {createStore,applyMiddleware} from "redux"
import { Reducer } from "./ToDoTask/Reducer"
import thunk from "redux-thunk"

let store = createStore(Reducer,applyMiddleware(thunk))

export default store