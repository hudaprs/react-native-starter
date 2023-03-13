// React
import { memo } from 'react'

// Native Base
import { Container } from 'native-base'

// Interfaces
import { IAppWrapperProps } from './interfaces'

// Components
import { StyledSafeAreaView } from './components'

const AppWrapper = memo(({ children }: IAppWrapperProps) => {
	return (
		<StyledSafeAreaView>
			<Container>{children}</Container>
		</StyledSafeAreaView>
	)
})

AppWrapper.displayName = 'AppWrapper'

export { AppWrapper }
