// React Navigation - Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer'

// Home Navigation
import { HomeStackNavigation } from '@/features/home/navigations'

// Option Navigation
import { OptionStackNavigation } from '@/features/options/navigations'

// Todo Navigation
import { TodoStackNavigation } from '@/features/todo/navigations'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { TAppDrawerNavigationParams } from './types'

// Constants
import { E_APP_DRAWER_NAVIGATION } from '@/features/app/constants'

const Drawer = createDrawerNavigator<TAppDrawerNavigationParams>()
const AppDrawerNavigation = (): JSX.Element => {
	// Translation
	const { t } = useTranslation()

	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name={E_APP_DRAWER_NAVIGATION.HOME_PARENT}
				component={HomeStackNavigation}
				options={{ title: t('app.menu.home') as string }}
			/>
			<Drawer.Screen
				name={E_APP_DRAWER_NAVIGATION.OPTION_PARENT}
				component={OptionStackNavigation}
				options={{ title: t('app.menu.options') as string }}
			/>
			<Drawer.Screen
				name={E_APP_DRAWER_NAVIGATION.TODO_PARENT}
				component={TodoStackNavigation}
				options={{ title: t('app.menu.todo') as string }}
			/>
		</Drawer.Navigator>
	)
}

export { AppDrawerNavigation }
