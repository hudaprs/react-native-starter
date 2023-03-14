// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import { AppEntryPointScreen } from '@/features/app'

const Stack = createNativeStackNavigator()

const AppNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='AppEntryPoint' component={AppEntryPointScreen} />
		</Stack.Navigator>
	)
}

export { AppNavigation }
