// React Redux
import { combineReducers } from '@reduxjs/toolkit'

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage'

// Redux Persist
import { persistReducer } from 'redux-persist'

// Reducers / Slices
import appReducer from '@/features/app/redux/slice'

// RTK
import { emptySplitApi } from '@/features/app'

// App reducer
const appPersistConfig = {
	key: 'app',
	storage: AsyncStorage,
	whitelist: ['counter']
}
const app = persistReducer(appPersistConfig, appReducer)

const rootReducer = combineReducers({
	app,
	[emptySplitApi.reducerPath]: emptySplitApi.reducer
})

export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
