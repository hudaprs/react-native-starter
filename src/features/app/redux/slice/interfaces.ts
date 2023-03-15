// App Features
import { APP_LANGUAGE } from '@/features/app/constants'

export interface IAppSliceState {
	counter: number
	language: APP_LANGUAGE
}

export enum EAppSliceHandleCounterType {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppSliceHandleCounterAttrs {
	type: EAppSliceHandleCounterType
}
