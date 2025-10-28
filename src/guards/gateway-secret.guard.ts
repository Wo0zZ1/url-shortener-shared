import {
	Injectable,
	CanActivate,
	ExecutionContext,
	UnauthorizedException,
} from '@nestjs/common'
import type { Request } from 'express'

/**
 * Guard для проверки секретного ключа API Gateway.
 * Используется в микросервисах для защиты от прямых запросов.
 * Все запросы должны идти через Gateway API с валидным x-api-gateway-secret заголовком.
 */
@Injectable()
export class GatewaySecretGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<Request>()
		const gatewaySecret = request.headers['x-api-gateway-secret'] as string

		if (!process.env.API_GATEWAY_SECRET)
			throw new Error('API_GATEWAY_SECRET environment variable is not set')

		if (!gatewaySecret || gatewaySecret !== process.env.API_GATEWAY_SECRET)
			throw new UnauthorizedException(
				'Invalid or missing API Gateway secret. Direct access to microservices is not allowed.',
			)

		return true
	}
}
