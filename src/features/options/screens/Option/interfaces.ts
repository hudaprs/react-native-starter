// React Navigation
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Constants
import { OPTION_STACK_NAVIGATION } from '@/features/app/constants'

// Navigation
import { TOptionStackNavigationParams } from '@/features/options/navigations'
import {
	TAppDrawerNavigationParams,
	TAppRootStackNavigationParams
} from '@/features/app/navigations'

export type TOptionProps = CompositeScreenProps<
	NativeStackScreenProps<
		TOptionStackNavigationParams,
		OPTION_STACK_NAVIGATION.OPTION
	>,
	CompositeScreenProps<
		NativeStackScreenProps<TAppRootStackNavigationParams>,
		DrawerScreenProps<TAppDrawerNavigationParams>
	>
>
