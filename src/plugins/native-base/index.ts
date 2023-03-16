// Native Base
import { extendTheme } from 'native-base'

// Constants
import { APP_COLOR } from '@/features/app/constants'

const nativeBaseTheme = extendTheme({
	colors: {
		// Add new color
		// Redefining only one shade, rest of the color will remain same.
		primary: {
			400: APP_COLOR.PRIMARY
		}
	}
})

export { nativeBaseTheme }
