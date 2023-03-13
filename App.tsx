// Native Base
import { NativeBaseProvider } from 'native-base'

// App Components
import { AppEntryPoint } from './src/features/app/ui'

// React Redux
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'

// Store
import { store, persistor } from '@/plugins'

const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NativeBaseProvider>
					<AppEntryPoint />
				</NativeBaseProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
