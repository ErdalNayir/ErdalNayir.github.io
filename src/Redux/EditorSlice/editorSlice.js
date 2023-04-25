import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "commentLines",
  initialState: {
    commentLines: {
      linkedln: "// var result = infos.linkedln",
      github: "// var result = infos.github",
      cycamp: "// var result = infos.cycamp",
      eachecek: "// var result = infos.eachecek",
      webapi: "// var result = infos.webapi",
      weather: "// var result = infos.weather",
      game: "// var result = infos.game",
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

export const { reduceLine, increaseLine } = commentSlice.actions;
export default commentSlice.reducer;
