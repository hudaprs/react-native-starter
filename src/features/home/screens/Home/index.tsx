// React
import { memo } from 'react'

// Components
import { AppWrapper, AppText } from '@/features/app/components'

const HomeScreen = memo(() => {
	return (
		<AppWrapper>
			<AppText>This is home</AppText>
		</AppWrapper>
	)
})

HomeScreen.displayName = 'HomeScreen'

export { HomeScreen }
