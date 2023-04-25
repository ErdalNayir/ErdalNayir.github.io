import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "cmmtSlc",
  initialState: {
    commentLines: {
      linkedln: "//",
      github: "//",
      cycamp: "//",
      eachecek: "//",
      webapi: "//",
      weather: "//",
      note: "//",
      mapDet: "//",
    },
    LinesText: {
      linkedln: "var result = infos.linkedln",
      github: "var result = infos.github",
      cycamp: "var result = infos.cycamp",
      eachecek: "var result = infos.eachecek",
      webapi: "var result = infos.webapi",
      weather: "var result = infos.weather",
      note: "var result = infos.stickyNote",
      mapDet: "var result = infos.mapDetective",
    },
  },
  reducers: {
    updateLine: {
      reducer: (state, action) => {
        state.commentLines[action.payload.key] = action.payload.value;
      },
    },
  },
});

export const { updateLine } = commentSlice.actions;
export default commentSlice.reducer;
