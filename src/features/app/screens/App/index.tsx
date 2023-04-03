// React
import { memo, useCallback } from 'react'

// Components
import {
	AppWrapper,
	AppButton,
	AppText,
	AppView
} from '@/features/app/components'
import { StyledCentered } from './components'

// Redux
import {
	app_HANDLE_COUNTER,
	appGetCounter,
	EAppSliceHandleCounterType
} from '@/features/app/redux'

// Hooks
import { useAppDispatch, useAppSelector } from '@/plugins'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { TAppProps } from './types'

// Constants
import { E_APP_STACK_NAVIGATION } from '@/features/app/constants'

const AppScreen = memo(({ navigation }: TAppProps) => {
	// Translator
	const { t } = useTranslation()

	// Dispatcher
	const dispatch = useAppDispatch()

	// Selector
	const appCounter = useAppSelector(appGetCounter)

	/**
	 * @description Counter handler
	 *
	 * @param {EAppSliceHandleCounterType} type
	 *
	 * @return {void} void
	 */
	const onCounter = useCallback(
		(type: EAppSliceHandleCounterType): void => {
			dispatch(app_HANDLE_COUNTER({ type }))
		},
		[dispatch]
	)

	/**
	 * @description Navigate to home screen
	 *
	 * @return {void} void
	 */
	const onNavigateToHomeScreen = useCallback((): void => {
		navigation.navigate(E_APP_STACK_NAVIGATION.APP)
	}, [navigation])

	return (
		<AppWrapper>
			<StyledCentered>
				<AppView
					style={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<AppText>{t('app.welcome')}</AppText>

					<AppView
						flexDirection='row'
						gap='10px'
						marginBottom={'20px'}
						marginTop={'20px'}
					>
						<AppButton
							onPress={(): void =>
								onCounter(EAppSliceHandleCounterType.INCREASE)
							}
						>
							Increase
						</AppButton>
						<AppButton
							onPress={(): void =>
								onCounter(EAppSliceHandleCounterType.DECREASE)
							}
						>
							Decrease
						</AppButton>
					</AppView>

					<AppView>
						<AppText>{appCounter}</AppText>
					</AppView>

					<AppView flexDirection='row' gap='10px' marginTop={'20px'}>
						<AppButton onPress={onNavigateToHomeScreen}>Go To Home</AppButton>
					</AppView>
				</AppView>
			</StyledCentered>
		</AppWrapper>
	)
})

AppScreen.displayName = 'AppScreen'

export { AppScreen }
