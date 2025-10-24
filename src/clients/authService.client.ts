import {
	MicroserviceOptions,
	Transport,
	type ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const AuthMicroservice: MicroserviceOptions = {
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.AUTH_SERVICE,
		queueOptions: {
			durable: true,
		},
		noAck: false,
		wildcards: true,
	},
}

export const AuthServiceClient: ClientProviderOptions = {
	name: EventService.AUTH_SERVICE,
	...AuthMicroservice,
}
