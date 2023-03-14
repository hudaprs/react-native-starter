// React
import { memo, useCallback } from 'react'

// Components
import {
	AppWrapper,
	AppButton,
	appGetCounter,
	AppText,
	AppView,
	app_HANDLE_COUNTER,
	IAppSliceHandleCounterTypeEnum
} from '@/features/app'
import { StyledCentered } from './components'

// Hooks
import { useAppDispatch, useAppSelector } from '@/plugins'

const AppEntryPointScreen = memo(() => {
	// Dispatcher
	const dispatch = useAppDispatch()

	// Selector
	const counter = useAppSelector(appGetCounter)

	/**
	 * @description Counter handler
	 *
	 * @param {IAppSliceHandleCounterTypeEnum} type
	 *
	 * @return {void} void
	 */
	const onCounter = useCallback(
		(type: IAppSliceHandleCounterTypeEnum): void => {
			dispatch(app_HANDLE_COUNTER({ type }))
		},
		[dispatch]
	)

	return (
		<AppWrapper>
			<StyledCentered>
				<AppView
					style={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<AppView flexDirection='row' gap='10px' marginBottom={'20px'}>
						<AppButton
							onPress={(): void =>
								onCounter(IAppSliceHandleCounterTypeEnum.INCREASE)
							}
						>
							Increase
						</AppButton>
						<AppButton
							onPress={(): void =>
								onCounter(IAppSliceHandleCounterTypeEnum.DECREASE)
							}
						>
							Decrease
						</AppButton>
					</AppView>

					<AppView>
						<AppText>{counter}</AppText>
					</AppView>
				</AppView>
			</StyledCentered>
		</AppWrapper>
	)
})

AppEntryPointScreen.displayName = 'AppEntryPointScreen'

export { AppEntryPointScreen }
