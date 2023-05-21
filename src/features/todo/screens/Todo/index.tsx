// React
import { memo, useState, useCallback, useEffect } from 'react'

// Components
import {
	AppContainer,
	AppWrapper,
	AppButton,
	AppInput
} from '@/features/app/components'

// Components
import { List } from './components'

// i18n
import { useTranslation } from 'react-i18next'

// Plugins
import {
	useLazyTodo_indexQuery,
	useTodo_storeMutation
} from '@/features/todo/redux'

// Interfaces
// import { TTodoProps } from './interfaces'
import { ITodoForm } from '@/features/todo/types'

// Constants
import { TODO_FORM } from '@/features/todo/constants'

// Native Base
import { useToast } from 'native-base'

// React Hook Form
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationSchema = yup
	.object({
		title: yup.string().required().label('Title')
	})
	.required()

const TodoScreen = memo(() => {
	// Translation
	const { t } = useTranslation()

	// Toast
	const toast = useToast()

	// Common State
	const [loading, setLoading] = useState({
		isFirstTime: false
	})

	// Get todo list
	const [getTodoList, { data: todoList }] = useLazyTodo_indexQuery()

	// Store todo list
	const [storeTodoList, { isLoading: isStoreTodoLoading }] =
		useTodo_storeMutation()

	// Form
	const {
		control,
		handleSubmit,
		formState: { isValid },
		reset
	} = useForm({
		defaultValues: TODO_FORM,
		mode: 'all',
		resolver: yupResolver(validationSchema)
	})

	/**
	 * @description Handle loading
	 *
	 * @param {string} key
	 * @param {boolean} value
	 *
	 * @return {void} void
	 */
	const handleLoading = useCallback(
		(key: keyof typeof loading, value: boolean): void => {
			setLoading(previousLoading => ({ ...previousLoading, [key]: value }))
		},
		[]
	)

	/**
	 * @description Fetch todo list
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const fetchTodoList = useCallback(async (): Promise<void> => {
		handleLoading('isFirstTime', true)

		try {
			await getTodoList({ params: { _limit: 100 } }).unwrap()
		} catch (_) {
			//
		} finally {
			handleLoading('isFirstTime', false)
		}
	}, [getTodoList, handleLoading])

	/**
	 * @description Add todo handler
	 *
	 * @param {ITodoForm} form
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const onAddTodo = useCallback(
		async (form: ITodoForm): Promise<void> => {
			try {
				await storeTodoList({ body: form }).unwrap()

				if (todoList) {
					todoList.concat({
						id: Math.random(),
						title: form.title,
						completed: false
					})
				}

				toast.show({
					title: t('todo.alert.stored'),
					variant: 'solid'
				})

				reset(TODO_FORM)
			} catch (_) {
				//
			}
		},
		[storeTodoList, todoList, reset, t, toast]
	)

	// Do when user came to this screens
	useEffect(() => {
		fetchTodoList()
	}, [fetchTodoList])

	return (
		<AppWrapper>
			<AppContainer>
				{/* Title */}
				<Controller
					control={control}
					name='title'
					render={({
						field: { onChange, ...fieldRest },
						fieldState: { error }
					}) => {
						return (
							<AppInput
								{...fieldRest}
								error={error}
								onChangeText={onChange}
								inputLabel={t('todo.form.title') as string}
								placeholder={t('todo.formPlaceholder.title') as string}
							/>
						)
					}}
				/>

				{/* Button */}
				<AppButton
					marginTop={'20px'}
					onPress={handleSubmit(onAddTodo)}
					isDisabled={!isValid}
					isLoading={isStoreTodoLoading}
				>
					{t('app.action.submit')}
				</AppButton>

				{/* List */}
				<List list={todoList || []} loading={loading.isFirstTime} />
			</AppContainer>
		</AppWrapper>
	)
})

TodoScreen.displayName = 'TodoScreen'

export { TodoScreen }
