import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  VisitorsList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const VisitorsData = createAsyncThunk(
  "VisitorsInfo",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(
        `/visitors`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("check visitors",response.data.data.attributes);
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

export const VisitorsSlice = createSlice({
  name: "visitorsinfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.VisitorsList = {}), (state.pagination = {});
    },
  },
  extraReducers: {
    [VisitorsData.pending]: (state, action) => {
      state.Loading = true;
    },
    [VisitorsData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.VisitorsList = action.payload.data.attributes;
      console.log("state visitors",state.VisitorsList);
    },
    [VisitorsData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.VisitorsList = {}), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = VisitorsSlice.actions;

export default VisitorsSlice.reducer;
