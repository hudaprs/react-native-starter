// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Option Screens
import { TodoScreen } from '@/features/todo/screens'

// Constants
import { E_TODO_STACK_NAVIGATION } from '@/features/app/constants'

// Interfaces
import { TTodoStackNavigationParams } from './interfaces'

const Stack = createNativeStackNavigator<TTodoStackNavigationParams>()
const TodoStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={E_TODO_STACK_NAVIGATION.TODO}
				component={TodoScreen}
			/>
		</Stack.Navigator>
	)
}

export { TodoStackNavigation }
