// Constants
import { APP_COLOR, APP_FONT } from '@/features/app/constants/style.constant'

declare module 'styled-components/native' {
	export interface DefaultTheme {
		fontFamily: APP_FONT.FONT_FAMILY
		fonts: {
			regular: APP_FONT.REGULAR
		}
		colors: {
			primary: APP_COLOR.PRIMARY
		}
	}
}
