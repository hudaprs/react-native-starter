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

// App Features
import { APP_LANGUAGE } from '@/features/app/constants'

// i18n
import i18n from 'i18next'

const initialState: IAppSliceState = {
	counter: 0,
	language: APP_LANGUAGE.EN
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
		},
		app_HANDLE_LANGUAGE: (
			state,
			{ payload }: PayloadAction<APP_LANGUAGE>
		): void => {
			state.language = payload
			i18n.changeLanguage(payload)
		}
	}
})

// Actions / Mutations
export const { app_HANDLE_COUNTER, app_HANDLE_LANGUAGE } = appSlice.actions

// Getters
export const appGetCounter = (state: IRootState): number => state.app.counter
export const appGetLanguage = (state: IRootState): APP_LANGUAGE =>
	state.app.language

export default appSlice.reducer
