import {combineReducers, createStore} from "redux";

import authStore from "./authStore";
import testStore from "./testStore";

const rootReducer = combineReducers({
    authStore: authStore,
    testStore: testStore,
});

export default createStore(rootReducer);
