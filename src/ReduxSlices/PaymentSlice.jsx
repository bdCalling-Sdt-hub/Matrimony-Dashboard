import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  PaymentList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const PaymentData = createAsyncThunk(
  "PaymentInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/payment/total`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("check payment",response.data.data.attributes);
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

export const PaymentSlice = createSlice({
  name: "paymentinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.PaymentList = {}), (state.pagination = {});
    },
  },
  extraReducers: {
    [PaymentData.pending]: (state, action) => {
      state.Loading = true;
    },
    [PaymentData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.PaymentList = action.payload.data.attributes;
      console.log("state payment",state.PaymentList);
    },
    [PaymentData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.PaymentList = {}), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = PaymentSlice.actions;

export default PaymentSlice.reducer;
