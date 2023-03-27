// React
import { memo } from 'react'

// React Native
import { Platform } from 'react-native'

// Native Base
import { FlatList, Row, Column, Box, Spinner } from 'native-base'

// Components
import { AppText, AppCheckbox } from '@/features/app/components'

// Interfaces
import { IListProps } from './interfaces'

const List = memo(({ list, loading }: IListProps) => {
	return (
		<Box marginTop={'20px'} flex={1}>
			{loading ? (
				<Box>
					<Spinner />
				</Box>
			) : (
				<FlatList
					keyExtractor={item => item.id.toString()}
					contentContainerStyle={{
						paddingBottom: Platform.OS === 'android' ? 20 : undefined
					}}
					data={list}
					renderItem={({ item }) => (
						<Box
							borderBottomWidth='1'
							borderColor='muted.800'
							pl={['0', '4']}
							pr={['0', '5']}
							py='2'
						>
							<Row space={2} justifyContent='space-between'>
								<Column>
									<AppCheckbox
										value={item.completed.toString()}
										accessibilityLabel='Complete'
										defaultIsChecked={item.completed.toString() === 'true'}
									/>
								</Column>
								<Column w='full'>
									<AppText>{item.title}</AppText>
								</Column>
							</Row>
						</Box>
					)}
				/>
			)}
		</Box>
	)
})

List.displayName = 'List'

export { List }
