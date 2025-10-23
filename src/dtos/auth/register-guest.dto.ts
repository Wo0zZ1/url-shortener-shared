import { Type } from 'class-transformer'
import { IsOptional, ValidateNested } from 'class-validator'

import { CreateUserStatsDto, type ICreateUserStatsDto } from '../users'

export interface IRegisterGuestDto {
	userStats?: ICreateUserStatsDto
}

export class RegisterGuestDto {
	@IsOptional()
	@ValidateNested()
	@Type(() => CreateUserStatsDto)
	userStats?: CreateUserStatsDto
}
