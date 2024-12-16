import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import counterReducer from "./reducer";

const rootReducer = combineReducers({
  themeReducer: themeReducer,
  counterReducer: counterReducer,
});

export default rootReducer;
