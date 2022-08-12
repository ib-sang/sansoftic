import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import userReducer from './User/user.reducer';
import layoutReducer from './Layout/layout.reducer';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer =  combineReducers({
    layout: layoutReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer)