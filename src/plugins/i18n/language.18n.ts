// Constant
import { E_APP_LANGUAGE } from '@/features/app/constants'

// Locales
import { appEn, appId } from '@/features/app/locales'
import { optionsEn, optionsId } from '@/features/options/locales'

const language = {
	[E_APP_LANGUAGE.EN]: {
		translation: {
			...appEn,
			...optionsEn
		}
	},
	[E_APP_LANGUAGE.ID]: {
		translation: {
			...appId,
			...optionsId
		}
	}
}

export { language }
