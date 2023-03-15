// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Navigation
import { AppDrawerNavigation } from '@/features/app/navigations/Drawer'

// App Screens
import { AppScreen } from '@/features/app/screens'

// Interfaces
import { TAppRootStackNavigationParams } from './interfaces'

// Constants
import { APP_STACK_NAVIGATION } from '@/features/app/constants'

const Stack = createNativeStackNavigator<TAppRootStackNavigationParams>()
const AppRootStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator
			initialRouteName={APP_STACK_NAVIGATION.APP_ENTRY_POINT}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name={APP_STACK_NAVIGATION.APP_ENTRY_POINT}
				component={AppScreen}
			/>
			<Stack.Screen
				name={APP_STACK_NAVIGATION.APP}
				component={AppDrawerNavigation}
			/>
		</Stack.Navigator>
	)
}

export { AppDrawerNavigation, AppRootStackNavigation }
