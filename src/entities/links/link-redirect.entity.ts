export interface ILinkRedirect {
	id: number

	linkStatsId: number

	ip?: string | null

	browser?: string | null

	os?: string | null

	device?: string | null

	isMobile?: boolean | null

	isTablet?: boolean | null

	country?: string | null

	clickedAt: Date
}
