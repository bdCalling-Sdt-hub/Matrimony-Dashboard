import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  LoginActivitiesList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const LoginActivitiesData = createAsyncThunk(
  "LoginActivitiesInfo",
  async (value, thunkAPI) => {
    console.log(value.gender)
    try {
      let response = await baseAxios.get(
        `/additional-match-requests`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (
        "You are not authorised to sign in now" === error.response.data.message || "You are already signed out" === error.response.data.message
      ) {
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");
      }
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const LoginActivitiesSlice = createSlice({
  name: "loginActivitiesinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.LoginActivitiesList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [LoginActivitiesData.pending]: (state, action) => {
      state.Loading = true;
    },
    [LoginActivitiesData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.LoginActivitiesList = action.payload.data.attributes.result;
      state.pagination = {"page":action.payload.data.attributes.page, "totalPages": action.payload.data.attributes.totalPages, "limit": action.payload.data.attributes.limit, "totalResults": action.payload.data.attributes.totalResults};
    },
    [LoginActivitiesData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.LoginActivitiesList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = LoginActivitiesSlice.actions;

export default LoginActivitiesSlice.reducer;
