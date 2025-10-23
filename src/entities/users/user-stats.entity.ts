import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export interface IUserStatsEntity {
	id: number
	created_links: number | null
}

export class UserStatsEntity implements IUserStatsEntity {
	@IsNumber()
	@IsNotEmpty()
	id: number

	@IsNumber()
	@IsOptional()
	created_links: number | null
}
