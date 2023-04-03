// Interfaces
// import { IAppResponse, IAppResponsePagination } from '@/features/app/interfaces'
import { ITodo } from './todo.type'

// NOTE: If you integrating to BE, recommended to use response wrapper
// export type ITodoResponseList = IAppResponsePagination<ITodo[]>
// export type ITodoResponseDetail = IAppResponse<ITodo>

export type ITodoResponseList = ITodo[]
export type ITodoResponseDetail = ITodo
