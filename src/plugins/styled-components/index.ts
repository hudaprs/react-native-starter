// Styled Components
import { DefaultTheme } from 'styled-components/native'

// Constants
import { APP_FONT, APP_COLOR } from '@/features/app/constants'

const styledComponentsTheme: DefaultTheme = {
	fontFamily: APP_FONT.FONT_FAMILY,
	fonts: {
		regular: APP_FONT.REGULAR
	},
	colors: {
		primary: APP_COLOR.PRIMARY
	}
}

export { styledComponentsTheme }
