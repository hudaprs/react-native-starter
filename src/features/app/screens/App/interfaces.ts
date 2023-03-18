// React Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Interfaces
import { TAppRootStackNavigationParams } from '@/features/app/navigations'

// Constants
import { APP_STACK_NAVIGATION } from '@/features/app/constants'

export type TAppProps = NativeStackScreenProps<
	TAppRootStackNavigationParams,
	APP_STACK_NAVIGATION.ENTRY_POINT
>
