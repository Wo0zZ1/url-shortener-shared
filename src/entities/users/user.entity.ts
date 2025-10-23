import { type UserType } from '../../types'
import { type IUserProfileEntity } from './user-profile.entity'
import { type IUserStatsEntity } from './user-stats.entity'

export interface IUserEntity {
	id: number

	uuid: string | null

	type: UserType

	createdAt: Date

	userProfile: IUserProfileEntity | null

	userStats: IUserStatsEntity | null
}
