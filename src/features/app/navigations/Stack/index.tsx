// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Navigation
import { AppDrawerNavigation } from '@/features/app/navigations/Drawer'

// App Screens
import { AppScreen, AppSplashScreen } from '@/features/app/screens'

// Interfaces
import { TAppRootStackNavigationParams } from './interfaces'

// Constants
import { APP_STACK_NAVIGATION } from '@/features/app/constants'

// Plugins
import { useAppSelector } from '@/plugins'

// Redux
import { appGetInitialized } from '@/features/app/redux'

const Stack = createNativeStackNavigator<TAppRootStackNavigationParams>()
const AppRootStackNavigation = (): JSX.Element => {
	// Selector
	const appIsInitialized = useAppSelector(appGetInitialized)

	return (
		<Stack.Navigator
			initialRouteName={
				appIsInitialized
					? APP_STACK_NAVIGATION.ENTRY_POINT
					: APP_STACK_NAVIGATION.SPLASH
			}
			screenOptions={{ headerShown: false }}
		>
			{/* Check if app not initialized */}
			{!appIsInitialized && (
				<Stack.Screen
					name={APP_STACK_NAVIGATION.SPLASH}
					component={AppSplashScreen}
				/>
			)}

			{/* Check if app is initialized */}
			{appIsInitialized && (
				<>
					<Stack.Screen
						name={APP_STACK_NAVIGATION.ENTRY_POINT}
						component={AppScreen}
					/>
					<Stack.Screen
						name={APP_STACK_NAVIGATION.APP}
						component={AppDrawerNavigation}
					/>
				</>
			)}
		</Stack.Navigator>
	)
}

export { AppDrawerNavigation, AppRootStackNavigation }
