// React
import { memo } from 'react'

// Interfaces
import { IAppViewProps } from './types'

// Components
import { StyledView } from './components'

const AppView = memo(({ children, ...rest }: IAppViewProps) => {
	return <StyledView {...rest}>{children}</StyledView>
})

AppView.displayName = 'AppView'

export { AppView }
