import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.data.attributes.tokens.access.token,
              user: result.data.data.attributes.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.data.attributes.tokens.access.token,
              user: result.data.data.attributes.user,
            })
          );
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
