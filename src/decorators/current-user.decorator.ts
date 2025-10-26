import { createParamDecorator, type ExecutionContext } from '@nestjs/common'
import { type Request } from 'express'

import { type ICurrentUser } from '../interfaces'
import { type UserType } from '../types'

export const CurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest<Request>()
		const headers = request.headers

		const currentUser: ICurrentUser = {
			id: Number(headers['x-user-id']),
			uuid: headers['x-user-uuid'] as string | undefined,
			type: headers['x-user-type'] as UserType,
		}

		return currentUser
	},
)
