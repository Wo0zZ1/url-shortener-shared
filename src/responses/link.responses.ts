import { ILink, ILinkStats } from '../entities'

/**
 * Response for GET /links/redirect/:shortLink
 */
export interface RedirectResponse {
	url: string
}

/**
 * Response for GET /links/user/:userId
 */
export interface GetUserLinksResponse {
	links: ILink[]
	pagination: {
		page: number
		limit: number
		total: number
		pages: number
	}
}

/**
 * Response for POST /links/user/:userId
 */
export type CreateLinkResponse = ILink

/**
 * Response for GET /links/id/:shortLink
 */
export type GetLinkByShortLinkResponse = ILink

/**
 * Response for DELETE /links/:shortLink
 */
export type DeleteLinkResponse = ILink

/**
 * Response for GET /links/:shortLink/stats
 */
export type GetLinkStatsResponse = ILinkStats

/**
 * Response for GET /links/:shortLink/qr
 */
export type GetQRCodeResponse = Buffer

/**
 * Response for GET /links/user/:userId/stats
 */
export interface GetUserLinksStatsResponse {
	totalLinks: number
	totalRedirects: number
}
