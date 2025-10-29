import { Type } from 'class-transformer'
import { IsOptional, ValidateNested } from 'class-validator'

import { CreateUserProfileDto, type ICreateUserProfileDto } from '../users'
import { ApiProperty } from '@nestjs/swagger'

export interface IMigrateGuestDto {
	userProfile?: ICreateUserProfileDto
}

export class MigrateGuestDto {
	@IsOptional()
	@ValidateNested()
	@ApiProperty({ type: CreateUserProfileDto, required: false })
	@Type(() => CreateUserProfileDto)
	userProfile?: CreateUserProfileDto
}
