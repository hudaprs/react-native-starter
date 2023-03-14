// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Home Screens
import { HomeScreen } from '@/features/home/screens'

const Stack = createNativeStackNavigator()
const HomeStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Home' component={HomeScreen} />
		</Stack.Navigator>
	)
}

export { HomeStackNavigation }
