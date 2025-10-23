import { Transport, type ClientProviderOptions } from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const LinkServiceClient: ClientProviderOptions = {
	name: EventService.LINK_SERVICE,
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.LINK_SERVICE,
		queueOptions: {
			durable: true,
		},
	},
}
