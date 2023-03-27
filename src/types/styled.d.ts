// Plugins
import { styledComponentsTheme } from '@/plugins'

declare module 'styled-components/native' {
	export interface DefaultTheme {
		fontFamily: typeof styledComponentsTheme.fontFamily
		fonts: typeof styledComponentsTheme.fonts
		colors: typeof styledComponentsTheme.colors
	}
}
