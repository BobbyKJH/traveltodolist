import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    dis: "flex",
    select: "none",
  },
  reducers: {
    // 올림픽
    show: (state) => {
      if (state.dis === "flex") {
        state.dis = "none";
      } else {
        state.dis = "flex";
      }
    },

    selected: (state) => {
      if (state.select === "none") {
        state.select = "block";
      } else {
        state.select = "none";
      }
    },
  },
});

export const {
  increament,
  decreament,
  increamentByAmount,
  firstName,
  show,
  selected,
} = counterSlice.actions;

export default counterSlice.reducer;

// export default nameSlice.reducer
