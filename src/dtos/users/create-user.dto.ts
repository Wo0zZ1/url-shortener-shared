import type { UserType } from '../../types'
import type { CreateUserProfileDto } from './create-user-profile.dto'
import type { CreateUserStatsDto } from './create-user-stats.dto'

export interface CreateUserDto {
	type?: UserType

	uuid?: string

	userProfile?: CreateUserProfileDto

	userStats?: CreateUserStatsDto
}
