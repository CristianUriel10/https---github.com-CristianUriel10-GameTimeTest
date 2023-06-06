// Libraries.
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Store.
import searchReducer from "./Search/search.reducer";

const middleware = [reduxThunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reducer = combineReducers({
  SearchReducer: searchReducer,
});

const persistConfig = {
  key: "root",
  debug: true,
  storage,
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(...middleware))
);
const persistor = persistStore(store, null, () => {});

export default { store, persistor };
