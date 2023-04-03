// React
import { memo } from 'react'

// Components
import { StyledButton } from './components'

// Interfaces
import { TAppButtonProps } from './types'

const AppButton = memo(({ children, ...rest }: TAppButtonProps) => {
	return <StyledButton {...rest}>{children}</StyledButton>
})

AppButton.displayName = 'AppButton'

export { AppButton }
