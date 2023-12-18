import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  AllNotifications: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const NotificationsData = createAsyncThunk(
  "notificationsData",
  async (value, thunkAPI) => {
    try {
      console.log("slice page", value);
      let response = await baseAxios.get(
        `notification/admin?page=${!value?.page?1:value?.page}&sortBy=createdAt:desc`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("check notifications", response.data);
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

export const NotificationsSlice = createSlice({
  name: "notificationsdata",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.AllNotifications = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [NotificationsData.pending]: (state, action) => {
      state.Loading = true;
    },
    [NotificationsData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.AllNotifications = action.payload.data.attributes.results;
      //   console.log(state.AllNotifications);
      state.pagination = {"page":action.payload.data.attributes.page, "totalPages": action.payload.data.attributes.totalPages, "limit": action.payload.data.attributes.limit, "totalResults": action.payload.data.attributes.totalResults};
    },
    [NotificationsData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.AllNotifications = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = NotificationsSlice.actions;

export default NotificationsSlice.reducer;
