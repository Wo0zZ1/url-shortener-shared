import { ILink } from '../entities'

export interface PaginatedLinks {
	links: ILink[]
	total: number
	page: number
	limit: number
}

export interface UserLinksStats {
	totalLinks: number
	totalClicks: number
	uniqueClicks: number
}
