  import { baseApi } from "@/redux/api/baseApi";

  export const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getMySubscription: builder.query({
        query: () => ({
          url: "/subscription/me",
          method: "GET",
        }),
      }),
    }),
  });

  export const { useGetMySubscriptionQuery } = subscriptionApi;
