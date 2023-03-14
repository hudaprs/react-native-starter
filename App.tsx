// Native Base
import { NativeBaseProvider } from 'native-base'

// App Components
import { AppNavigation } from './src/features/app'

// React Redux
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'

// Store
import { store, persistor } from '@/plugins'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NativeBaseProvider>
					<NavigationContainer>
						<AppNavigation />
					</NavigationContainer>
				</NativeBaseProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
