// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Option Screens
import { OptionScreen } from '@/features/options/screens'

const Stack = createNativeStackNavigator()
const OptionStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Option' component={OptionScreen} />
		</Stack.Navigator>
	)
}

export { OptionStackNavigation }
