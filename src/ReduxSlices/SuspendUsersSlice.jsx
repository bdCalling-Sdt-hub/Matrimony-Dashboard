import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  SuspendUsersList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const SuspendUsersData = createAsyncThunk(
  "SuspendUsersInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/users/suspend`,
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

export const SuspendUsersSlice = createSlice({
  name: "suspendUsersinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.SuspendUsersList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [SuspendUsersData.pending]: (state, action) => {
      state.Loading = true;
    },
    [SuspendUsersData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.SuspendUsersList = action.payload.data.attributes.results;
      state.pagination = {"page":action.payload.data.attributes.page, "totalPages": action.payload.data.attributes.totalPages, "limit": action.payload.data.attributes.limit, "totalResults": action.payload.data.attributes.totalResults};

    },
    [SuspendUsersData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.SuspendUsersList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = SuspendUsersSlice.actions;

export default SuspendUsersSlice.reducer;
