// Redux Toolkit
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'

// React Redux
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// Redux Persist
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage'

// Reducers / Slices
import rootReducer, { IRootState } from './reducer'

// package.json
import { name as appName } from '../../../package.json'

// Persist Config
const persistConfig = {
	key: appName,
	storage: AsyncStorage
}

// Make store persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Listener Middleware
export const listenerMiddleware = createListenerMiddleware()

// Root Store
const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).prepend(listenerMiddleware.middleware)
})

// Store that persisted
const persistor = persistStore(store)

export type IAppDispatch = typeof store.dispatch
export const useAppDispatch: () => IAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export { store, persistor }