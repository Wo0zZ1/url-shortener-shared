import { Transport, type ClientProviderOptions } from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const UserServiceClient: ClientProviderOptions = {
	name: EventService.USER_SERVICE,
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.USER_SERVICE,
		queueOptions: {
			durable: true,
		},
	},
}
