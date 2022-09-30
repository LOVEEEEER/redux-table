import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitItems from "./items";

//Создаем корневой Reducer с помощью combineReducers
const rootReducer = combineReducers({
  toolkit: toolkitItems,
});
// Создаем store. В index мы настраиваем,
// И заносим в store, далее store идет в index.
export const store = configureStore({
  reducer: rootReducer,
});
