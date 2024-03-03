// store.ts
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistedReducer from "./authDuck";

const rootReducer = combineReducers({
  auth: persistedReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
