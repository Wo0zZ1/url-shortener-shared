import { type LinkStats } from './link-stats.entity'

export interface Link {
	id: number

	userId: number

	baseLink: string

	shortLink: string

	linkStatsId: number

	createdAt: Date

	linkStats?: LinkStats
}
