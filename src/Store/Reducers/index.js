import { combineReducers } from "redux";

import settingReducer from "./settingReducer";
import authReducer from "./AuthReducer";
const combined = combineReducers({
  settingReducer,
  authReducer,
});
export default combined;
