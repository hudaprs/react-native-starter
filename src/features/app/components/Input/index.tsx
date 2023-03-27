// React
import { forwardRef } from 'react'

// Interfaces
import { IAppInputProps } from './interfaces'

// Native Base
import { FormControl, Input } from 'native-base'

// Lodash
import omit from 'lodash.omit'

const AppInput = forwardRef(
	({ inputLabel, error, ...rest }: IAppInputProps, ref) => {
		return (
			<FormControl isInvalid={Boolean(error)}>
				{inputLabel && <FormControl.Label>{inputLabel}</FormControl.Label>}
				<Input {...omit(rest, ['ref'])} ref={ref as never} />
				{error?.message && (
					<FormControl.HelperText
						_text={{
							fontSize: 'xs',
							color: 'error.400'
						}}
					>
						{error.message}
					</FormControl.HelperText>
				)}
			</FormControl>
		)
	}
)

AppInput.displayName = 'AppInput'

export { AppInput }
