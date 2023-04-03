// React
import { memo } from 'react'

// Components
import {
	AppWrapper,
	AppText,
	AppButton,
	AppContainer
} from '@/features/app/components'

// Interfaces
import { THomeProps } from './types'

// Native Base
import { Row, Column } from 'native-base'

// Constants
import {
	E_APP_DRAWER_NAVIGATION,
	E_APP_STACK_NAVIGATION
} from '@/features/app/constants'

const HomeScreen = memo(({ navigation }: THomeProps) => {
	return (
		<AppWrapper>
			<AppContainer>
				<AppText>This is home</AppText>

				<Row marginTop={'20px'} justifyContent={'space-between'} space={3}>
					<Column w='1/2'>
						<AppButton
							onPress={(): void =>
								navigation.navigate(E_APP_STACK_NAVIGATION.ENTRY_POINT)
							}
						>
							Go To Entry Point
						</AppButton>
					</Column>
					<Column w='1/2'>
						<AppButton
							onPress={(): void =>
								navigation.navigate(E_APP_DRAWER_NAVIGATION.OPTION_PARENT)
							}
						>
							Go To Option
						</AppButton>
					</Column>
				</Row>
			</AppContainer>
		</AppWrapper>
	)
})

HomeScreen.displayName = 'HomeScreen'

export { HomeScreen }
