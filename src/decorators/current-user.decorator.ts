import { createParamDecorator, type ExecutionContext } from '@nestjs/common'
import { type Request } from 'express'

import { type ICurrentUser } from '../interfaces'
import { type UserType } from '../types'

export const CurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): ICurrentUser => {
		const request = ctx.switchToHttp().getRequest<Request>()
		const headers = request.headers

		return {
			id: Number(headers['x-user-id']),
			type: headers['x-user-type'] as UserType,
			email: headers['x-user-email'] as string,
		}
	},
)
