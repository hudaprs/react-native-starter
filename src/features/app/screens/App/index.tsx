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
	IAppSliceHandleCounterTypeEnum
} from '@/features/app/redux'

// Hooks
import { useAppDispatch, useAppSelector } from '@/plugins'

// React Navigation
import { useNavigation } from '@react-navigation/native'

// i18n
import { useTranslation } from 'react-i18next'

const AppScreen = memo(() => {
	// Translator
	const { t } = useTranslation()

	// Navigation
	const navigation = useNavigation()

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

	/**
	 * @description Navigate to home screen
	 *
	 * @return {void} void
	 */
	const onNavigateToHomeScreen = useCallback((): void => {
		navigation.navigate('App')
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
