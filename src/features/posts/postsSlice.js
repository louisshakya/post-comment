import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux ToolKit",
    name: "Jane Doe",
    content:
      "Coding is fun........................................................................................",
    date: sub(new Date(), { minutes: 10000 }).toISOString(),
  },
  {
    id: "2",
    title: "Pizza",
    name: "Bruce Wayne",
    content: "Pineapple pizza is good!",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, name, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            name,
            content,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
