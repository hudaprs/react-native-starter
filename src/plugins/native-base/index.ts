// Native Base
import { extendTheme } from 'native-base'

// Constants
import { E_APP_COLORS, E_APP_FONTS } from '@/features/app/constants'

const nativeBaseTheme = extendTheme({
	colors: {
		// Add new color
		// Redefining only one shade, rest of the color will remain same.
		primary: {
			400: E_APP_COLORS.PRIMARY
		}
	},
	fontConfig: {
		Poppins: {
			100: {
				normal: E_APP_FONTS.LIGHT,
				italic: E_APP_FONTS.LIGHT_ITALIC
			},
			200: {
				normal: E_APP_FONTS.LIGHT,
				italic: E_APP_FONTS.LIGHT_ITALIC
			},
			300: {
				normal: E_APP_FONTS.LIGHT,
				italic: E_APP_FONTS.LIGHT_ITALIC
			},
			400: {
				normal: E_APP_FONTS.REGULAR,
				italic: E_APP_FONTS.ITALIC
			},
			500: {
				normal: E_APP_FONTS.MEDIUM,
				italic: E_APP_FONTS.MEDIUM_ITALIC
			},
			600: {
				normal: E_APP_FONTS.MEDIUM,
				italic: E_APP_FONTS.MEDIUM_ITALIC
			}
		}
	},
	fonts: {
		heading: E_APP_FONTS.BLACK,
		body: E_APP_FONTS.BLACK,
		mono: E_APP_FONTS.BLACK
	}
})

export { nativeBaseTheme }
