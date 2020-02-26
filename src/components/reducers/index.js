import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as burgerMenu } from "redux-burger-menu";
import { reducer as formReducer } from "redux-form";

import phones from "../reducers/phones";
import phonesPage from "../reducers/phonesPage";
import phonePage from "../reducers/phonePage";
import basket from "../reducers/basket";
import categories from "../reducers/categories";
export default history =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage,
    phonePage,
    basket,
    categories,
    burgerMenu,
    form: formReducer
  });
