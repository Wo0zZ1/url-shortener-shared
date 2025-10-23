import { type LinkRedirect } from './link-redirect.entity'

export interface LinkStats {
	id: number

	redirectsCount: number

	createdAt: Date

	linkRedirects?: LinkRedirect[]
}
