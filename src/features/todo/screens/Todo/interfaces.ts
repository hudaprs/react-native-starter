// React Navigation
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Constants
import { E_TODO_STACK_NAVIGATION } from '@/features/app/constants'

// Navigation
import { TTodoStackNavigationParams } from '@/features/todo/navigations'
import {
	TAppDrawerNavigationParams,
	TAppRootStackNavigationParams
} from '@/features/app/navigations'

export type TTodoProps = CompositeScreenProps<
	NativeStackScreenProps<
		TTodoStackNavigationParams,
		E_TODO_STACK_NAVIGATION.TODO
	>,
	CompositeScreenProps<
		NativeStackScreenProps<TAppRootStackNavigationParams>,
		DrawerScreenProps<TAppDrawerNavigationParams>
	>
>
