import { createSlice } from "@reduxjs/toolkit";

const fonts = [
  "Arial",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Verdana",
];

const initialState = {
  fonts: fonts[0],
  fontSize: 16,
  fontColor: "#000000",
};

const styleSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    setFont(state, action) {
      state.fonts = action.payload;
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
    setFontColor(state, action) {
      state.fontColor = action.payload;
    },
    resetFormState(state) {
      return initialState;
    },
  },
});

export const { setFont, setFontSize, setFontColor, resetFormState } =
  styleSlice.actions;

export default styleSlice.reducer;
