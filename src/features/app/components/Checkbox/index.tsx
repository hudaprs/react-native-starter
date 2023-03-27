// React
import { memo } from 'react'

// Interfaces
import { IAppCheckboxProps } from './interfaces'

// Native Base
import { Checkbox } from 'native-base'

const AppCheckbox = memo((props: IAppCheckboxProps) => {
	return <Checkbox {...props} />
})

AppCheckbox.displayName = 'AppCheckbox'

export { AppCheckbox }
