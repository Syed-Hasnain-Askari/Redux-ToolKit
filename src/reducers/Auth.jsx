import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
]
export const Auth = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      const { username, password } = action.payload;
      const userIndex = state.findIndex(user => user.username === username);
      if (userIndex !== -1) {
        // Update the password for the matching user
        return [
          ...state.slice(0, userIndex),
          { username: username, password: password },
          ...state.slice(userIndex + 1)
        ];
      } else {
        // Add a new user to the state
        return [...state, { username: username, password: password }];
      }
    },
    changeName: (state, action) => {
      const { username } = action.payload;
      console.log(username);
      state[0].username = username;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeLogin,changeName } = Auth.actions;

export default Auth.reducer;
