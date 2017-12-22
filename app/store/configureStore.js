import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {persistCombineReducers, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import reducers from "./reducer";

const config = {
    key: 'root',
    blacklist: ["regimenInfo", "appNav"],
    storage,
};

const reducer = persistCombineReducers(config, reducers);

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
persistStore(store);

export default store;
