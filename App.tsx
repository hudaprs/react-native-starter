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

// Init i18n
import '@/plugins/i18n'

const App = (): JSX.Element => {
	return (
		<NativeBaseProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavigationContainer>
						<EntryPoint />
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</NativeBaseProvider>
	)
}

export default App
