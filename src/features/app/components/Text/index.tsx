// React
import { memo } from 'react'

// Interfaces
import { TAppTextProps } from './types'

// Components
import { StyledText } from './components'

const AppText = memo(({ children, ...rest }: TAppTextProps) => {
	return <StyledText {...rest}>{children}</StyledText>
})

AppText.displayName = 'AppText'

export { AppText }
