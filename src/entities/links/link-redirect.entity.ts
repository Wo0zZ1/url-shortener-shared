export interface LinkRedirect {
	id: number

	linkStatsId: number

	ip?: string

	browser?: string

	os?: string

	device?: string

	isMobile?: boolean

	isTablet?: boolean

	country?: string

	clickedAt: Date
}
