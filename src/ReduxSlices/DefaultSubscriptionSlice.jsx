import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  DefaultSubscriptionList: [],
};

let token = localStorage.getItem("token");

export const DefaultSubscriptionData = createAsyncThunk(
  "DefaultSubscriptionInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/subscription/default`,
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

export const DefaultSubscriptionSlice = createSlice({
  name: "defaultsubscriptioninfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.DefaultSubscriptionList = []);
    },
  },
  extraReducers: {
    [DefaultSubscriptionData.pending]: (state, action) => {
      state.Loading = true;
    },
    [DefaultSubscriptionData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.DefaultSubscriptionList = action.payload.data.attributes;
    },
    [DefaultSubscriptionData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.DefaultSubscriptionList = []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = DefaultSubscriptionSlice.actions;

export default DefaultSubscriptionSlice.reducer;
