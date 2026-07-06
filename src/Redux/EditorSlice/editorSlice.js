import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "cmmtSlc",
  initialState: {
    commentLines: {
      linkedin: "//",
      github: "//",
      fastapiLib: "//",
      dotnetApi: "//",
      cqrsApi: "//",
      planlamaPro: "//",
      cycamp: "//",
      weather: "//",
    },
    LinesText: {
      linkedin: "var result = infos.linkedin",
      github: "var result = infos.github",
      fastapiLib: "var result = infos.fastapiLib",
      dotnetApi: "var result = infos.dotnetApi",
      cqrsApi: "var result = infos.cqrsApi",
      planlamaPro: "var result = infos.planlamaPro",
      cycamp: "var result = infos.cycamp",
      weather: "var result = infos.weather",
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
