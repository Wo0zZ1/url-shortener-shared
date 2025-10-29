import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional } from 'class-validator'

export interface ICreateUserStatsDto {
	created_links?: number
}

export class CreateUserStatsDto implements ICreateUserStatsDto {
	@IsNumber()
	@IsOptional()
	@ApiProperty({
		description: 'Number of links created by the user',
		required: false,
		example: 0,
	})
	created_links?: number
}
