import { createStore , combineReducers, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './reducers'


const persistConfig = { // configuration object for redux-persist
    key: 'root',
    version: 0,
    storage, // define which storage to use
    blacklist: ['navigation'],
    whitelist: ['navigation'] 
}

const reducer:any = combineReducers({
      //Reducers
      userReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)

const initialState = {}
const middleware:any = [Thunk]

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

const  persistor = persistStore(store)

export {store, persistor}