import { Type } from 'class-transformer'
import { IsOptional, ValidateNested } from 'class-validator'

import { CreateUserProfileDto, type ICreateUserProfileDto } from '../users'

export interface IMigrateGuestDto {
	userProfile?: ICreateUserProfileDto
}

export class MigrateGuestDto {
	@IsOptional()
	@ValidateNested()
	@Type(() => CreateUserProfileDto)
	userProfile?: CreateUserProfileDto
}
