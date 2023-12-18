import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  SubscriptionCountList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const SubscriptionCountData = createAsyncThunk(
  "SubscriptionCountInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/users/subscription-count`,
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

export const SubscriptionCountSlice = createSlice({
  name: "subscriptionCountinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.SubscriptionCountList = {});
    },
  },
  extraReducers: {
    [SubscriptionCountData.pending]: (state, action) => {
      state.Loading = true;
    },
    [SubscriptionCountData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.SubscriptionCountList = action.payload.data.attributes;
    },
    [SubscriptionCountData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.SubscriptionCountList = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = SubscriptionCountSlice.actions;

export default SubscriptionCountSlice.reducer;
