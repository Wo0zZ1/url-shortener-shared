import { type UserType } from '../../types'
import { type IUpdateUserProfileDto } from './update-user-profile.dto'
import { type IUpdateUserStatsDto } from './update-user-stats.dto'

export interface IUpdateUserDto {
	type?: UserType

	uuid?: string | null

	userProfile?: IUpdateUserProfileDto

	userStats?: IUpdateUserStatsDto
}
