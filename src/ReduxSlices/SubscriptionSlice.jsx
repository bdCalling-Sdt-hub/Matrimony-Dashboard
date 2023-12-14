import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  SubscriptionList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const SubscriptionData = createAsyncThunk(
  "SubscriptionInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/subscription`,
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

export const SubscriptionSlice = createSlice({
  name: "subscriptioninfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.SubscriptionList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [SubscriptionData.pending]: (state, action) => {
      state.Loading = true;
    },
    [SubscriptionData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.SubscriptionList = action.payload.data.attributes.result.results;
      state.pagination = {"page":action.payload.data.attributes.page, "totalPages": action.payload.data.attributes.totalPages, "limit": action.payload.data.attributes.limit, "totalResults": action.payload.data.attributes.totalResults};
    },
    [SubscriptionData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.SubscriptionList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = SubscriptionSlice.actions;

export default SubscriptionSlice.reducer;
