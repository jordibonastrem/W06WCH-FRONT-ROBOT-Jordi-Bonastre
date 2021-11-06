import { combineReducers } from "redux";
import robotReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotReducer,
});

export default rootReducer;
