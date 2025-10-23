import { Transport, type ClientProviderOptions } from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const AuthServiceClient: ClientProviderOptions = {
	name: EventService.AUTH_SERVICE,
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.AUTH_SERVICE,
		queueOptions: {
			durable: true,
		},
	},
}
