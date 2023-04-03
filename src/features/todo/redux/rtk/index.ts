// Interfaces
import {
	ITodoAttrsIndex,
	ITodoAttrsStore,
	ITodoAttrsShow,
	ITodoAttrsUpdate,
	ITodoAttrsDestroy
} from '@/features/todo/types/attrs.type'
import {
	ITodoResponseList,
	ITodoResponseDetail
} from '@/features/todo/types/response.type'

// Rtk
import { emptySplitApi } from '@/features/app/redux'

export const todoApi = emptySplitApi.injectEndpoints({
	endpoints: builder => ({
		todo_index: builder.query<ITodoResponseList, ITodoAttrsIndex | void>({
			query: payload => ({
				url: '/todos',
				params: payload?.params
			})
		}),
		todo_show: builder.mutation<ITodoResponseDetail, ITodoAttrsShow>({
			query: payload => `/todos/${payload.params.id}`
		}),
		todo_store: builder.mutation<ITodoResponseDetail, ITodoAttrsStore>({
			query: payload => ({
				url: `/todos`,
				method: 'POST',
				body: payload.body
			})
		}),
		todo_update: builder.mutation<ITodoResponseDetail, ITodoAttrsUpdate>({
			query: payload => ({
				url: `/todos/${payload.params.id}`,
				method: 'PATCH',
				body: payload.body
			})
		}),
		todo_destroy: builder.mutation<ITodoResponseDetail, ITodoAttrsDestroy>({
			query: payload => ({
				url: `/todos/${payload.params.id}`,
				method: 'DELETE'
			})
		})
	}),
	overrideExisting: false
})

export const {
	useLazyTodo_indexQuery,
	useTodo_showMutation,
	useTodo_storeMutation,
	useTodo_updateMutation,
	useTodo_destroyMutation
} = todoApi
