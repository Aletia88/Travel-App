// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "apiSlice",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://bdg4jv85-3100.uks1.devtunnels.ms/" }),
//   // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3100" }),
//   // tagTypes: ['Trips'],
//   endpoints: (builder) => ({
//     getTrips: builder.query({
//       query: (query) => ({
//        url:  `/upcoming-trips/`,
//        params: query 
//       })
//     }),

//     getReport: builder.query({
//       query: (query) => ({
//        url:  `/upcoming-trips/getReport`,
//        params: query 
//       })
//     }),

//     getPrivateTrips: builder.query({
//       query: () => "/private-trips",
//     }),

//     getTrip: builder.query({
//       query: (id) => `/upcoming-trips/${id}`,
//     }),

//     // getImage: builder.query({
//     //   query: (imageId) => ({
//     //     url: `/upcoming-trips/download/${imageId}`,
//     //     method: "GET",
//     //   }),
//     //   queryFn: async ({ baseQuery, url }) => {
//     //     const response = await baseQuery(url, { responseType: "blob" });
//     //     const file = new Blob([response.data]);
//     //     const fileUrl = window.URL.createObjectURL(file);
//     //     // window.URL.crea/teObjectURL(new Blob([response.data]));
//     //     return { data: fileUrl };
//     //   },
//     // }),
//     updateTrip: builder.mutation({
//       query: ( {id, formData }) => {
//         // const formData = new FormData();

//         // formData.append("file", file);
//         // formData.append("jsonBody", JSON.stringify(jsonData));
//         return {
//           url: `/upcoming-trips/${id}`,
//           method: "PATCH",
//           body: formData,
//           // headers: {
//           //   "Content-Type": "multipart/form-data",
//           // },
//         };
//       },
//     }),
//     deleteTrip: builder.mutation({
//       query: (id) => ({
//         url: `upcoming-trips/${id.id}`,
//         method: "DELETE",
//       }),
//       // invalidatesTags: ['Trips'],
//     }),
//   }),
// });
// export const {
//   useGetTripsQuery,
//   useGetReportQuery,
//   useGetPrivateTripsQuery,
//   useGetTripQuery,
//   // useGetImageQuery,
//   useUpdateTripMutation,
//   useDeleteTripMutation,
// } = apiSlice;
