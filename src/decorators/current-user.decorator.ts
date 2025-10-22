import { createParamDecorator, type ExecutionContext } from '@nestjs/common'

import { type ICurrentUser } from '../interfaces'
import { type Request } from 'express'
import { type UserRole } from '../types'

export const CurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): ICurrentUser => {
		const request = ctx.switchToHttp().getRequest() as Request
		const headers = request.headers

		return {
			id: Number(headers['x-user-id']),
			role: headers['x-user-role'] as UserRole,
			email: headers['x-user-email'] as string,
		}
	},
)
