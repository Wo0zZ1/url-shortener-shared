import { type ILinkStats } from './link-stats.entity'

export interface ILink {
	id: number

	userId: number

	baseLink: string

	shortLink: string

	linkStatsId: number

	createdAt: Date

	linkStats?: ILinkStats
}
