import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  AdditionalMatchRequestList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const AdditionalMatchRequestData = createAsyncThunk(
  "AdditionalMatchRequestInfo",
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

export const AdditionalMatchRequestSlice = createSlice({
  name: "additionalmatchrequestinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.AdditionalMatchRequestList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [AdditionalMatchRequestData.pending]: (state, action) => {
      state.Loading = true;
    },
    [AdditionalMatchRequestData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.AdditionalMatchRequestList = action.payload.data.attributes.result;
      state.pagination = {"page":action.payload.data.attributes.page, "totalPages": action.payload.data.attributes.totalPages, "limit": action.payload.data.attributes.limit, "totalResults": action.payload.data.attributes.totalResults};
    },
    [AdditionalMatchRequestData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.AdditionalMatchRequestList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = AdditionalMatchRequestSlice.actions;

export default AdditionalMatchRequestSlice.reducer;
