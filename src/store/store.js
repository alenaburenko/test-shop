import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducerFav from "./favorite/reducerFav";
import reducerGoods from "./goods/reducerGoods";

const localStorageSync = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === "ADD_FAVORITE" || action.type === "REMOVE_FAVORITE") {
    const { favorites } = store.getState();
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  return result;
};

const rootReducer = combineReducers({
  goods: reducerGoods,
  favorites: reducerFav,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageSync))
);

export default store;
