import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentSlice from "./EditorSlice/editorSlice";

const reducer = combineReducers({
  cmmtSlc: commentSlice,
});

const store = configureStore({ reducer });

export default store;
