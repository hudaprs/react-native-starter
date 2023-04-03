// React
import { memo } from 'react'

// Interfaces
import { IAppContainerProps } from './types'

// Components
import { StyledView } from './components'

const AppContainer = memo(({ children, ...rest }: IAppContainerProps) => {
	return <StyledView {...rest}>{children}</StyledView>
})

AppContainer.displayName = 'AppContainer'

export { AppContainer }
