import { type UserType } from '../../types'
import { type UserProfileEntity } from './user-profile.entity'
import { type UserStatsEntity } from './user-stats.entity'

export interface UserEntity {
	id: number

	uuid: string | null

	type: UserType

	createdAt: Date

	userProfile: UserProfileEntity | null

	userStats: UserStatsEntity | null
}
