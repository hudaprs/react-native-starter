// Interfaces
import {
	IAppSliceHandleCounterAttrs,
	IAppSliceHandleCounterTypeEnum,
	IAppSliceState
} from './interfaces'

// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { IRootState } from '@/plugins/redux/reducer'

const initialState: IAppSliceState = {
	counter: 0
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		app_HANDLE_COUNTER: (
			state,
			{ payload }: PayloadAction<IAppSliceHandleCounterAttrs>
		): void => {
			if (payload.type === IAppSliceHandleCounterTypeEnum.INCREASE) {
				state.counter = state.counter += 1
			}

			if (payload.type === IAppSliceHandleCounterTypeEnum.DECREASE) {
				state.counter = state.counter -= 1
			}
		}
	}
})

// Actions / Mutations
export const { app_HANDLE_COUNTER } = appSlice.actions

// Getters
export const appGetCounter = (state: IRootState): number => state.app.counter

export default appSlice.reducer
