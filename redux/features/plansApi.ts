import { baseApi } from "@/redux/api/baseApi";

export const plansApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET
    getPlans: builder.query({
      query: () => ({
        url: "/plan",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),

    // ✅ Single Plan Update
    updatePlan: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/plan/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const {
  useGetPlansQuery,
  useUpdatePlanMutation,
} = plansApi;