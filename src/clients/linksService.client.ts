import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const LinkMicroservice: MicroserviceOptions = {
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.LINK_SERVICE,
		queueOptions: {
			durable: true,
		},
		noAck: false,
		wildcards: true,
	},
}

export const LinkServiceClient: ClientProviderOptions = {
	name: EventService.LINK_SERVICE,
	...LinkMicroservice,
}
