// React
import { memo } from 'react'

// Components
import { AppContainer, AppWrapper, AppButton } from '@/features/app/components'

// Native Base
import { FormControl, Select, CheckIcon, Row, Column } from 'native-base'

// i18n
import { useTranslation } from 'react-i18next'

// Constants
import {
	E_APP_LANGUAGE,
	APP_LANGUAGE_LIST,
	E_APP_STACK_NAVIGATION,
	E_APP_DRAWER_NAVIGATION
} from '@/features/app/constants'

// Plugins
import { useAppSelector, useAppDispatch } from '@/plugins'

// Redux
import { appGetLanguage, app_HANDLE_LANGUAGE } from '@/features/app/redux'

// Interfaces
import { TOptionProps } from './types'

const OptionScreen = memo(({ navigation }: TOptionProps) => {
	// Translation
	const { t } = useTranslation()

	// Dispatcher
	const dispatch = useAppDispatch()

	// Selector
	const appLanguage = useAppSelector(appGetLanguage)

	return (
		<AppWrapper>
			<AppContainer>
				{/* Select Language */}
				<FormControl>
					<FormControl.Label>{t('options.form.language')}</FormControl.Label>
					<Select
						selectedValue={appLanguage}
						accessibilityLabel={t('options.formPlaceholder.language') as string}
						placeholder={t('options.formPlaceholder.language') as string}
						_selectedItem={{
							bg: 'teal.600',
							endIcon: <CheckIcon size={2} />
						}}
						mt='1'
						onValueChange={(language: string): void => {
							dispatch(app_HANDLE_LANGUAGE(language as E_APP_LANGUAGE))
						}}
					>
						{APP_LANGUAGE_LIST.map(language => (
							<Select.Item
								key={language.value}
								label={language.text}
								value={language.value}
							/>
						))}
					</Select>
				</FormControl>

				<Row marginTop={'20px'} justifyContent={'space-between'} space={3}>
					<Column w='1/2'>
						<AppButton
							onPress={(): void =>
								navigation.navigate(E_APP_STACK_NAVIGATION.ENTRY_POINT)
							}
						>
							Go To Entry Point
						</AppButton>
					</Column>
					<Column w='1/2'>
						<AppButton
							onPress={(): void =>
								navigation.navigate(E_APP_DRAWER_NAVIGATION.HOME_PARENT)
							}
						>
							Go To Home
						</AppButton>
					</Column>
				</Row>
			</AppContainer>
		</AppWrapper>
	)
})

OptionScreen.displayName = 'OptionScreen'

export { OptionScreen }
