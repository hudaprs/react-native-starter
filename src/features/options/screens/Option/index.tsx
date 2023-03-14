// React
import { memo } from 'react'

// Components
import { AppContainer, AppWrapper } from '@/features/app/components'

// Native Base
import { FormControl, Select, CheckIcon } from 'native-base'

// i18n
import { useTranslation } from 'react-i18next'

// Constants
import { APP_LANGUAGE, APP_LANGUAGE_LIST } from '@/features/app/constants'

// Plugins
import { useAppSelector, useAppDispatch } from '@/plugins'

// Redux
import { appGetLanguage, app_HANDLE_LANGUAGE } from '@/features/app/redux'

const OptionScreen = memo(() => {
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
							dispatch(app_HANDLE_LANGUAGE(language as APP_LANGUAGE))
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
			</AppContainer>
		</AppWrapper>
	)
})

OptionScreen.displayName = 'OptionScreen'

export { OptionScreen }
