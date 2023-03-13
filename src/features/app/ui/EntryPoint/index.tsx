// React
import { memo } from 'react'

// React Native
import { Text } from 'react-native'

// Components
import { AppWrapper } from '@/features/app'

const AppEntryPoint = memo(() => {
	return (
		<AppWrapper>
			<Text>App</Text>
		</AppWrapper>
	)
})

AppEntryPoint.displayName = 'AppEntryPoint'

export { AppEntryPoint }
