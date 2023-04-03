// React Native
import { ViewProps } from 'react-native'

export interface IAppViewProps extends ViewProps {
	flexDirection?: 'row' | 'column'
	gap?: string
	marginBottom?: string
	marginTop?: string
	paddingBottom?: string
	paddingTop?: string
}
