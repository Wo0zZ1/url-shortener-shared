import { type ILinkRedirect } from './link-redirect.entity'

export interface ILinkStats {
	id: number

	redirectsCount: number

	createdAt: Date

	linkRedirects?: ILinkRedirect[]
}
