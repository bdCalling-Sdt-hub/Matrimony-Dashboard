import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  ReportedUserList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const ReportedUserData = createAsyncThunk(
  "ReportedUserInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/report`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
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

export const ReportedUserSlice = createSlice({
  name: "reportedUserinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.ReportedUserList = {}), (state.pagination = {});
    },
  },
  extraReducers: {
    [ReportedUserData.pending]: (state, action) => {
      state.Loading = true;
    },
    [ReportedUserData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.ReportedUserList = action.payload.data.attributes.data;
      state.pagination = {"page":action.payload.data.attributes.page, "totalPages": action.payload.data.attributes.totalPages, "limit": action.payload.data.attributes.limit, "totalResults": action.payload.data.attributes.totalResults};
    },
    [ReportedUserData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.ReportedUserList = {}), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = ReportedUserSlice.actions;

export default ReportedUserSlice.reducer;
