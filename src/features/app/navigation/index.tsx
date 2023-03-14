// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// React Navigation - Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer'

// App Screens
import { AppScreen } from '@/features/app/screens'

// Home Navigation
import { HomeStackNavigation } from '@/features/home/navigation'

// Option Navigation
import { OptionStackNavigation } from '@/features/options/navigation'

// i18n
import { useTranslation } from 'react-i18next'

const Drawer = createDrawerNavigator()
const AppDrawerNavigation = (): JSX.Element => {
	// Translation
	const { t } = useTranslation()

	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name='HomeParent'
				component={HomeStackNavigation}
				options={{ title: t('app.menu.home') as string }}
			/>
			<Drawer.Screen
				name='OptionParent'
				component={OptionStackNavigation}
				options={{ title: t('app.menu.options') as string }}
			/>
		</Drawer.Navigator>
	)
}

const Stack = createNativeStackNavigator()
const AppRootStackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator
			initialRouteName='AppEntryPoint'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='AppEntryPoint' component={AppScreen} />
			<Stack.Screen name='App' component={AppDrawerNavigation} />
		</Stack.Navigator>
	)
}

export { AppDrawerNavigation, AppRootStackNavigation }
