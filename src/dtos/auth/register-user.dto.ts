import { ICreateUserStatsDto, ICreateUserProfileDto } from '../users'

export interface IRegisterUserDto {
	login: string

	password: string

	userProfile: ICreateUserProfileDto

	userStats?: ICreateUserStatsDto
}
