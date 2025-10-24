import {
	MicroserviceOptions,
	Transport,
	type ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const UserMicroservice: MicroserviceOptions = {
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.USER_SERVICE,
		queueOptions: {
			durable: true,
		},
		noAck: false,
		wildcards: true,
	},
}

export const UserServiceClient: ClientProviderOptions = {
	name: EventService.USER_SERVICE,
	...UserMicroservice,
}
