import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  UserInfoList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const UserInformationData = createAsyncThunk(
  "UserInfo",
  async (value, thunkAPI) => {
    console.log(value.gender)
    try {
      let response = await baseAxios.get(
        `/users?limit=10&page=${value.page}&gender=${value.gender}`,
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
        "You are not authorised to sign in now" === error.response.data.message || "Error authorization" === error.response.data.message
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

export const UserInformationSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.UserInfoList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [UserInformationData.pending]: (state, action) => {
      state.Loading = true;
    },
    [UserInformationData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.UserInfoList = action.payload.data.attributes.results;
      state.pagination = action.payload.data.attributes.pagination;
    },
    [UserInformationData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.UserInfoList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = UserInformationSlice.actions;

export default UserInformationSlice.reducer;
