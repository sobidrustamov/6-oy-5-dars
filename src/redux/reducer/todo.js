import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, task: [...state.task, action.payload] };
    },
    delete: (state, action) => {
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export default todoReducer.reducer;
export const { add } = todoReducer.actions;
