import { ILink, ILinkStats } from '../entities'

// ============================================
// Link Responses (in method order)
// ============================================

/**
 * Response for GET /links/redirect/:shortLink
 * Public endpoint for redirecting short links
 */
export interface RedirectResponse {
	url: string
}

/**
 * Response for GET /links/user/:userId
 * Get user links with pagination
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
 * Create a new link
 */
export type CreateLinkResponse = ILink

/**
 * Response for GET /links/id/:shortLink
 * Get link information by short link
 */
export type GetLinkByShortLinkResponse = ILink

/**
 * Response for DELETE /links/:shortLink
 * Delete a link
 */
export type DeleteLinkResponse = ILink

/**
 * Response for GET /links/:shortLink/stats
 * Get link statistics
 */
export type GetLinkStatsResponse = ILinkStats

/**
 * Response for GET /links/:shortLink/qr
 * Generate QR code (returns Buffer)
 */
export type GetQRCodeResponse = Buffer

/**
 * Response for GET /links/user/:userId/stats
 * Get user links statistics
 */
export interface GetUserLinksStatsResponse {
	totalLinks: number
	totalRedirects: number
}

// ============================================
// Aliases for backward compatibility
// ============================================

export type PaginatedLinksResponse = GetUserLinksResponse
export type PaginatedLinks = GetUserLinksResponse
export type UserLinksStats = GetUserLinksStatsResponse
export type UserLinksStatsResponse = GetUserLinksStatsResponse
