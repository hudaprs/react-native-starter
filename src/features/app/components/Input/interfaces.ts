// Native Base
import { IInputProps } from 'native-base'

// React Hook Fomr
import { FieldError } from 'react-hook-form'

export interface IAppInputProps extends IInputProps {
	inputLabel?: string
	error: FieldError | undefined
}
