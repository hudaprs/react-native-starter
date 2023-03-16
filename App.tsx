import 'react-native-gesture-handler'

// Native Base
import { NativeBaseProvider } from 'native-base'

// React Redux
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'

// Store
import { store, persistor } from '@/plugins'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

// Entry Point
import { EntryPoint } from '@/EntryPoint'

// Styled Components
import { ThemeProvider } from 'styled-components'

// Plugins
import { nativeBaseTheme, styledComponentsTheme } from '@/plugins'

// Init i18n
import '@/plugins/i18n'

const App = (): JSX.Element => {
	return (
		<NativeBaseProvider theme={nativeBaseTheme}>
			<ThemeProvider theme={styledComponentsTheme}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<NavigationContainer>
							<EntryPoint />
						</NavigationContainer>
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</NativeBaseProvider>
	)
}

export default App
