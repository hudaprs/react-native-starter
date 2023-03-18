// React
import { memo } from 'react'

// Components
import { AppWrapper, AppText } from '@/features/app/components'
import { StyledCentered, StyledFooter } from './components'

// React Native
import { Image } from 'react-native'

// i18n
import { useTranslation } from 'react-i18next'

// Native Base
import { Spinner } from 'native-base'

// package.json
import { version } from '../../../../../package.json'

const AppSplashScreen = memo(() => {
	// 	Translator
	const { t } = useTranslation()

	return (
		<AppWrapper>
			{/* Content */}
			<StyledCentered>
				<Image source={require('@/assets/images/gits-black.png')} />
				<AppText marginTop={'20px'}>{t('app.welcome')}</AppText>
				<Spinner marginTop={'20px'} />
			</StyledCentered>

			{/* Footer */}
			<StyledFooter>
				<AppText>v{version}</AppText>
			</StyledFooter>
		</AppWrapper>
	)
})

AppSplashScreen.displayName = 'AppSplashScreen'

export { AppSplashScreen }
