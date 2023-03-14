export interface IAppSliceState {
	counter: number
}

export enum IAppSliceHandleCounterTypeEnum {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppSliceHandleCounterAttrs {
	type: IAppSliceHandleCounterTypeEnum
}
