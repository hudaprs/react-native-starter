export interface IAppCommonLoading {
	isDefaultLoading: boolean
	isCreateEditLoading: boolean
	isDeleteLoading: boolean
	isDetailLoading: boolean
}

export interface IAppCommonPagination<T extends unknown[]> {
	limit: number
	page: number
	sort: string
	totalRows: number
	totalPages: number
	rows: T
}

export interface IAppCommonPaginationQuery {
	limit: number
	page: number
	sort: string
}

export type TAppCommonPagination = 'limit' | 'page' | 'sort'
