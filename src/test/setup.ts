// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup'

// RTK Query Warning
// Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.
import 'whatwg-fetch'

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock')

	// The mock for `call` immediately calls the callback which is incorrect
	// So we override it with a no-op
	Reanimated.default.call = () => {}

	return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// Async Storage
jest.mock('@react-native-async-storage/async-storage', () =>
	require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// Redux Flipper
jest.mock('redux-flipper', () => {
	//
})

// Redux Persist
jest.mock('redux-persist', () => {
	const real = jest.requireActual('redux-persist')
	return {
		...real,
		persistReducer: jest.fn().mockImplementation((config, reducers) => reducers)
	}
})

// I18n
jest.mock('react-i18next', () => ({
	initReactI18next: {
		type: '3rdParty',
		init: jest.fn()
	},

	// this mock makes sure any components using the translate hook can use it without a warning being shown
	useTranslation: () => {
		return {
			t: str => str,
			i18n: {
				changeLanguage: (): Promise<void> => new Promise(resolve => resolve())
			}
		}
	},
	// this mock makes sure any components using the translate HoC receive the t function as a prop
	withTranslation: () => Component => {
		Component.defaultProps = { ...Component.defaultProps, t: () => '' }
		return Component
	}
}))
