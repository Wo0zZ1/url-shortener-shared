import type { UserType } from '../../types'
import type { ICreateUserProfileDto } from './create-user-profile.dto'
import type { ICreateUserStatsDto } from './create-user-stats.dto'

export interface ICreateUserDto {
	type?: UserType

	uuid?: string

	userProfile?: ICreateUserProfileDto

	userStats?: ICreateUserStatsDto
}
