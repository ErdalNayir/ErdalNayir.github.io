import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "commentLines",
  initialState: {
    commentLines: [2, 2, 2, 2, 2, 2, 2, 2],
  },
  reducers: {
    reduceLine: {
      reducer: (state, action) => {
        state.commentLines[action.payload] =
          state.commentLines[action.payload] - 1;
      },
    },
    increaseLine: {
      reducer: (state, action) => {
        state.commentLines[action.payload] =
          state.commentLines[action.payload] + 1;
      },
    },
  },
});

export const { reduceLine, increaseLine } = commentSlice.actions;
export default commentSlice.reducer;
