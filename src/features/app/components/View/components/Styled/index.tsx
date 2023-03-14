// Styled Components
import styled from 'styled-components'

// React Native
import { View } from 'react-native'

// Interfaces
import { IAppViewProps } from '@/features/app/components/View/interfaces'

export const StyledView = styled(View)<IAppViewProps>`
	flex-direction: ${(props): string => props?.flexDirection || 'column'};
	gap: ${(props): string => props?.gap || '0px'};
	margin-bottom: ${(props): string => props?.marginBottom || '0px'};
	margin-top: ${(props): string => props?.marginTop || '0px'};
	margin-vertical: ${(props): string => props?.marginVertical || '0px'};
	margin-horizontal: ${(props): string => props?.marginHorizontal || '0px'};
	padding-top: ${(props): string => props?.paddingTop || '0px'};
	padding-bottom: ${(props): string => props?.paddingBottom || '0px'};
	padding-vertical: ${(props): string => props?.paddingVertical || '0px'};
	padding-horizontal: ${(props): string => props?.paddingHorizontal || '0px'};
`
