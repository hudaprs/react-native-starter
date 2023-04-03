// React
import { memo } from 'react'

// Interfaces
import { TAppCheckboxProps } from './types'

// Native Base
import { Checkbox } from 'native-base'

const AppCheckbox = memo((props: TAppCheckboxProps) => {
	return <Checkbox {...props} />
})

AppCheckbox.displayName = 'AppCheckbox'

export { AppCheckbox }
