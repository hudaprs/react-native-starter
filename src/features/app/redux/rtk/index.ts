// Redux Toolkit
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// Env
import { API_BASE } from '@env'

// Plugins
// import { IRootState } from '@/plugins/redux/reducer'

const baseQuery = fetchBaseQuery({
	baseUrl: API_BASE,
	prepareHeaders(headers) {
		// const rootState = getState() as IRootState

		// Handle if you have any header send to the server
		// if (rootState.auth.auth_token.token) {
		//   headers.set('Authorization', `Bearer ${rootState.auth.auth_token.token}`)
		// }

		return headers
	}
})

/* NOTE: Open this if u want to refresh token */
// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   // wait until the mutex is available without locking it
//   await mutex.waitForUnlock()
//   let result = await baseQuery(args, api, extraOptions)
//   if (result.error && result.error.status === 401) {
//     // checking whether the mutex is locked
//     if (!mutex.isLocked()) {
//       const release = await mutex.acquire()
//       try {
//         const refreshResult = (await baseQuery(
//           '/auth/refresh-token',
//           api,
//           extraOptions
//         )) as { data: IAuthResponseToken }

//         if (refreshResult.data) {
//           api.dispatch(auth_SET_TOKEN(refreshResult.data?.result))

//           // retry the initial query
//           result = await baseQuery(args, api, extraOptions)
//         } else {
//           api.dispatch(auth_LOGOUT())
//         }
//       } catch (_) {
//         api.dispatch(auth_LOGOUT())
//       } finally {
//         // release must be called once the mutex should be released again.
//         release()
//       }
//     } else {
//       // wait until the mutex is available without locking it
//       await mutex.waitForUnlock()
//       result = await baseQuery(args, api, extraOptions)
//     }
//   }

//   return result
// }

export const emptySplitApi = createApi({
	// If you want to use interceptor
	// baseQuery: baseQueryWithReauth,
	baseQuery,
	endpoints: () => ({})
})
