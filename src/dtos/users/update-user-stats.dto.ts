import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional } from 'class-validator'

export interface IUpdateUserStatsDto {
	created_links?: number
}

export class UpdateUserStatsDto implements IUpdateUserStatsDto {
	@IsOptional()
	@IsNumber()
	@ApiProperty({
		description: 'Number of links created by the user',
		required: false,
		example: 0,
	})
	created_links?: number
}
