// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Home Screens
import { HomeScreen } from '@/features/home/screens'

// Constants
import { E_HOME_STACK_NAVIGATION } from '@/features/app/constants'

// Interfaces
import { THomeStackNavigationParams } from './types'

const Stack = createNativeStackNavigator<THomeStackNavigationParams>()
const HomeStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={E_HOME_STACK_NAVIGATION.HOME}
				component={HomeScreen}
			/>
		</Stack.Navigator>
	)
}

export { HomeStackNavigation }
