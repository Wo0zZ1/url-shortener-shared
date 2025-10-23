import { type UserType } from '../../types'
import { type UpdateUserProfileDto } from './update-user-profile.dto'
import { type UpdateUserStatsDto } from './update-user-stats.dto'

export interface UpdateUserDto {
	type?: UserType

	uuid?: string | null

	userProfile?: UpdateUserProfileDto

	userStats?: UpdateUserStatsDto
}
