import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "cmmtSlc",
  initialState: {
    commentLines: {
      linkedln: "//",
      planlamaPro: "//",
      cycamp: "//",
      cqrsApi: "//",
      webapi: "//",
      weather: "//",
      note: "//",
      mapDet: "//",
    },
    LinesText: {
      linkedln: "var result = infos.linkedln",
      planlamaPro: "var result = infos.planlamaPro",
      cycamp: "var result = infos.cycamp",
      cqrsApi: "var result = infos.cqrsApi",
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
