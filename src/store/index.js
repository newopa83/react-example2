import {combineReducers, createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authStore from "./authStore";
import testStore from "./testStore";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    authStore: authStore,
    testStore: testStore,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
}
