// React
import { memo } from 'react'

// Interfaces
import { IAppWrapperProps } from './interfaces'

// Components
import { StyledSafeAreaView } from './components'

const AppWrapper = memo(({ children }: IAppWrapperProps) => {
	return <StyledSafeAreaView>{children}</StyledSafeAreaView>
})

AppWrapper.displayName = 'AppWrapper'

export { AppWrapper }
