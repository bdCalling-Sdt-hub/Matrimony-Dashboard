import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    dashboard: builder.query({
      query: () => ({
        url: "users/subscription-count",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation } = dashboardApi;
