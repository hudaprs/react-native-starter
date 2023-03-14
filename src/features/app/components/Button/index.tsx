// React
import { memo } from 'react'

// Components
import { StyledButton } from './components'

// Interfaces
import { IAppButtonProps } from './interfaces'

const AppButton = memo(({ children, ...rest }: IAppButtonProps) => {
	return <StyledButton {...rest}>{children}</StyledButton>
})

AppButton.displayName = 'AppButton'

export { AppButton }
