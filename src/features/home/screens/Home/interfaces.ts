// React Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'

// Constants
import { E_HOME_STACK_NAVIGATION } from '@/features/app/constants'

// Navigation
import {
	TAppDrawerNavigationParams,
	TAppRootStackNavigationParams
} from '@/features/app/navigations'
import { THomeStackNavigationParams } from '@/features/home/navigations'

export type THomeProps = CompositeScreenProps<
	NativeStackScreenProps<
		THomeStackNavigationParams,
		E_HOME_STACK_NAVIGATION.HOME
	>,
	CompositeScreenProps<
		NativeStackScreenProps<TAppRootStackNavigationParams>,
		DrawerScreenProps<TAppDrawerNavigationParams>
	>
>
