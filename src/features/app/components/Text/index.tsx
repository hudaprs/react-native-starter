// React
import { memo } from 'react'

// Interfaces
import { IAppTextProps } from './interfaces'

// Components
import { StyledText } from './components'

const AppText = memo(({ children, ...rest }: IAppTextProps) => {
	return <StyledText {...rest}>{children}</StyledText>
})

AppText.displayName = 'AppText'

export { AppText }
