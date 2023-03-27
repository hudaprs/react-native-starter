// Constant
import { E_APP_LANGUAGE } from '@/features/app/constants'

// Locales
import { appEn, appId } from '@/features/app/locales'
import { optionsEn, optionsId } from '@/features/options/locales'
import { todoEn, todoId } from '@/features/todo/locales'

const language = {
	[E_APP_LANGUAGE.EN]: {
		translation: {
			...appEn,
			...optionsEn,
			...todoEn
		}
	},
	[E_APP_LANGUAGE.ID]: {
		translation: {
			...appId,
			...optionsId,
			...todoId
		}
	}
}

export { language }
