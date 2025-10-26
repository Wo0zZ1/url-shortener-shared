export interface LinkEntity {
	id: number
	userId: number
	originalUrl: string
	shortLink: string
	createdAt: Date
	updatedAt: Date
	linkStats?: LinkStatsEntity
}

export interface LinkStatsEntity {
	id: number
	linkId: number
	totalClicks: number
	uniqueClicks: number
	lastClickedAt?: Date
}

export interface PaginatedLinks {
	links: LinkEntity[]
	total: number
	page: number
	limit: number
}

export interface UserLinksStats {
	totalLinks: number
	totalClicks: number
	uniqueClicks: number
}
