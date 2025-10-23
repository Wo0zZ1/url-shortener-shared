import {
	IsDate,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'

import { UserType } from '../../types'
import { IUserProfileEntity, UserProfileEntity } from './user-profile.entity'
import { IUserStatsEntity, UserStatsEntity } from './user-stats.entity'

export interface IUserEntity {
	id: number
	uuid: string | null
	type: UserType
	createdAt: Date
	userProfile: IUserProfileEntity | null
	userStats: IUserStatsEntity | null
}

export class UserEntity implements IUserEntity {
	@IsNumber()
	@IsNotEmpty()
	id: number

	@IsString()
	@IsOptional()
	uuid: string | null

	@IsEnum(UserType)
	@IsNotEmpty()
	type: UserType

	@IsDate()
	@IsNotEmpty()
	@Type(() => Date)
	createdAt: Date

	@ValidateNested()
	@Type(() => UserProfileEntity)
	@IsOptional()
	userProfile: UserProfileEntity | null

	@ValidateNested()
	@Type(() => UserStatsEntity)
	@IsOptional()
	userStats: UserStatsEntity | null
}
