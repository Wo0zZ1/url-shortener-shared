import { type ICreateUserProfileDto } from '../users'

export interface IMigrateGuestDto {
	userProfile?: ICreateUserProfileDto
}
