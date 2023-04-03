// App Features
import { E_APP_LANGUAGE } from '@/features/app/constants'

export interface IAppSliceState {
	isInitialized: boolean
	counter: number
	language: E_APP_LANGUAGE
}

export enum EAppSliceHandleCounterType {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppSliceHandleCounterAttrs {
	type: EAppSliceHandleCounterType
}
