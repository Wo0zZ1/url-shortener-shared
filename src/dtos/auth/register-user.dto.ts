import { CreateUserStatsDto, CreateUserProfileDto } from '../users'

export interface RegisterUserDto {
	login: string

	password: string

	userProfile: CreateUserProfileDto

	userStats?: CreateUserStatsDto
}
