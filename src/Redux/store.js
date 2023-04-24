import { configureStore } from "@reduxjs/toolkit";
import { commentSlice } from "./EditorSlice/editorSlice";

export const store = configureStore({
  reducer: { cmmtSlc: commentSlice },
});
