// App Features
import { APP_LANGUAGE } from '@/features/app'

export interface IAppSliceState {
	counter: number
	language: APP_LANGUAGE
}

export enum IAppSliceHandleCounterTypeEnum {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppSliceHandleCounterAttrs {
	type: IAppSliceHandleCounterTypeEnum
}
