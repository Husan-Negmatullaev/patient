import { combineReducers, createStore } from "redux";
import writeAnAnswer from "./writeAnAnswer";
const rootReducer = combineReducers({
  writeAnAnswer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

export const store = createStore(rootReducer);
