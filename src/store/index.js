import { createStore } from "redux";
import reducers from "./reducers"; // Se refere ao combineReducers
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const composer =
//   process.env.NODE_ENV === 'development'
//     ? compose(applyMiddleware(...[]), console.tron.createEnhancer())
//     : applyMiddleware(...[]);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer); //,composer
const persistor = persistStore(store);
export { store, persistor };
