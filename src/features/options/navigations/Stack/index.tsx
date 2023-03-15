// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Option Screens
import { OptionScreen } from '@/features/options/screens'

// Constants
import { OPTION_STACK_NAVIGATION } from '@/features/app/constants'

// Interfaces
import { TOptionStackNavigationParams } from './interfaces'

const Stack = createNativeStackNavigator<TOptionStackNavigationParams>()
const OptionStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={OPTION_STACK_NAVIGATION.OPTION}
				component={OptionScreen}
			/>
		</Stack.Navigator>
	)
}

export { OptionStackNavigation }
