// React
import { useEffect } from 'react'

// App Navigation
import { AppRootStackNavigation } from './features/app/navigations'

// React Native
import { StatusBar } from 'react-native'

// Plugins
import { useAppDispatch, useAppSelector } from './plugins'

// Redux
import { appGetLanguage, app_HANDLE_LANGUAGE } from './features/app/redux'

const EntryPoint = (): JSX.Element => {
	// Dispatcher
	const dispatch = useAppDispatch()

	// Selector
	const appLanguage = useAppSelector(appGetLanguage)

	// Handle localization
	useEffect(() => {
		dispatch(app_HANDLE_LANGUAGE(appLanguage))

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<StatusBar />
			<AppRootStackNavigation />
		</>
	)
}

export { EntryPoint }
